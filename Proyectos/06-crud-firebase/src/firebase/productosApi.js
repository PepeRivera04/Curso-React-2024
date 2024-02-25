import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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

// ---------------------- Cargar datos de un producto con id 'x' ------------------------

export const getProductById = async (productoId) => {
  try {
    const productDocRef = doc(productosCollection, productoId);
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
    const productoDocRef = doc(productosCollection, id);
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
    const productDocRef = doc(productosCollection, idProducto);
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.error(error);
  }
};

// Iniciar sesión con Google
export const signWithGoogle = async (signIn, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    // result trae TODA LA INFORMACIÓN de la cuenta seleccionada
    const user = result.user;
    // Aqui mando el usuario al contexto global
    signIn(user);
    navigate("/");
  } catch (error) {
    setError(error);
  }
};

// Cerrar sesión con Google
export const signOutGoogle = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error(error);
  }
};
