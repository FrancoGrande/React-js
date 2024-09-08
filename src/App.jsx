import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"



function App() {

  let saludo ="Hola mmmmmmmmmmmundo"
  return ( <div>
      <Navbar />
      <ItemListContainer saludar={saludo} />
    </div>
  )
      
}

export default App;
