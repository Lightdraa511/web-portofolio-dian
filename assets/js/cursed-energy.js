/* ==========================================================================
   JUJUTSU KAISEN BLACK FLASH (KOKUSEN) LIGHTNING BURST FX
   - Clean movement (no trails / no flames when moving)
   - Sharp red & white-hot geometric lightning branches burst exclusively on click / tap
   ========================================================================== */

(function () {
  const canvas = document.getElementById('cursedEnergyCanvas') || document.createElement('canvas');
  if (!canvas.id) {
    canvas.id = 'cursedEnergyCanvas';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9998';
    canvas.style.mixBlendMode = 'screen';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const blackFlashes = [];

  // BLACK FLASH (KOKUSEN LIGHTNING FRACTURE)
  class BlackFlashLightning {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.branches = [];
      this.maxLife = 14;
      this.life = this.maxLife;

      // 5-8 dramatic lightning branches
      const numBranches = Math.floor(Math.random() * 4) + 5;
      for (let b = 0; b < numBranches; b++) {
        const branch = [];
        let cx = x;
        let cy = y;
        let angle = (b / numBranches) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const length = Math.random() * 80 + 45;
        const segments = Math.floor(length / 8);

        branch.push({ x: cx, y: cy });
        for (let s = 0; s < segments; s++) {
          angle += (Math.random() - 0.5) * 1.5;
          cx += Math.cos(angle) * (Math.random() * 12 + 6);
          cy += Math.sin(angle) * (Math.random() * 12 + 6);
          branch.push({ x: cx, y: cy });
        }
        this.branches.push(branch);
      }
    }

    update() {
      this.life--;
    }

    draw(ctx) {
      const alpha = this.life / this.maxLife;
      ctx.save();
      
      // Dramatic Cursed Red Aura Glow
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(225, 29, 72, 1)';
      
      this.branches.forEach((branch) => {
        // Outer Crimson Lightning Stroke
        ctx.strokeStyle = `rgba(255, 30, 70, ${alpha * 0.95})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        branch.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Inner White-Hot Lightning Core
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        branch.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
      });

      ctx.restore();
    }
  }

  function triggerBlackFlash(x, y) {
    blackFlashes.push(new BlackFlashLightning(x, y));
  }

  // ONLY Trigger on Click and Touch Tap (No movement listeners)
  window.addEventListener('click', (e) => {
    triggerBlackFlash(e.clientX, e.clientY);
  });

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      triggerBlackFlash(t.clientX, t.clientY);
    }
  }, { passive: true });

  // Render Loop (Sleeps when no active flashes to save 100% CPU/GPU)
  let isRunning = false;
  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = blackFlashes.length - 1; i >= 0; i--) {
      const bf = blackFlashes[i];
      bf.update();
      bf.draw(ctx);
      if (bf.life <= 0) {
        blackFlashes.splice(i, 1);
      }
    }

    if (blackFlashes.length > 0) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
      isRunning = false;
    }
  }

  function startRender() {
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  }

  // Hook trigger into startRender
  const origTrigger = triggerBlackFlash;
  window.triggerBlackFlashEffect = function(x, y) {
    origTrigger(x, y);
    startRender();
  };

  window.addEventListener('click', (e) => {
    window.triggerBlackFlashEffect(e.clientX, e.clientY);
  });

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      window.triggerBlackFlashEffect(t.clientX, t.clientY);
    }
  }, { passive: true });
})();
