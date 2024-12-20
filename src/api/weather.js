import axios from 'axios';

export const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=605a09ba7f4e7696d2ef9d48adcf127d`;
        const response = await axios.get(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}
