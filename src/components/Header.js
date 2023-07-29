import {useState,useContext} from 'react'
import {LOGO_URL} from '../utils/constants'   //named import
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header=()=>{
    const[login,setLogin]=useState("Login")
    const onlineStatus = useOnlineStatus()
    const {loggedInUser}= useContext(UserContext)

    // Selector
    // gives access to the store (Subscribing to the store)

    const cartItems = useSelector((store)=>store.cart.items) 
    console.log(cartItems)
    
    return(
        <div className="header flex justify-between items-center bg-pink-200 shadow-lg mb-4">
        <div className="logo-container">
            <img className='w-40 h-[140px] p-2' src={LOGO_URL}/>
        </div>
        <div className='nav-items flex items-center justify-between'>
            <ul className='flex p-4 flex-wrap '>
                <li> Online Status: { onlineStatus ? "✅" : "㊙️" }</li>
                <li className='px-4'><Link to='/'>Home</Link></li>
                <li className='px-4'><Link to='/about'>About Us</Link></li>
                <li className='px-4'><Link to='/contact'>Contact</Link></li>
                <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                <li className='px-4'>Cart ({cartItems.length}) </li>
                <button className='login border-' 
                onClick={()=>{
                    login==='Login' ? 
                    setLogin("Logout") :
                    setLogin('Login')
                }}
                >{login}
                </button>
                <li className='px-4'>{loggedInUser}</li>
            </ul>
        </div>
        </div>
    )
}
export default Header