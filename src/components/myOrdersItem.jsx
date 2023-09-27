import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart as addToCartAction } from '../features/cartSlice'
import { addToCart as addToCartApi } from '../services/cart'
import { constants } from '../utils/constants'
import { getMyOrders } from '../services/order'
import { useEffect, useState } from 'react'

export function MyOrdersItem({ order }) {
  const dispatch = useDispatch()

  //const[orders,setOrders]=useState([])
   
  useEffect(()=>{
    getAllUsersOrders()
  },[])
  const getAllUsersOrders = async () => {
    const response = await getMyOrders()
    if (response['status'] === 'success') {
      // update the redux store
      //orders(response)
      console.log(response)
      toast.success('we get all data')
    } else {
      toast.error(response['error'])
    }
  }

  return (
   
    <div className='col-md-3'>
    <div className='card'>
   
      <img
        src={constants.serverUrl + '/' + order['image']}
        style={{ height: 200 }}
        alt=''s
      />

      </div>
      <div className='card-body'>
        <h5 className='card-title'>{order['title']}</h5>
        <div className='card-text'>
          <div>{order['orderDate']}</div>
          <div>₹ {order['totalPrice']}</div>
        </div>
        
        
      </div>
    </div>
 
  )
}

export default MyOrdersItem
