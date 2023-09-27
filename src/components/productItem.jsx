import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart as addToCartAction } from '../features/cartSlice'
import { addToCart as addToCartApi } from '../services/cart'
import { constants } from '../utils/constants'

export function ProductItem({ product }) {
  const dispatch = useDispatch()

  const getByAll = async () => {
    const response = await addToCartApi(product['id'], product['price'])
    if (response['status'] === 'success') {
      // update the redux store
      dispatch(addToCartAction())
      toast.success('Successfully added this product to your cart')
    } else {
      toast.error(response['error'])
    }
  }

  return (
    <div className='col-md-3'>
      <div className='card'>
     
        <img
          src={constants.serverUrl + '/' + product['image']}
          style={{ height: 200 }}
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>{product['title']}</h5>
          <div className='card-text'>
            <div>{product['company']}</div>
            <div>₹ {product['price']}</div>
          </div>
          <button onClick={getByAll} className='btn btn-success btn-sm'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
