import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

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
      <Route path={"/arrayProductos"} element={<ItemListContainer />}/>
      <Route path={"/productdetails/:id"} element={<ItemDetailContainer />}/>






      <Route path={"*"} element={<h2>404 not found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
      
}

export default App;
