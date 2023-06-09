import { db } from "../../firebase/config"
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'

const createProduct = async (productData) => {
  const collectionRef = collection(db, 'products')
  const docRef = await addDoc(collectionRef, productData)

  if (!docRef.id) throw new Error('Something went wrong')

  console.log(docRef)
  return { id: docRef.id, ...productData }
}

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const products = []
  querySnapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() })
  })

  return products
}
const updateProductAsync = async (id, updatedData) => {
  await updateDoc(doc(db, 'products', id), updatedData)
}

const deleteProductAsync = async (id) => {
  return await deleteDoc(doc(db, 'products', id))
}

const productsService = {
  createProduct,
  getAllAsync
}

export default productsService