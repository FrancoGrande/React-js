import CartWidget from '../../common/cartWidget/CartWidget'
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
            <a class="navbar-brand" href="./index.html">Sam Sun</a>                         
                <ul>
                    <li>Samsung</li>
                    <li>Motorola</li>
                    <li>Xiaomi</li>
                    <li>TCL</li>
                </ul>
            <CartWidget />
        </nav>
        </div>
    )
}

export default Navbar