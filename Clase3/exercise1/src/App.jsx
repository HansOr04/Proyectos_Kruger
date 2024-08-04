import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "./services/firebase";
import { Button, Button2, Container, Input, Title, UserItem, UserList } from "./components/styles";
import CardMedia from '@mui/material/CardMedia';

// Función principal de la aplicación
function App() {
  // Estados para almacenar los usuarios, el estado de carga, el nuevo usuario, el usuario a actualizar y la búsqueda
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: "", age: "", hasDog: false });
  const [updateData, setUpdateData] = useState({ id: "", name: "", age: "", hasDog: false });
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Función para cargar los usuarios desde Firebase
  const loadUsers = async () => {
    try {
      // Llamada a la función getUsers de Firebase para obtener los usuarios
      const data = await getUsers();
      // Actualiza el estado de los usuarios
      setUsers(data);
      // Actualiza el estado de carga a false
      setLoading(false);
    } catch (error) {
      // Maneja el error si ocurre
      console.error('Error loading users:', error);
    }
  };

  // Función para crear un nuevo usuario
  const handleCreateUser = async () => {
    try {
      // Llamada a la función createUser de Firebase para crear un nuevo usuario
      const data = await createUser(newUser);
      // Agrega el nuevo usuario al estado de usuarios
      setUsers([...users, { id: data.id, ...newUser }]);
      // Resetea el estado del nuevo usuario
      setNewUser({ name: "", age: "", hasDog: false });
    } catch (error) {
      // Maneja el error si ocurre
      console.error('Error creating user:', error);
    }
  };

  // Función para actualizar un usuario
  const handleUpdateUser = async (id) => {
    try {
      // Llamada a la función updateUser de Firebase para actualizar el usuario
      await updateUser(id, updateData);
      // Actualiza el estado de los usuarios con el usuario actualizado
      setUsers(users.map(user => user.id === id ? { id, ...updateData } : user));
      // Resetea el estado del usuario a actualizar
      setUpdateData({ id: "", name: "", age: "", hasDog: false });
    } catch (error) {
      // Maneja el error si ocurre
      console.error('Error updating user:', error);
    }
  };

  // Función para eliminar un usuario
  const handleDeleteUser = async (id) => {
    try {
      // Llamada a la función deleteUser de Firebase para eliminar el usuario
      await deleteUser(id);
      // Actualiza el estado de los usuarios sin el usuario eliminado
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      // Maneja el error si ocurre
      console.error('Error deleting user:', error);
    }
  };

  const handleIncrementAge = async (id) => {
    const userToUpdate = users.find((user) => user.id === id);
    if (userToUpdate) {
      const updatedUser = { ...userToUpdate, age: parseInt(userToUpdate.age) + 1 };
      try {
        await updateUser(id, updatedUser);
        setUsers(users.map((user) => user.id === id ? updatedUser : user));
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  // Efecto para cargar los usuarios al montar el componente
  useEffect(() => {
    loadUsers();
  }, []);

  // Efecto para filtrar los usuarios según la búsqueda
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);
  return (
    <>
      <Container>
        <Title>Create New User</Title>
        <Input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <label>
          Has Dog:
          <Input
            type="checkbox"
            checked={newUser.hasDog}
            onChange={(e) => setNewUser({ ...newUser, hasDog: e.target.checked })}
          />
        </label>
        <Button onClick={handleCreateUser}>Create new user</Button>
      </Container>
      <Title>Users</Title>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Container>
          <h4>Buscar a usuario</h4>
          <Input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <UserList>
            {filteredUsers.map((user) => (
              <UserItem key={user.id}>
                <CardMedia
                  sx={{
                    width: "100px",
                    height: "194px",
                  }}
                  component="img"
                  image="https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
                  alt="Imagen de persona"
                />
                <div style={{ marginLeft: "20px" }}>
                  <p>{user.name}</p>
                  <p>{user.age}</p>
                  <p>{user.hasDog ? 'Sí tiene perro' : 'No tiene perro'}</p>
                </div>
                <Button2 onClick={() => setUpdateData({ id: user.id, name: user.name, age: user.age, hasDog: user.hasDog })}>Update</Button2>
                <Button2 onClick={() => handleIncrementAge(user.id)}>Aumentar la edad</Button2>
                <Button2 onClick={() => handleDeleteUser(user.id)}>Delete</Button2>
              </UserItem>
            ))}
          </UserList>
        </Container>
      )}

      {updateData.id && (
        <>
          <Container>
            <h2>Update User</h2>
            <Input
              type="text"
              placeholder="Name"
              value={updateData.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Age"
              value={updateData.age}
              onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })}
            />
            <label>
              Has Dog:
              <Input
                type="checkbox"
                checked={updateData.hasDog}
                onChange={(e) => setUpdateData({ ...updateData, hasDog: e.target.checked })}
              />
            </label>
            <Button onClick={() => handleUpdateUser(updateData.id)}>Update user</Button>
          </Container>
        </>
      )}
    </>
  );
}

export default App;