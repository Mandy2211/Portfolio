import { useEffect } from "react";

/**
 * SparkleTrail – creates tiny glowing particles that follow the cursor.
 * Completely self-contained; adds/removes elements from document.body.
 */
function SparkleTrail() {
    useEffect(() => {
        let lastX = 0;
        let lastY = 0;
        let frameId = null;

        const colors = [
            "#ff79c6", "#bd93f9", "#ffb86c", "#f1fa8c",
            "#ff92d0", "#caa9fa", "#ff6ac1", "#8be9fd"
        ];

        function createSparkle(x, y) {
            const sparkle = document.createElement("div");
            const size = Math.random() * 8 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30 + 10;

            Object.assign(sparkle.style, {
                position: "fixed",
                left: `${x}px`,
                top: `${y}px`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: "99999",
                boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 3}px ${color}40`,
                transform: "translate(-50%, -50%) scale(1)",
                transition: "none",
                opacity: "0.9",
            });

            document.body.appendChild(sparkle);

            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            // Animate using Web Animations API
            const anim = sparkle.animate(
                [
                    { transform: "translate(-50%, -50%) scale(1)", opacity: 0.9 },
                    { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`, opacity: 0 },
                ],
                { duration: 600 + Math.random() * 400, easing: "ease-out", fill: "forwards" }
            );

            anim.onfinish = () => sparkle.remove();
        }

        let throttleCounter = 0;

        function onMouseMove(e) {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only spawn sparkles when cursor moves enough
            if (dist < 8) return;

            lastX = e.clientX;
            lastY = e.clientY;

            throttleCounter++;
            if (throttleCounter % 2 !== 0) return; // spawn every other eligible move

            const count = Math.floor(dist / 10) + 1;
            for (let i = 0; i < Math.min(count, 3); i++) {
                createSparkle(e.clientX, e.clientY);
            }
        }

        window.addEventListener("mousemove", onMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    return null; // Renders nothing to the DOM directly
}

export default SparkleTrail;
