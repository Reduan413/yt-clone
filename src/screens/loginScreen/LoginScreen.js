import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useHistory} from 'react-router-dom'

import './loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin = () =>{
        dispatch(login())
    }

    const history = useHistory()
    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    }, [accessToken, history])
    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src="https://www.freepnglogos.com/uploads/youtube-icon-logo-7.png"
                    alt="logo"
                />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This Project is using YOUTUBE DATA API </p>
            </div>
        </div>
    )
}

export default LoginScreen
