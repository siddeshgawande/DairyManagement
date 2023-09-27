import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getMyOrders as getMyOrdersApi } from '../services/order'
import MyOrdersItem from './myOrdersItem'

function MyOrders() {
  const [orders, setOrders] = useState([])

  const getMyOrders = async () => {
    const response = await getMyOrdersApi()
    if (response['status'] === 'success') {
      setOrders(response['data'])
    } else {
      toast.error(response['error'])
    }
  }

  useEffect(() => {
    getMyOrders()
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Orders</h1>
      <div className='row' style={{ marginTop: 50 }}>
        {orders.map((order) => {
          return <MyOrdersItem order={order} />
        })}
      </div>
    </div>
  )
}

export default MyOrders