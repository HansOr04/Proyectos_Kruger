import { useState } from "react";
import axios from "axios";
import { Container, Title, Input, Button1, Error, RespuestasInput, ImagenClima, ImagenVelocidadviento, Imagenhumedad, Imagentermometro, Skeleton } from "./styles";


function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const apiKey = "6bb79a81b000e960cbe289c673e633cd";

  const getWeather = async () => {
    if (!city) {
      setError("Por favor ingresa el nombre de la ciudad");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container>
      <Title>Weather APP</Title>
      <Input
        id="filled-basic" label="Pulsa Aqui " variant="filled"
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingrese el nombre de la ciudad"
      />
      <br />
      <Button1 variant="contained" onClick={getWeather}>Obtener el clima</Button1>
      {loading && <p>Loading...</p>}
      {error && <Error>{error}</Error>}
      {weather && (
        <Skeleton>
          <h3>Clima en {weather.name}</h3>
          <RespuestasInput>
            <Imagentermometro />
            Temperatura: {weather.main.temp} °C
          </RespuestasInput>
          <RespuestasInput>
            <ImagenClima />
            Clima: {weather.weather[0].description}
          </RespuestasInput>
          <RespuestasInput>
            <Imagenhumedad />
            Humedad: {weather.main.humidity}%
          </RespuestasInput>
          <RespuestasInput>
            <ImagenVelocidadviento />
            Velocidad del viento: {weather.wind.speed} m/s
          </RespuestasInput>
        </Skeleton>
      )}
    </Container>
  );
}

export default Weather;
