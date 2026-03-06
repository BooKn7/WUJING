export interface StarFXConfig {
    starsLayer: HTMLElement;
    toggleBtn: HTMLElement;
}


class ClickZone {
    private container: HTMLElement;
    private button: HTMLElement;
    private clicks: number = 0;
    private manager: StarFXManager;

    constructor(manager: StarFXManager, layer: HTMLElement) {
        this.manager = manager;

        this.container = document.createElement('div');
        this.container.className = 'ourstars-click-zone-container';

        // Instructions
        const instructions = document.createElement('div');
        instructions.className = 'ourstars-instructions';
        instructions.innerHTML = `
            <div class="inst-content-main">
                <div class="inst-group inst-jp">
                    <div class="inst-title">星の生成器</div>
                    <p><span>1.</span> クリックして星を生成</p>
                    <p><span>2.</span> 同じLvの星を3つドラッグして合成</p>
                    <p><span>3.</span> 星は全部で3種類（最大Lv.3）</p>
                    <p><span>?</span> その形、どこかで見たような…</p>
                </div>
                <div class="inst-divider"></div>
                <div class="inst-group inst-en">
                    <div class="inst-title">Star Generator</div>
                    <p><span>1.</span> Click generator to get stars</p>
                    <p><span>2.</span> Drag 3 stars of same level to merge</p>
                    <p><span>3.</span> 3 star levels total (Max Lv.3)</p>
                    <p><span>?</span> This star shape looks strangely familiar.</p>
                </div>
            </div>
            <div class="inst-unlock-hint" style="opacity: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%; pointer-events: none; transition: opacity 0.5s; font-family: var(--font-pixel), monospace; color: var(--color-brand-primary); font-size: 14px; font-weight: bold;">
            </div>
        `;

        // Click Button
        this.button = document.createElement('div');
        this.button.className = 'ourstars-click-zone';

        this.container.appendChild(this.button);
        this.container.appendChild(instructions);
        layer.appendChild(this.container);

        // Prevent text selection
        this.button.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            this.onInteract();
        });
        this.button.addEventListener('dblclick', (e) => {
            e.preventDefault();
            this.onInteract();
        });
        this.button.addEventListener('selectstart', (e) => e.preventDefault());
    }

    private onInteract() {
        this.clicks++;

        // Floating click text
        const pt = document.createElement('div');
        pt.innerText = '+' + this.clicks;
        pt.style.position = 'absolute';
        pt.style.right = '80px';
        pt.style.top = '-20px';
        pt.style.color = '#FFFBEA';
        pt.style.fontFamily = 'var(--font-pixel), monospace';
        pt.style.fontWeight = 'bold';
        pt.style.fontSize = '24px';
        pt.style.pointerEvents = 'none';
        pt.style.transition = 'all 0.5s ease-out';
        pt.style.zIndex = '1000';
        pt.style.textShadow = '0 0 5px rgba(255,200,100,0.8)';
        this.button.appendChild(pt);

        // Ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ourstars-ripple';
        this.button.appendChild(ripple);

        requestAnimationFrame(() => {
            pt.style.transform = 'translateY(-40px)';
            pt.style.opacity = '0';
        });

        setTimeout(() => pt.remove(), 500);
        setTimeout(() => ripple.remove(), 600);

        if (this.clicks % 10 === 0) {
            // Do the same, maybe just an extra ripple, but ONLY ONE STAR ALWAYS
            const rect = this.button.getBoundingClientRect();
            const spawnX = rect.left + window.scrollX + rect.width / 2;
            const spawnY = rect.top + window.scrollY + rect.height / 2;
            this.manager.spawnSmallStars(spawnX, spawnY, 1, 1, 1);
        } else {
            const rect = this.button.getBoundingClientRect();
            const spawnX = rect.left + window.scrollX + rect.width / 2;
            const spawnY = rect.top + window.scrollY + rect.height / 2;
            this.manager.spawnSmallStars(spawnX, spawnY, 1, 1, 1);
        }
    }

    private explodeStars() {
        // ALWAYS just spawn 1 star on click, no multiple explosions
        const count = 1;
        const rect = this.button.getBoundingClientRect();
        const spawnX = rect.left + window.scrollX + rect.width / 2;
        const spawnY = rect.top + window.scrollY + rect.height / 2;

        this.manager.spawnSmallStars(spawnX, spawnY, count, 1, 1);
    }

    public showUnlockHint(count: number) {
        const hintEl = this.container.querySelector('.inst-unlock-hint') as HTMLElement;
        const mainEl = this.container.querySelector('.inst-content-main') as HTMLElement;
        if (hintEl && mainEl) {
            mainEl.style.opacity = '0';
            hintEl.innerHTML = 'Click to get stars ( +' + count + ' )';
            hintEl.style.opacity = '1';

            setTimeout(() => {
                hintEl.style.opacity = '0';
                mainEl.style.opacity = '1';

                // If instructions close, flash hint on newest black hole
                const latestHole = this.manager.blackHoles[this.manager.blackHoles.length - 1];
                if (latestHole) {
                    latestHole.flashHint();
                }
            }, 2000);
        }
    }

    public destroy() {
        this.container.remove();
    }
}

