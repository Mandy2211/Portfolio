import { useState, useEffect } from "react";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";

const RandomPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        // Create an array of random pets
        const numPets = 8; // Number of scattered pets
        const newPets = Array.from({ length: numPets }).map((_, i) => {
            const isKitty = Math.random() > 0.5;
            
            // Randomly place them across the container height.
            const top = 5 + Math.random() * 85; // Between 5% and 90%
            
            // Place them in blank spaces (sides) usually.
            const left = Math.random() > 0.5 
                ? 2 + Math.random() * 15 // Left edge: 2% - 17%
                : 75 + Math.random() * 20; // Right edge: 75% - 95%
            
            return {
                id: i,
                isKitty,
                top: `${top}%`,
                left: `${left}%`,
                toggled: false
            };
        });

        setPets(newPets);
    }, []);

    const handleToggle = (id) => {
        setPets(prevPets =>
            prevPets.map(pet => 
                pet.id === id ? { ...pet, toggled: !pet.toggled } : pet
            )
        );
    };

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            {pets.map(pet => (
                <img
                    key={pet.id}
                    src={pet.isKitty ? (pet.toggled ? k2 : k1) : (pet.toggled ? cat2 : cat1)}
                    alt="Random Pet"
                    onClick={() => handleToggle(pet.id)}
                    style={{
                        position: 'absolute',
                        top: pet.top,
                        left: pet.left,
                        width: pet.isKitty ? '140px' : '90px', // Zoomed in size for k1 and k2
                        cursor: 'pointer',
                        pointerEvents: 'auto', // Make the images clickable
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }}
                />
            ))}
        </div>
    );
};

export default RandomPets;
