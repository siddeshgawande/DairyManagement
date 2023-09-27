import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../features/authSlice'
import { loginUser as loginUserApi } from '../services/user'
import {user} from '../services/user'

function profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
 
    const navigate = useNavigate()

    const profile = async () => {
        if (firstName.length == '') {
          toast.error('Please enter first name')
        } else if (lastName.length == '') {
          toast.error('Please enter last name')
        } else if (email.length == '') {
          toast.error('Please enter email')
        } else if (mobile.length == '') {
          toast.error('Please enter mobile')
        } else {
    const response = await profileApi(
        firstName,
        lastName,
        email,
        mobile
      )
     // parse the response
     if (response['status'] === 'success') {
        toast.success('Successfully registered a new user')

        // go back to login
        navigate('/')
      } else {
        toast.error('Error while registering a new user, please try again')
      }
    }
}

return(
    <div>
    <h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>

    <div className='row'>
      <div className='col'></div>
      <div className='col'>
        <div className='form'>
          <div className='mb-3'>
            <label htmlFor=''>First Name</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor=''>Last Name</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor=''>Mobile Number</label>
            <input
              type='tel'
              className='form-control'
              onChange={(e) => {
                setMobile(e.target.value)
              }}
            />
          </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>

)
}

export default profile