class BlackHole {
    public level: number;
    public manager: StarFXManager;
    private el: HTMLElement;
    private targetEl: HTMLElement;
    public isFilled: boolean = false;

    constructor(manager: StarFXManager, layer: HTMLElement, targetEl: HTMLElement, level: number) {
        this.manager = manager;
        this.targetEl = targetEl;
        this.level = level;

        this.el = document.createElement('div');
        this.el.className = 'ourstars-black-hole level-' + level;

        const ring = document.createElement('div');
        ring.className = 'bh-gravity-ring';
        this.el.appendChild(ring);

        const flash = document.createElement('div');
        flash.className = 'bh-unlock-flash';
        this.el.appendChild(flash);
        setTimeout(() => flash.remove(), 800);

        layer.appendChild(this.el);
        this.updatePosition();

        setTimeout(() => {
            this.el.classList.add('active');
        }, 100);
    }

    public updatePosition() {
        const rect = this.targetEl.getBoundingClientRect();
        this.el.style.left = (rect.left + window.scrollX) + 'px';
        this.el.style.top = (rect.top + window.scrollY) + 'px';
    }

    public get x() {
        const rect = this.targetEl.getBoundingClientRect();
        return rect.left + window.scrollX;
    }

    public get y() {
        const rect = this.targetEl.getBoundingClientRect();
        return rect.top + window.scrollY;
    }

    public absorb() {
        if (this.isFilled) return;
        this.isFilled = true;
        this.el.classList.remove('active');

        const ripple = document.createElement('div');
        ripple.className = 'bh-absorb-ripple';
        this.el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        this.el.style.opacity = '0.4';
        const ring = this.el.querySelector('.bh-gravity-ring') as HTMLElement;
        if (ring) ring.style.animationDuration = '20s';

        this.manager.checkCompletion();
    }

    public flashHint() {
        if (this.isFilled) return;
        this.el.style.boxShadow = '0 0 30px rgba(255, 230, 150, 0.8), inset 0 0 20px rgba(0, 0, 0, 1)';
        const flash = document.createElement('div');
        flash.className = 'bh-unlock-flash';
        this.el.appendChild(flash);
        setTimeout(() => flash.remove(), 1000);
        setTimeout(() => {
            this.el.style.boxShadow = '';
        }, 1000);
    }

    public destroy() {
        this.el.remove();
    }
}

class SmallStar {
    private el: HTMLElement;
    public x: number;
    public y: number;
    public level: number;
    private vx: number;
    private vy: number;
    private manager: StarFXManager;
    private isDragging: boolean = false;
    private dragStartX: number = 0;
    private dragStartY: number = 0;
    private initialX: number = 0;
    private initialY: number = 0;
    public isDead: boolean = false;
    public isEmbedded: boolean = false;

    constructor(manager: StarFXManager, layer: HTMLElement, x: number, y: number, level: number, speedMult: number = 1.0) {
        this.manager = manager;
        this.x = x;
        this.y = y;
        this.level = level;

        // Shoot strictly to the left if speedMult > 0
        if (speedMult > 0) {
            const angle = Math.PI + (Math.random() - 0.5) * 0.4;
            const minForce = 5;
            const maxForce = 65;
            const force = minForce + (Math.random() * (maxForce - minForce));
            this.vx = Math.cos(angle) * force * speedMult;
            this.vy = Math.sin(angle) * force * speedMult;
        } else {
            // Perfect standstill (e.g. from merging)
            this.vx = 0;
            this.vy = 0;
        }

        this.el = document.createElement('div');
        this.el.className = 'ourstars-small-star level-' + level;

        // Create inner visuals based on level (Levels 1 to 3)
        if (level === 3) {
            const ring1 = document.createElement('div');
            ring1.className = 'star-ring-large';
            const ring2 = document.createElement('div');
            ring2.className = 'star-core-glow';
            this.el.appendChild(ring1);
            this.el.appendChild(ring2);
        }

        this.updateTransform();
        layer.appendChild(this.el);

        this.bindEvents();
    }

