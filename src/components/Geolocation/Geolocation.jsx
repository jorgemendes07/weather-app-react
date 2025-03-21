import { useEffect } from 'react';

const Geolocation = ({ setCidade }) => {
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                try {
                    const apiKey = "b7ec81296f99023b959f86b8b158cf79";
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt`;

                    const response = await fetch(url);
                    const data = await response.json();

                    const cidade = data.name;
                    setCidade(cidade);

                } catch (error) {
                    console.error("Erro ao buscar dados da cidade:", error);
                    alert('Erro ao buscar dados da cidade.');
                }
            });
        } else {
            alert("Geolocalização não suportada pelo navegador.");
        }
    }, [setCidade]);

    return null;
};

export default Geolocation;