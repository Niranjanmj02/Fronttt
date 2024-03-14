import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFoodDetails } from '../../utils/api';

const FoodDetails = () => {
    const [food, setFood] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { foodId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            try {
                const response = await fetchFoodDetails(foodId);
                setFood(response.data);
            } catch (err) {
                setError(err); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [foodId]);

    if (isLoading) return <div>Loading food details...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div> 
            {/* Display food.name, food.description, food.price, etc. */}
        </div>
    );
};

export default FoodDetails;
