import CartWidget from '../../common/cartWidget/CartWidget'
import "./navbar.css";
import {categorias} from "./categorias";
import logo from '../../../assets/logo.png';
import {Link} from "react-router-dom"
import {CartContextProvider} from '../../../context/CartContext'



const Navbar = () => {



    return (
        <div>
            <nav className="navbar">
            <Link className="navbar-brand" to="./"><img className='imagen'src={logo} alt="" /></Link>                         
                <ul>
                {categorias.map(({title, path}) =>(
                    <Link key={title} to={path}>
                        {title}
                        </Link>
                ))}

                {/* <Link to="/arrayProductos">motorola</Link> */}
                </ul>
            <Link to= "/Cart"><CartWidget /></Link>
        </nav>
        </div>
    )
} 

export default Navbar