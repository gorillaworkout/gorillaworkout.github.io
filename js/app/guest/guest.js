import { image } from './image.js';
import { audio } from './audio.js';
import { progress } from './progress.js';
import { util } from '../../common/util.js';
import { bs } from '../../libs/bootstrap.js';
import { theme } from '../../common/theme.js';
import { lang } from '../../common/language.js';
import { storage } from '../../common/storage.js';
import { session } from '../../common/session.js';
import { offline } from '../../common/offline.js';
import { comment } from '../components/comment.js';
import * as confetti from '../../libs/confetti.js';

export const guest = (() => {

    let information = null;
    let config = null;

    const countDownDate = () => {
        const count = (new Date(document.body.getAttribute('data-time').replace(' ', 'T'))).getTime();

        const updateCountdown = () => {
            const distance = Math.abs(count - Date.now());

            document.getElementById('day').innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
            document.getElementById('hour').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
            document.getElementById('minute').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
            document.getElementById('second').innerText = Math.floor((distance % (1000 * 60)) / 1000).toString();

            util.timeOut(updateCountdown, 1000 - (Date.now() % 1000));
        };

        requestAnimationFrame(updateCountdown);
    };

    const showGuestName = () => {
        const raw = window.location.search.split('to=');
        let name = null;

        if (raw.length > 1 && raw[1].length >= 1) {
            name = window.decodeURIComponent(raw[1]);
        }

        if (name) {
            const guestName = document.getElementById('guest-name');
            const div = document.createElement('div');
            div.classList.add('m-2');

            const template = `<small class="mt-0 mb-1 mx-0 p-0">${util.escapeHtml(guestName?.getAttribute('data-message'))}</small><p class="m-0 p-0" style="font-size: 1.5rem">${util.escapeHtml(name)}</p>`;
            util.safeInnerHTML(div, template);

            guestName?.appendChild(div);
        }

        const form = document.getElementById('form-name');
        if (form) {
            form.value = information.get('name') ?? name;
        }
    };

    const slide = async () => {
        let index = 0;
        let lastTime = 0;
        const interval = 6000;
        const slides = document.querySelectorAll('.slide-desktop');

        if (!slides || slides.length === 0) {
            return;
        }

        if (slides.length === 1) {
            util.changeOpacity(slides[0], true);
            return;
        }

        for (const [i, s] of slides.entries()) {
            if (i === index) {
                s.classList.add('slide-desktop-active');
                await util.changeOpacity(s, true);
                break;
            }
        }

        const nextSlide = async () => {
            await util.changeOpacity(slides[index], false);
            slides[index].classList.remove('slide-desktop-active');

            index = (index + 1) % slides.length;

            slides[index].classList.add('slide-desktop-active');
            await util.changeOpacity(slides[index], true);
        };

        const loop = async (time) => {
            if (time - lastTime >= interval) {
                lastTime = time;
                await nextSlide();
            }

            requestAnimationFrame(loop);
        };

        util.timeOut(loop, interval);
    };

   const open = (button) => {
    button.disabled = true;
    document.body.scrollIntoView({ behavior: 'instant' });
    document.dispatchEvent(new Event('undangan.open'));

    if (theme.isAutoMode()) {
        document.getElementById('button-theme').classList.remove('d-none');
    }

    slide();
    theme.spyTop();

    confetti.basicAnimation();
    util.timeOut(confetti.openAnimation, 1500);
    util.changeOpacity(document.getElementById('welcome'), false).then((el) => el.remove());

    // Ensure audio plays after user interaction
    util.timeOut(() => {
        try {
            const player = document.getElementById('audio-player');
            if (player && player.paused) {
                player.play().catch(() => {});
            }
        } catch (err) {
            console.warn("Audio play failed:", err);
        }
    }, 300);
};

    const modal = (img) => {
        document.getElementById('button-modal-click').setAttribute('href', img.src);
        document.getElementById('button-modal-download').setAttribute('data-src', img.src);
        document.getElementById('modal-image').querySelector('.position-absolute').classList.replace('d-none', 'd-flex');

        const i = document.getElementById('show-modal-image');
        i.src = img.src;
        i.width = img.width;
        i.height = img.height;
        bs.modal('modal-image').show();
    };

    const showStory = (div) => {
        confetti.tapTapAnimation(div, 100);
        util.changeOpacity(div, false).then((e) => e.remove());
    };

    const closeInformation = () => information.set('info', true);

    const normalizeArabicFont = () => {
        document.querySelectorAll('.font-arabic').forEach((el) => {
            el.innerHTML = String(el.innerHTML).normalize('NFC');
        });
    };

    const animateSvg = () => {
        document.querySelectorAll('svg').forEach((el) => {
            util.timeOut(() => el.classList.add(el.getAttribute('data-class')), parseInt(el.getAttribute('data-time')));
        });
    };

    const buildGoogleCalendar = () => {
        const formatDate = (d) => (new Date(d + ':00Z')).toISOString().replace(/[-:]/g, '').split('.').shift();

        const url = new URL('https://calendar.google.com/calendar/render');
        const data = new URLSearchParams({
            action: 'TEMPLATE',
            text: 'The Wedding of Wahyu and Riski',
            dates: `${formatDate('2023-03-15 10:00')}/${formatDate('2023-03-15 11:00')}`,
            details: 'Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami. Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.',
            location: 'RT 10 RW 02, Desa Pajerukan, Kec. Kalibagor, Kab. Banyumas, Jawa Tengah 53191.',
            ctz: config.get('tz'),
        });

        url.search = data.toString();
        document.querySelector('#home button')?.addEventListener('click', () => window.open(url, '_blank'));
    };

    const loaderConfetti = () => {
        progress.add();

        const load = (isLoad) => {
            if (!isLoad) {
                progress.complete('confetti', true);
                return;
            }

            confetti.loadConfetti()
                .then(() => progress.complete('confetti'))
                .catch(() => progress.invalid('confetti'));
        };

        return {
            load,
        };
    };

    const booting = async () => {
        animateSvg();
        countDownDate();
        showGuestName();
        normalizeArabicFont();
        buildGoogleCalendar();

        document.getElementById('root').classList.remove('opacity-0');

        document.getElementById('show-modal-image').addEventListener('click', (e) => {
            const abs = e.currentTarget.parentNode.querySelector('.position-absolute');

            abs.classList.contains('d-none')
                ? abs.classList.replace('d-none', 'd-flex')
                : abs.classList.replace('d-flex', 'd-none');
        });

        if (information.has('presence')) {
            document.getElementById('form-presence').value = information.get('presence') ? '1' : '2';
        }

        if (information.get('info')) {
            document.getElementById('information')?.remove();
        }

        window.AOS.init();
        document.body.scrollIntoView({ behavior: 'instant' });

        await util.changeOpacity(document.getElementById('welcome'), true);

        await util.changeOpacity(document.getElementById('loading'), false).then((el) => el.remove());
    };

    const domLoaded = () => {
        lang.init();
        offline.init();
        progress.init();

        config = storage('config');
        information = storage('information');

        const img = image.init();
        const aud = audio.init(); // initialized, but DO NOT call aud.load() yet
        const cfi = loaderConfetti();
        const token = document.body.getAttribute('data-key');
        const params = new URLSearchParams(window.location.search);

        document.addEventListener('progress.done', () => booting());
        document.addEventListener('hide.bs.modal', () => document.activeElement?.blur());
        document.getElementById('button-modal-download').addEventListener('click', (e) => {
            img.download(e.currentTarget.getAttribute('data-src'));
        });

        // Function to load audio after user interaction
        const setupAudioAfterInteraction = () => {
            aud.load(); // iOS Safari now allows it
            document.removeEventListener('click', setupAudioAfterInteraction);
            document.removeEventListener('touchstart', setupAudioAfterInteraction);
        };

        document.addEventListener('click', setupAudioAfterInteraction, { once: true });
        document.addEventListener('touchstart', setupAudioAfterInteraction, { once: true });

        if (!token || token.length <= 0) {
            img.load();
            cfi.load(document.body.getAttribute('data-confetti') === 'true');

            document.getElementById('comment')?.remove();
            document.querySelector('a.nav-link[href="#comment"]')?.closest('li.nav-item')?.remove();
        }

        if (token && token.length > 0) {
            progress.add(); // config
            progress.add(); // comment

            if (!img.hasDataSrc()) {
                img.load();
            }

            const loader = () => session.guest(params.get('k') ?? token).then(({ data }) => {
                progress.complete('config');
                if (img.hasDataSrc()) {
                    img.load();
                }

                comment.init();
                cfi.load(data.is_confetti_animation);

                comment.show()
                    .then(() => progress.complete('comment'))
                    .catch(() => progress.invalid('comment'));
            }).catch(() => progress.invalid('config'));

            window.addEventListener('load', loader);
        }
    };

    const init = () => {
        theme.init();
        session.init();

        if (session.isAdmin()) {
            storage('user').clear();
            storage('owns').clear();
            storage('likes').clear();
            storage('session').clear();
            storage('comment').clear();
        }

        window.addEventListener('DOMContentLoaded', domLoaded);

        return {
            util,
            theme,
            comment,
            guest: {
                open,
                modal,
                showStory,
                closeInformation,
            },
        };
    };

    return {
        init,
    };
})();
