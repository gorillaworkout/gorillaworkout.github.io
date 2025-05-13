import { progress } from './progress.js';
import { cache } from '../../connection/cache.js';

export const audio = (() => {

    const statePlay = '<i class="fa-solid fa-circle-pause spin-button"></i>';
    const statePause = '<i class="fa-solid fa-circle-play"></i>';

    /**
     * @type {HTMLAudioElement|null}
     */
    let audioEl = null;

    /**
     * @type {HTMLButtonElement|null}
     */
    let music = null;

    /**
     * @type {boolean}
     */
    let isPlay = false;

    /**
     * @returns {Promise<void>}
     */
    const initializeAudio = async () => {
        const url = document.body.getAttribute('data-audio');

        if (!url) {
            progress.complete('audio', true);
            return;
        }

        try {
            const cancel = new Promise((res) =>
                document.addEventListener('progress.invalid', res, { once: true })
            );

            audioEl = new Audio(await cache('audio').get(url, cancel));
            audioEl.volume = 1;
            audioEl.loop = true;
            audioEl.muted = false;
            audioEl.currentTime = 0;
            audioEl.autoplay = false;
            audioEl.controls = false;

            await new Promise((res) =>
                audioEl.addEventListener('canplay', res, { once: true })
            );

            progress.complete('audio');
        } catch (err) {
            console.error('Audio initialization failed:', err);
            progress.invalid('audio');
        }
    };

    /**
     * @returns {Promise<void>}
     */
    const play = async () => {
        if (!navigator.onLine || !music || !audioEl) return;

        music.disabled = true;

        try {
            await audioEl.play();
            isPlay = true;
            music.innerHTML = statePlay;
        } catch (err) {
            isPlay = false;
            alert(`Failed to play audio: ${err.message}`);
        } finally {
            music.disabled = false;
        }
    };

    /**
     * @returns {void}
     */
    const pause = () => {
        if (!audioEl) return;

        isPlay = false;
        audioEl.pause();
        music.innerHTML = statePause;
    };

    /**
     * @returns {Promise<void>}
     */
    const load = async () => {
        music = document.getElementById('button-music');

        if (!music) {
            progress.complete('audio', true);
            return;
        }

        // Wait for user gesture to initialize audio
        const handleClick = async () => {
            music.removeEventListener('click', handleClick); // One-time init

            await initializeAudio();

            if (!audioEl) return;

            music.classList.remove('d-none');
            await play();

            // Allow toggle after first gesture
            music.addEventListener('click', () => {
                isPlay ? pause() : play();
            });
        };

        // Show button and bind first gesture
        music.classList.remove('d-none');
        music.addEventListener('click', handleClick);

        // Optional: Pause on offline
        music.addEventListener('offline', pause);
    };

    const init = () => {
        progress.add();

        return {
            load,
        };
    };

    return {
        init,
    };
})();
