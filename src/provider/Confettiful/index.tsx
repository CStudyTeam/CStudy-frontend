export default class Confettiful {
    private el: HTMLElement;
    private containerEl: HTMLElement | null;
    private confettiFrequency: number;
    private confettiColors: string[];
    private confettiAnimations: string[];
    private lastFrameTime: number;
    private maxConfettiCount: number;
    private currentConfettiCount: number;

    constructor(el: HTMLElement) {
        this.el = el;
        this.containerEl = null;

        this.confettiFrequency = 20;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];
        this.maxConfettiCount = 28;
        this.currentConfettiCount = 0;

        this.lastFrameTime = performance.now();

        this._setupElements();
        this._renderConfetti();
    }

    private _setupElements(): void {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;

        if (elPosition !== 'relative' && elPosition !== 'absolute') {
            this.el.style.position = 'relative';
        }

        containerEl.classList.add('confetti-container');
        this.el.appendChild(containerEl);
        this.containerEl = containerEl;
    }

    private _renderConfetti(): void {
        const render = (timestamp: number) => {
            if (timestamp - this.lastFrameTime > 1000 / this.confettiFrequency) {
                if (this.currentConfettiCount >= this.maxConfettiCount) {
                    return;
                }
                const confettiEl = document.createElement('div');
                const confettiSize = Math.floor(Math.random() * 10) + 7 + 'px';
                const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
                const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + 'px';
                const confettiAnimation =
                    this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

                confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
                confettiEl.style.left = confettiLeft;
                confettiEl.style.width = confettiSize;
                confettiEl.style.height = confettiSize;
                confettiEl.style.backgroundColor = confettiBackground;

                this.currentConfettiCount++;
                setTimeout(() => {
                    if (confettiEl.parentNode) {
                        confettiEl.parentNode.removeChild(confettiEl);
                    }
                }, 3000);

                if (this.containerEl) {
                    this.containerEl.appendChild(confettiEl);
                }

                this.lastFrameTime = timestamp;
            }

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    }
}
