import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer";

function App() {

  // const [montarComponente, setMostrarComponente] = useState(false);

  // const montarYdesmontar = () =>{
  //   setMostrarComponente(!montarComponente);
  // }
  return ( 
        <BrowserRouter>
    <Navbar  />
      <Routes>
      
      {/* <Route path={"/"} element={<h2>una ruta</h2>}/> */}
      <Route path={"/"} element={<ItemListContainer />}/>
      <Route path={"/category/:categoryName"} element={<ItemListContainer />}/>
      <Route path={"/productdetails/:id"} element={<ItemDetailContainer />}/>
      <Route path={"/cart"} element={<CartContainer />}/>






      <Route path={"*"} element={<h2>404 not found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
      
}

export default App;
