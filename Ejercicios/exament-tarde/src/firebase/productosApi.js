import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import Swal from "sweetalert2";

//  -------------- Datos de la colección ---------------------------
const examenCollection = collection(db, "Examen-React2-JARB");

// ---------------------- Añadir productos ------------------------

export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(examenCollection, productoData);
    return docRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// ---------------------- Cargar productos ------------------------

export const getProductos = async () => {
  try {
    const data = await getDocs(examenCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    console.error("Error al obtener los productos : " + err);
    throw err;
  }
};

// ---------------------- Cargar datos de un producto con id 'x' ------------------------

export const getProductById = async (productoId) => {
  try {
    const productDocRef = doc(examenCollection, productoId);
    const productDoc = await getDoc(productDocRef);

    if (productDoc.exists) {
      return {
        ...productDoc.data(),
        id: productDoc.id,
      };
    }
  } catch (err) {
    console.error("Error al obtener el producto : " + err);
    throw err;
  }
};

// ---------------------- Eliminar productos ------------------------

export const deleteProducto = async (id) => {
  try {
    const productoDocRef = doc(examenCollection, id);
    await deleteDoc(productoDocRef);
    console.log("Producto eliminado correctamente");
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al intentar eliminar el producto",
    });
  }
};

// ---------------------- Edit productos ------------------------

export const editProduct = async (idProducto, newData) => {
  try {
    const productDocRef = doc(examenCollection, idProducto);
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.log(idProducto, newData);
    console.error(error);
  }
};
