import styled, { keyframes } from "styled-components";
import { WiCloudy, WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi"; 
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const cascada = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f7f7f5;
    border-radius: 10px;
    max-width: 400px;
    max-height: 800px;
    margin-top: 120px;
    margin-left: 600px;
    text-align: center;
    animation: ${cascada} 1s ease-in-out;
`;

const Title = styled.h1`
    font-size: 30px;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: ${cascada} 1.2s ease-in-out;
`;

const Input = styled(TextField)`
       animation: ${cascada} 1.4s ease-in-out;
`;

const Button1 = styled(Button)`
`;

const Error = styled.span`
    color: red;
    animation: ${cascada} 1.8s ease-in-out;
`;

const RespuestasInput = styled.p`
    font-size: 15px;
    color: black;
    align-items: center;
    display: flex;
    animation: ${cascada} 2s ease-in-out;
`;

const pulse = keyframes`
    0% {
        background-color:#f7f7f7;
    }
    50% {
        background-color: #f8f8f8;
    }
    100% {
        background-color: #f7f7f5;
    }
`;

const Skeleton = styled.div`
    background-color: #f7f7f5;
    border-radius: 5px;
    animation: ${pulse} 1.5s infinite ease-in-out;
`;

const Imagentermometro = styled(WiThermometer)`
    font-size: 50px;
    color: #30a6ef;
    animation: ${cascada} 2.2s ease-in-out;
`;

const ImagenClima = styled(WiCloudy)`
    font-size: 50px;
    color: #30a6ef;
    animation: ${cascada} 2.4s ease-in-out;
`;

const Imagenhumedad = styled(WiHumidity)`
    font-size: 50px;
    color: #30a6ef;
    animation: ${cascada} 2.6s ease-in-out;
`;

const ImagenVelocidadviento = styled(WiStrongWind)`
    font-size: 50px;
    color: #30a6ef;
    animation: ${cascada} 2.8s ease-in-out;
`;

export { 
    Container, 
    Title, 
    Input, 
    Button1, 
    Error, 
    RespuestasInput, 
    ImagenClima, 
    ImagenVelocidadviento, 
    Imagenhumedad, 
    Imagentermometro,
    pulse,
    Skeleton
};
