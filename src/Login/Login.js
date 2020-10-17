import React from 'react'
import './Login.css'
import logo from './logo.png'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {
    const [state,dispatch] = useStateValue()
    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithPopup(provider)
            .then((result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }))
            .catch((error => {
                alert(error.message)
            }))
    }
    return (
      <div className='login'>
        <div className='login__container'>
          <img src={logo} alt='' />
          <div className='login__info'>
            <h2>Please Login to Connectica Cloud</h2>
            <p>connecticacloud.slack.com</p>
            <Button onClick={signIn} className='login__button'>Sign In With Google</Button>
          </div>
        </div>
      </div>
    );
}

export default Login