    private bindEvents() {
        this.el.addEventListener('pointerdown', this.onPointerDown.bind(this));
        this.el.addEventListener('dblclick', (e) => e.preventDefault());
        this.el.addEventListener('selectstart', (e) => e.preventDefault());
        this.el.addEventListener('dragstart', (e) => e.preventDefault());
    }

    private pointerMoveHandler = (e: PointerEvent) => this.onPointerMove(e);
    private pointerUpHandler = (e: PointerEvent) => this.onPointerUp(e);

    private onPointerDown(e: PointerEvent) {
        e.preventDefault();
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        this.initialX = this.x;
        this.initialY = this.y;

        document.body.classList.add('stars-no-select');
        this.el.classList.add('dragging');

        window.addEventListener('pointermove', this.pointerMoveHandler);
        window.addEventListener('pointerup', this.pointerUpHandler);
        window.addEventListener('pointercancel', this.pointerUpHandler);
    }

    private onPointerMove(e: PointerEvent) {
        if (!this.isDragging) return;

        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;

        this.x = this.initialX + dx;
        this.y = this.initialY + dy;

        // Zero out velocity when dragged to prevent flying off when released
        this.vx = 0;
        this.vy = 0;

        for (const bh of this.manager.blackHoles) {
            if (bh.isFilled) continue;
            const dist = Math.hypot(this.x - bh.x, this.y - bh.y);
            if (dist < 40) {
                if (this.level !== bh.level) {
                    // Repel dynamically during drag if wrong level
                    this.x += (this.x - bh.x) * 0.05;
                    this.y += (this.y - bh.y) * 0.05;
                }
                // We do NOT absorb on touch during drag anymore. Let the user drop it in onPointerUp.
            }
        }

        this.updateTransform();
    }

    private onPointerUp(e: PointerEvent) {
        this.isDragging = false;
        document.body.classList.remove('stars-no-select');
        this.el.classList.remove('dragging');

        window.removeEventListener('pointermove', this.pointerMoveHandler);
        window.removeEventListener('pointerup', this.pointerUpHandler);
        window.removeEventListener('pointercancel', this.pointerUpHandler);

        // Check if dropped into black hole correctly
        for (const bh of this.manager.blackHoles) {
            if (bh.isFilled) continue;
            const dist = Math.hypot(this.x - bh.x, this.y - bh.y);
            if (dist < 50 && this.level === bh.level) {
                this.isEmbedded = true;

                this.x = bh.x;
                this.y = bh.y;

                if (this.level === 1) { this.x -= 9; this.y -= 9; }
                if (this.level === 2) { this.x -= 12; this.y -= 12; }
                if (this.level === 3) { this.x -= 16; this.y -= 16; }

                this.updateTransform();
                this.el.style.transform += ' scale(0.6)';
                this.el.style.transition = 'transform 0.4s ease-in';
                this.el.style.pointerEvents = 'none';
                bh.absorb();
                return;
            }
        }

        this.manager.checkMerge();
    }

