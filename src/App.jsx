import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import  {useState} from "react";


function App() {

  const [montarComponente, setMostrarComponente] = useState(false);
  let saludo ="Hola mmmmmmmmmmmundo"
  const montarYdesmontar = () =>{
    setMostrarComponente(!montarComponente);
  }


  return ( <div>
      <Navbar />
      {montarComponente ? <ItemListContainer /> :null}
      <button onClick={montarYdesmontar}> montar/desmohntar</button>
    </div>
  )
      
}

export default App;
