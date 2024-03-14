import React, { useState } from 'react';

const RestaurantForm = ({ addRestaurant }) => {
    const [restaurantName, setRestaurantName] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!restaurantName.trim()) return; // Prevent empty submissions

        addRestaurant({ restaurantName: restaurantName, items: [] }); 
        setRestaurantName(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="restaurantName">Restaurant Name:</label>
            <input type="text" id="restaurantName" value={restaurantName} 
                   onChange={(e) => setRestaurantName(e.target.value)} 
            />
            <button type="submit">Empire</button>
        </form>
    );
};

export default RestaurantForm;