    public update() {
        if (this.isDragging || this.isEmbedded) return;

        // Apply slight gravity/float if moving slowly
        this.vy += (Math.random() - 0.49) * 0.002;
        this.vx += (Math.random() - 0.5) * 0.002;

        // Dynamic friction and speed clamping
        const currentSpeed = Math.hypot(this.vx, this.vy);
        if (currentSpeed > 0.15) {
            // Apply brutal air friction rapidly to high-velocity stars
            this.vx *= 0.75;
            this.vy *= 0.75;
        } else {
            // Normal float max speed (extremely slow, basically static float)
            this.vx = Math.max(-0.1, Math.min(0.1, this.vx));
            this.vy = Math.max(-0.1, Math.min(0.1, this.vy));
        }

        let nextX = this.x + this.vx;
        let nextY = this.y + this.vy;

        // Strict Screen bounds bounce (accounting for full document bounds)
        const maxX = document.documentElement.scrollWidth - 40;
        const maxY = document.documentElement.scrollHeight - 40;

        if (nextX <= 20) {
            this.vx = Math.abs(this.vx) * 0.8 + 0.1;
            nextX = 20;
        } else if (nextX >= maxX) {
            this.vx = -Math.abs(this.vx) * 0.8 - 0.1;
            nextX = maxX;
        }

        if (nextY <= 20) {
            this.vy = Math.abs(this.vy) * 0.8 + 0.1;
            nextY = 20;
        } else if (nextY >= maxY) {
            this.vy = -Math.abs(this.vy) * 0.8 - 0.1;
            nextY = maxY;
        }

        // Solid collision checks
        const size = 10; // rough hit box
        for (const rect of this.manager.solidRects) {
            if (
                nextX + size > rect.left &&
                nextX - size < rect.right &&
                nextY + size > rect.top &&
                nextY - size < rect.bottom
            ) {
                // Simple AABB collision response
                // determine side of collision
                const overlapL = (nextX + size) - rect.left;
                const overlapR = rect.right - (nextX - size);
                const overlapT = (nextY + size) - rect.top;
                const overlapB = rect.bottom - (nextY - size);

                const minOverlap = Math.min(overlapL, overlapR, overlapT, overlapB);

                if (minOverlap === overlapL || minOverlap === overlapR) {
                    this.vx *= -0.6; // bounce and damp
                } else {
                    this.vy *= -0.6;
                }

                // Push out slightly
                nextX = this.x;
                nextY = this.y;
            }
        }

        this.x = nextX;
        this.y = nextY;
        this.updateTransform();
    }

    private updateTransform() {
        this.el.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
    }

    public destroy() {
        this.el.remove();
        this.isDead = true;
    }
}

export class StarFXManager {
    private config: StarFXConfig;
    private baseEnabled: boolean = true;
    private userEnabled: boolean = true;
    private clickZone: ClickZone | null = null;
    private smallStars: SmallStar[] = [];
    public blackHoles: BlackHole[] = [];
    private blackHolesUnlocked: number = 0;

    public solidRects: DOMRect[] = [];
    private lastRectUpdate: number = 0;
    private rafId: number = 0;

    constructor(config: StarFXConfig) {
        this.config = config;

        const savedState = localStorage.getItem('starsfx-enabled');
        if (savedState !== null) {
            this.userEnabled = savedState === 'true';
        }

        this.bindToggle();
        this.updateToggleUI();

        if (this.userEnabled) {
            this.initSystems();
        }
    }

    private bindToggle() {
        this.config.toggleBtn.addEventListener('click', () => {
            this.userEnabled = !this.userEnabled;
            localStorage.setItem('starsfx-enabled', this.userEnabled.toString());
            this.updateToggleUI();

            if (this.userEnabled) {
                this.initSystems();
            } else {
                this.destroySystems();
            }
        });

        this.config.toggleBtn.addEventListener('mousedown', (e) => e.preventDefault());
        this.config.toggleBtn.addEventListener('dblclick', (e) => e.preventDefault());
        this.config.toggleBtn.addEventListener('selectstart', (e) => e.preventDefault());

        window.addEventListener('unlock-black-hole', this.onUnlockBlackHole.bind(this));
    }

