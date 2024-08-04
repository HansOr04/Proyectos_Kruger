import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    email: Yup.string().email("Email inválido").required("El email es requerido"),
    chips: Yup.string().required("Debes elegir una opción para los chips"),
    terms: Yup.boolean().oneOf([true], "Los términos deben ser aceptados").required("Los términos deben ser aceptados"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      chips: "",
      specialRequest: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`
        Name: ${values.name}
        Email: ${values.email}
        Chips: ${values.chips}
        Special Request: ${values.specialRequest}
        `);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Order Hamburger</h1>
        
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        
        <br />
        
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
        
        <br />
        
        <select
          name="chips"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.chips}
        >
          <option value="">Quieres ordenar Chips?</option>
          <option value="Yes">ZI</option>
          <option value="No">No</option>
        </select>
        {formik.touched.chips && formik.errors.chips ? (
          <div style={{ color: 'red' }}>{formik.errors.chips}</div>
        ) : null}
        
        <br />
        
        <label htmlFor="specialRequest">Special Request:</label>
        <br />
        <textarea
          id="specialRequest"
          name="specialRequest"
          onChange={formik.handleChange}
          value={formik.values.specialRequest}
        ></textarea>
        
        <br />
        
        <label htmlFor="terms">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.terms}
          />
          Terms and Conditions
        </label>
        {formik.touched.terms && formik.errors.terms ? (
          <div style={{ color: 'red' }}>{formik.errors.terms}</div>
        ) : null}
        
        <br />
        
        <button type="submit">Pide tu Hamburger</button>
      </form>
    </>
  );
}

export default App;