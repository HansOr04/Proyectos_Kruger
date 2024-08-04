import { createContext, useState } from "react";

//Crear el contexto
const CartContext = createContext();

function CartProvider({ children }) {
  //Vamos a manejar los productos
  const [products] = useState([
    { id: 1, name: "Play Station 5", price: 100, image: "https://i5.walmartimages.com/seo/Sony-PlayStation-5-Video-Game-Console-Ps5-Disc-Console-Japanese-Edition-New_1536c1c9-0c26-4ce6-a5e1-1825ca064d05.1434e86832a815bb366d12b0a854390d.jpeg" },
    { id: 2, name: "Portatil", price: 200, image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202402/19/00115215597202____5__640x640.jpg" },
    { id: 3, name: "Pantalla", price: 300, image: "https://www.lg.com/content/dam/channel/wcms/cl/images/monitores/24tq520s-ps_awh_escl_cl_c/U03_BASIC-450.jpg" },
    { id: 4, name: "Auriculares", price: 400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZWVCyu8b2M7N9CBx1Nse8A50I6mBk8crVg&s"},
    { id: 5, name: "Teclado", price: 500, image:"https://www.tecnosmart.com.ec/wp-content/uploads/2022/06/TECLADO-LOGITECH-MECANICO-G413-SE-TKL-RETROILUMINADO-G-TACTILE-BLACK-920-010442_TECLADOS_9302_1.jpeg"},
  ]);
  //Vamos a manejar el carrito
  const [cartItems, setCartItems] = useState([]);

  //Validacion
  //Vamos a manejar el total

  const addToCart = (product, quantity) => {
    //Vamos a verificar si el producto ya esta en el carrito
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      //Si ya esta en el carrito, vamos a aumentar la cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  }
  const removeFromCart = (product) => {
    //Vamos a verificar si el producto esta en el carrito
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      //Si esta en el carrito, vamos a eliminarlo
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  }
  const clearCart = () => {
    setCartItems([]);
  }


  //Vamos a definir los valores que vamos a compartir
  const valuesToShare = {
    products,
    addToCart,
    cartItems,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={valuesToShare}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;