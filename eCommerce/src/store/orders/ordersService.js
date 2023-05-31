import { db } from "../../firebase/config"
import { collection, getDocs } from 'firebase/firestore'

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const orders = []
  querySnapshot.forEach(doc => {
    orders.push({id: doc.id, ...doc.data()})
  })

  return orders
}

const ordersService = {
  getAllAsync
}

  
  export default ordersService