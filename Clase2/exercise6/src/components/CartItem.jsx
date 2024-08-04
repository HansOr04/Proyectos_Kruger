import { Card, CardMedia, ListItem, ListItemText, Typography } from "@mui/material";

function CartItem({ item }) {
    return (
        <ListItem>
            <Card
                sx={{
                    maxWidth: '300px', // Establece un ancho máximo de 200px
                    maxHeight: '500px',
                    display: '-webkit-box',
                    padding: '40px',
                    margin: '20px',
                }} >
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                        maxWidth: '100px', // Establece un ancho máximo de 200px
                        maxHeight: '100px',
                        margin: 'auto', // Establece un alto máximo de 200px
                    }}
                />
                <ListItemText primary={item.name}
                    secondary={
                        <>
                            <Typography variant="body2" color="text.primary">
                                {`Cantidad: ${item.quantity}`}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {`Precio:${item.price}`}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {`Subtotal: ${item.price * item.quantity}`}
                            </Typography>
                        </>
                    }

                />

            </Card>
        </ListItem>
    );
}
export default CartItem