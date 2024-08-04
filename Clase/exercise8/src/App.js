import {useState} from "react"

function App() {
   const [values, setValues] = useState({
    name:"",
    email:"",
    chips: "",
    specialRequest:"",
    terms: false,
   });
   const handleChange = (event) => {
    const {name,value}= event.target;
    setValues({
      ...values,[name]: value
    });
  }
   const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
      Name: ${values.name}
      Email: ${values.email}
      Chips: ${values.chips}
      Special Request: ${values.specialRequest}
      `);
    
      
    
  }
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>
        Order Hamburger
      </h1>
      <label htmlFor="name">Name:</label>
      <input id="name" name ="name" type="text" value={values.name} onChange={handleChange}/>
      <br></br>
      <label htmlFor="email">Email:</label>
      <input id="email" name ="email" type="email" value={values.email} onChange={handleChange}/>
         <br></br>
      <select name="chips" value={values.chips} onChange={handleChange}>
        <option label="Quieres ordenar Chips?" />
        <option value="Yes" label="ZI"/>
        <option value="No" label="No"/>
      </select>
      <br></br>
      <label htmlFor="specialRequest">Special Request:</label>
      <br></br>
      <textarea id="specialRequest" name ="specialRequest" value={values.specialRequest} onChange={handleChange}></textarea>
      <br></br>
      <label htmlFor="terms">Terms and Conditions:</label>
      <input id="terms" name ="terms" type="checkbox" value={values.terms} onChange={handleChange}/>
      <br></br>
      <button type="submit">Pide tu Hamburger</button>

      

    </form>
    </>
  )
}

export default App;
