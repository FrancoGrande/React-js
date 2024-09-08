import "./card.css"

const Card = (props) => {

    const {nombre, precio} = props;

  return (
    <div className="card-producto">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <button>Ver detalles</button>
    </div>
  )
}

export default Card
