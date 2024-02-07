import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

//  -------------- Datos de la colección ---------------------------
const productosCollection = collection(db, "Crud-react-product");

// ---------------------- Añadir productos ------------------------

export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(productosCollection, productoData);
    return docRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// ---------------------- Cargar productos ------------------------

export const getProductos = async () => {
  try {
    const data = await getDocs(productosCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    console.error("Error al obtener los productos : " + err);
    throw err;
  }
};

// ---------------------- Eliminar productos ------------------------

export const deleteProducto = async (id) => {
  try {
    const productoDocRef = doc(productosCollection, id);
    await deleteDoc(productoDocRef);
    console.log("Producto eliminado correctamente");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
