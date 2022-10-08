import { Link } from 'react-router-dom'
import './sidenav.css'

export default function SideNav() {
    return (
        <section className="sideNav">
{/*            <h1>Side Nav</h1> */}
            <div className="icon-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style={{fill: 'rgb(128, 36, 128)'}}><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h7v14H4zm9 0V5h7l.001 14H13z"></path><path d="M15 7h3v2h-3zm0 4h3v2h-3z"></path></svg>
                <span>Books</span>
            </div>
            <ul>
                <li ><Link to={'/'}>Dashboard</Link></li>
                <li><Link to={'/addbook'}>Add Books</Link></li>
                <li><Link to={'/booklist'}>Books List</Link></li>
                <li><Link to={'/checkout'}>Checkout Page</Link></li>
            </ul>
        </section>
    )
}