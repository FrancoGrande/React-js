import CartWidget from '../../common/cartWidget/CartWidget'
import "./navbar.css";
import {categorias} from "./categorias";
import logo from '../../../assets/logo.png'; 



const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <a className="navbar-brand" href="./arrayProductos"><img className='imagen'src={logo} alt="" /></a>                         
                <ul>
                {categorias.map((categoria) =>(
                    <li key={categoria.title}>{categoria.title}</li>
                ))};
                </ul>
            <CartWidget />
        </nav>
        </div>
    )
} 

export default Navbar