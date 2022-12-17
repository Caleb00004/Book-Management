import './navbar.css'
import img from './drop-down-arrow.png'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({cart}) {
    const navigateTo = useNavigate()

    const [open, setOpen] = useState(false)

    function navToggle(){
        setOpen(prevState => !prevState)
    }

    return (
        <nav>
            <svg onClick={navToggle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'black', transform: 'scaleX(-1)'}}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            <div className='drop-nav open' id={open? 'open' : 'close'}>
                <Link to={'/'} onClick={() => setOpen(false)}><li>Dashboard</li></Link>
                <Link to={'/addbook'} onClick={() => setOpen(false)}><li>Add Books</li></Link>
                <Link to={'/booklist'} onClick={() => setOpen(false)} ><li>Books List</li></Link>
                <Link to={'/checkout'} onClick={() => setOpen(false)} ><li>Checkout</li></Link>
            </div>

            <h3>Book Management</h3>
            <div className='nav-right'>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Other Projects<i class="fa fa-caret-down">▾</i></a>
                <div class="dropdown-content">
                <a target={'_blank'} href="https://crypto-tracker-rosy.vercel.app/">crypto Tracker</a>
                <a target={'_blank'} href="https://ornate-tulumba-3e1234.netlify.app/">Quizzical</a>
                <a target={'_blank'} href="https://loquacious-dragon-8ea6ab.netlify.app/">CJC Markets</a>
                <a target={'_blank'} href="https://resplendent-panda-e234c4.netlify.app/">Game Boyy</a>
                </div>
            </li>
                <a target={'_blank'} href='https://github.com/Caleb00004/Book-Management'> <button>Code Link</button> </a>
                {cart.length <= 0 ? <svg onClick={() => navigateTo('/checkout')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg> 
                : <svg onClick={() => navigateTo('/checkout')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>}
            </div>
        </nav>
    )
}