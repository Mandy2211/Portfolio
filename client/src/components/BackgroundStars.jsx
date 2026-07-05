import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import starsImg from '../assets/stars.png';

const BackgroundStars = () => {
    const starPositions = useMemo(() => {
        const numStars = 20;
        return Array.from({ length: numStars }).map((_, i) => {
            // Uniformly distribute vertically, but leave the very top and bottom empty
            const top = (i + 1) * (100 / (numStars + 1));

            // Alternate left and right side with some random wiggle room
            const isLeft = i % 2 === 0;
            const left = isLeft
                ? 1 + Math.random() * 10 // 1% to 11% from the left
                : 81 + Math.random() * 10; // 81% to 91% from the left

            return {
                id: i,
                top: `${top}%`,
                left: `${left}%`,
                rotation: Math.random() * 60 - 30, // -30 to 30 degrees
                scale: 0.5 + Math.random() * 0.7, // 0.5 to 1.2
                duration: 4 + Math.random() * 4, // Animation duration 4-8s
                delay: Math.random() * 2, // Random start delay
                yOffset: 15 + Math.random() * 25 // Vertical float amount
            };
        });
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
            {starPositions.map(pos => (
                <motion.img
                    key={pos.id}
                    src={starsImg}
                    alt="stars background"
                    style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        width: '120px',
                        opacity: 0.7
                    }}
                    initial={{ rotate: pos.rotation, scale: pos.scale, y: 0 }}
                    animate={{
                        y: [0, -pos.yOffset, 0],
                        rotate: [pos.rotation, pos.rotation + 10, pos.rotation]
                    }}
                    transition={{
                        duration: pos.duration,
                        delay: pos.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundStars;
