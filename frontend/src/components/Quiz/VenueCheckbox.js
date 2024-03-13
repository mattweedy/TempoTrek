import React, { useState } from 'react';

export default function VenueCheckbox({ venue, handleFormChange }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        handleFormChange(venue.name, !isSelected);
    };

    return (
        <button 
            key={venue.id} 
            className={`venueCheckbox ${isSelected ? 'selected' : ''}`} 
            onClick={handleClick}
        >
            {venue.name}
        </button>
    );
}