import styled from "styled-components";

function App() {
  //Quiero definir una h3 con estilos, usando styled components
  const Title = styled.h3`
    color: red;
    font-size: 40px;
    border: 5px solid ${(props) => props.borderColor};
  `;
  const Title2 = styled(Title)({
    textDecoration: "underline",
    
  });
  const Title3 = styled(Title)({
    color: "blue",
    
  });

  const Text = styled.p((props) => ({
    color: "blue",
    background: "yellow",
    fontWeight: "bold",
    fontSize: props.size,
  }));
  const Button = styled.button(({dark}) =>({
    background: dark ? "black"  : "white",
    color: dark ?  "white" : "black",
  }));
  const Card = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 100px;
  font-size: 40px;
  &:hover{
    border: 6px solid #6C27B7;
    text-align: center;
    padding-top: 20px;
    font-size: 60px;
    background: #B98BEA;
    color: white;
    text-transform: uppercase;
  }
  `

  return (
    <>
      <Title borderColor="green">
        Esto es un title usando styled components
      </Title>
      <Title borderColor="blue">
        Esto es un title usando styled components
      </Title>
      <Text size="40px">Esto es un texto usando styled components</Text>
      <Text size="20px">Esto es un texto usando styled components</Text>
      <Button dark={false}>Boton dark</Button>
      <Button dark>Boton dark</Button>
      <Title2>Titulo 2 con propeidades heredadas</Title2>
      <Title3>Titulo 3 con propeidades heredadas y color</Title3>
      <Card>Por DIossssssss</Card>
    </>
  );
}

export default App;