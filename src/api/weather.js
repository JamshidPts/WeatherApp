import axios from 'axios';

export const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const response = await axios.get(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}
