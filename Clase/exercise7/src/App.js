import { useRef, useState } from "react";


function App() {
  /*
  const emailRef=useRef();
  const handleSubmit = () => {
    alert(emailRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      Email:<input type="email" ref={emailRef}/>
      <button type="submit"> Submit</button>

    </form>
  );*/
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [aditionaldescription, setAditionalDes] = useState("");
  const [check, setCheck]=useState("");
  const handleSubmit = () => {
    alert("Tu email es",{email}, "Tu nombre es", {name}, "Tu descripcion adicional", {aditionaldescription});
  }
  return (
    <form onSubmit={handleSubmit}>
      Name: <input type="name" value={name} onChange={(event) => setName(event.target.value)}/>
      Email:<input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      Description adicional:<input type="aditionaldesc" value={aditionaldescription} onChange={(event) => setAditionalDes(event.target.value)}/>
      Estoy de acuerdo con los terminos y condiciones<input type="checkbox" value={check} onChange={(event) => setCheck(event.target.value)}></input>
      <button type="submit"> Submit</button>

    </form>
  );
}

export default App;
