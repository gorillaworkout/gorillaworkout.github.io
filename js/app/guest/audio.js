import { progress } from './progress.js';
import { cache } from '../../connection/cache.js';

export const audio = (() => {
    const statePlay = '<i class="fa-solid fa-circle-pause spin-button"></i>';
    const statePause = '<i class="fa-solid fa-circle-play"></i>';

    /** @type {HTMLAudioElement|null} */
    let audioEl = null;
    let isPlay = false;
    let url = null;
    let music = null;

    const handleUserClick = async () => {
        console.log('[audio] Button clicked');
        if (!music) {
            console.warn('[audio] music button not found!');
            return;
        }

        music.disabled = true;

        try {
            if (!audioEl) {
                console.log('[audio] Creating new audio element');
                audioEl = new Audio();
                audioEl.loop = true;
                audioEl.volume = 1;

                url = document.body.getAttribute('data-audio');
                console.log('[audio] data-audio URL:', url);
                if (!url) {
                    progress.complete('audio', true);
                    return;
                }

                const cancel = new Promise((res) =>
                    document.addEventListener('progress.invalid', res, { once: true })
                );

                const audioSrc = await cache('audio').get(url, cancel);
                console.log('[audio] Loaded audioSrc:', audioSrc);

                audioEl.src = audioSrc;

                await new Promise((res) =>
                    audioEl.addEventListener('canplaythrough', res, { once: true })
                );

                console.log('[audio] Audio ready to play');
                progress.complete('audio');
            }

            if (isPlay) {
                audioEl.pause();
                music.innerHTML = statePause;
                isPlay = false;
            } else {
                await audioEl.play();
                music.innerHTML = statePlay;
                isPlay = true;
            }
        } catch (err) {
            alert('Audio error: ' + err.message);
            console.error('[audio] Error:', err);
            progress.invalid('audio');
        } finally {
            music.disabled = false;
        }
    };

    const setup = () => {
        console.log('[audio] setup() called');
        music = document.getElementById('button-music');
        if (!music) {
            console.warn('[audio] Button with ID "button-music" not found!');
            return;
        }

        music.classList.remove('d-none');
        music.disabled = false;
        music.addEventListener('click', handleUserClick, { once: true });

        console.log('[audio] Music button initialized and visible');
    };

    return {
        init: setup,
    };
})();