    private onUnlockBlackHole = (e: any) => {
        if (!this.userEnabled || this.blackHolesUnlocked >= 3) return;

        const targetLevel = e.detail?.level || 1;
        this.blackHolesUnlocked++;

        const targetId = e.detail?.targetId;
        if (targetId) {
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const bh = new BlackHole(this, this.config.starsLayer, targetEl, targetLevel);
                this.blackHoles.push(bh);
                this.clickZone?.showUnlockHint(targetLevel);
            }
        }
    }

    private updateToggleUI() {
        this.config.toggleBtn.textContent = 'Stars FX: ' + (this.userEnabled ? 'ON' : 'OFF');
        if (!this.userEnabled) {
            this.config.toggleBtn.style.opacity = '0.5';
        } else {
            this.config.toggleBtn.style.opacity = '1';
        }
    }

    private initSystems() {
        this.clickZone = new ClickZone(this, this.config.starsLayer);

        this.loop();
    }

    private destroySystems() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
        if (this.clickZone) {
            this.clickZone.destroy();
            this.clickZone = null;
        }
        this.smallStars.forEach(s => s.destroy());
        this.smallStars = [];
        this.blackHoles.forEach(bh => bh.destroy());
        this.blackHoles = [];
        this.blackHolesUnlocked = 0;
    }

    private loop = () => {
        if (!this.userEnabled) return;

        this.updateSolidRects();

        // Small stars loop
        for (let i = this.smallStars.length - 1; i >= 0; i--) {
            const s = this.smallStars[i];
            s.update();
            if (s.isDead) {
                this.smallStars.splice(i, 1);
            }
        }

        // Update Black Holes position dynamically
        this.blackHoles.forEach(bh => bh.updatePosition());

        this.rafId = requestAnimationFrame(this.loop);
    }

    private updateSolidRects() {
        const now = Date.now();
        if (now - this.lastRectUpdate < 500) return; // throttle DOM reads to 2fps
        this.lastRectUpdate = now;

        const solids = Array.from(document.querySelectorAll('.project-card, .card, .panel, .button, button, .framed, .outline-box, img, iframe'));
        this.solidRects = solids.map(el => el.getBoundingClientRect());
    }

    public spawnSmallStars(x: number, y: number, count: number, level: number, speedMult: number = 1.0) {
        for (let i = 0; i < count; i++) {
            if (this.smallStars.length >= 20) {
                this.smallStars.sort((a, b) => a.level - b.level);
                this.smallStars[0].destroy();
                this.smallStars.shift();
            }

            // Constrain spawning heavily to the bottom 25% height of the page, even if triggered high up
            const documentHeight = document.documentElement.scrollHeight;
            const minY = documentHeight * 0.75;
            const spawnY = Math.max(y, minY);

            this.smallStars.push(new SmallStar(this, this.config.starsLayer, x, spawnY, level, speedMult));
        }
    }

    public checkMerge() {
        const distThreshold = 40;

        for (let lvl = 1; lvl < 3; lvl++) {
            const candidates = this.smallStars.filter(s => s.level === lvl && !s.isDead);

            if (candidates.length >= 3) {
                for (let i = 0; i < candidates.length - 2; i++) {
                    for (let j = i + 1; j < candidates.length - 1; j++) {
                        for (let k = j + 1; k < candidates.length; k++) {
                            const s1 = candidates[i];
                            const s2 = candidates[j];
                            const s3 = candidates[k];

                            if (s1.isDead || s2.isDead || s3.isDead) continue;

                            const d12 = Math.hypot(s1.x - s2.x, s1.y - s2.y);
                            const d23 = Math.hypot(s2.x - s3.x, s2.y - s3.y);
                            const d13 = Math.hypot(s1.x - s3.x, s1.y - s3.y);

                            if (d12 < distThreshold && d23 < distThreshold && d13 < distThreshold) {
                                const cx = (s1.x + s2.x + s3.x) / 3;
                                const cy = (s1.y + s2.y + s3.y) / 3;

                                s1.destroy();
                                s2.destroy();
                                s3.destroy();

                                // Spawn new higher level merged star with 0 velocity so it doesn't fly out
                                this.spawnSmallStars(cx, cy, 1, lvl + 1, 0);

                                const flash = document.createElement('div');
                                flash.className = 'ourstars-merge-flash';
                                flash.style.left = cx + 'px';
                                flash.style.top = cy + 'px';
                                this.config.starsLayer.appendChild(flash);
                                setTimeout(() => flash.remove(), 600);

                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    public checkCompletion() {
        if (this.blackHoles.length >= 3 && this.blackHoles.every(bh => bh.isFilled)) {
            const overlay = document.createElement('div');
            overlay.className = 'stars-completion-overlay';
            document.body.appendChild(overlay);

            const msg = document.createElement('div');
            msg.className = 'stars-completion-message';
            msg.innerHTML = '<div class="jp">ご覧いただき、ありがとうございました！</div><div class="en">Thank you for viewing my portfolio！</div>';
            document.body.appendChild(msg);

            // Gentle Fade-in sequence
            setTimeout(() => {
                overlay.style.opacity = '1';
                msg.style.opacity = '1';
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    msg.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        msg.remove();
                    }, 2000);
                }, 4000); // 4 seconds of reading time
            }, 100);
        }
    }

    public destroy() {
        this.destroySystems();
    }
}
