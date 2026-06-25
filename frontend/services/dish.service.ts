import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const getDishes = async () => {
    const response = await axios.get(`${API_URL}/dishes`);
    return response.data;
};

export const toggleDishStatus = async (dishId: string) => {
    const response = await axios.patch(`${API_URL}/dishes/${dishId}`);
    return response.data;
};
