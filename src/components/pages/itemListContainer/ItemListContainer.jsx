import "./itemListContainer.css"
import Card from "../../common/ProductCard/Card";

const ItemListContainer = ({saludar}) => {

  return (
    <div className="container">
      <h1>Lista de productos</h1>
      <h2 className="saludito">{saludar}</h2>
      <div className="lista-productos">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </div>
    </div>
  )
}

export default ItemListContainer