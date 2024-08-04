import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
//CRUD
//Definir el nombre de la coleccion que vamos a utilizar de esa base de datos
const collectionName = "users";
//Vamos a definir la referencia a la coleccion que vamos a utilizar
const usersCollectionRef = collection(db, collectionName);
//CREATE
const createUser = async (user) => {
    try {
        const docRef = await addDoc(usersCollectionRef, user);
        return docRef;
    } catch {
        console.log("Error creating user");
    }
}
//READ
//Definir la funcion de lectura
const getUsers = async () => {
    //Vamos a utilizar el metodo get de la referencia de la coleccion
    const data = await getDocs(usersCollectionRef);
    //Vamos a retornar la data
    const users = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return users;
};
//Update
const updateUser = async (id, user) => {
    const userRef=doc(db,collectionName,id);
    try {
        await updateDoc(userRef,user);
        return userRef;
    }catch{
        console.log("Error updating user");
    }

};
//Delete
const deleteUser = async (id) => {
    try {
        await deleteDoc(doc(db,collectionName,id));
        return true;
    } catch {
        console.log("Error deleting user");
    }
};
const getUserByID = async (id) => {
    try {
        const userRef = doc(db, collectionName, id);
        const user = await getDoc(userRef);
        return user.data();
    } catch {
        console.log("Error getting user");
    }
};
export { getUsers, createUser, updateUser, deleteUser , getUserByID}   
