import CartWidget from '../../common/cartWidget/CartWidget'
import "./navbar.css";
import {categorias} from "./categorias";




const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <a className="navbar-brand" href="./index.html">Sam Sun</a>                         
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