import { db } from "../../firebase/config"
import { collection, getDocs, doc } from 'firebase/firestore'

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const orders = []
  querySnapshot.forEach(doc => {
    orders.push({id: doc.id, ...doc.data()})
  })
   
  return orders
}
const getByIdAsync = async (id) => {
  const orderRef = doc(db, "orders", id);
  const orderSnapshot = await getDocs(orderRef);

  if (orderSnapshot.exists()) {
    return { id: orderSnapshot.id, ...orderSnapshot.data() };
  } else {
    throw new Error(`Order with ID ${id} does not exist.`);
  }
};

const ordersService = {
  getAllAsync,
  getByIdAsync
}

  
  export default ordersService