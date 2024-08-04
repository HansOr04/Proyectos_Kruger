import styled from "styled-components";

export const ProductContainer = styled.div(
    {
        display: "auto",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        fontSize: "50px",
    }
);
export const ProductName = styled.div({
    fontSize: "50px",
    fontWeight: "bold",
});
export const ProductPrice = styled.div({
    color: "red",
    fontSize: "50px",
    border: "3px solid black",
    width: "200px",
    textAlign:"center",
    "&:hover":{
        border: "3px solid #17FF2C",
        background: "#71CB7A",
        color:"white",
    },
});