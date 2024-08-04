import { Card, CardMedia, CardContent, Typography, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import CartContext from "../context/cart";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <Card
      sx={{
        maxWidth: '300px', // Establece un ancho máximo de 200px
        maxHeight: '500px',
        display: 'inline-grid',
        padding: '40px',
        margin:'20px',
      }} >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          maxWidth: '200px', // Establece un ancho máximo de 200px
          maxHeight: '200px',
          margin: 'auto', // Establece un alto máximo de 200px
        }}
      />
      <CardContent>
        <Typography variant="h5" sx={{ padding: '2px', margin: 'auto', }}>
          Producto: {product.name}
        </Typography>
        <Typography variant="body2" sx={{ padding: '2px' }}>
          Price: ${product.price}
        </Typography>
        <TextField
          label="Cantidad"
          type="number"
          inputProps={{ min: 1 }}
          size="small"
          variant="outlined"
          value={quantity}
          onChange={handleQuantityChange}
          sx={{ padding: '3px', marginTop: '10px', }} />
        <br />
        <Button variant="contained" color="primary" onClick={() => addToCart(product, quantity)}>Agregar al carrito</Button>
      </CardContent>
    </Card>
  );
}

export default ProductItem;