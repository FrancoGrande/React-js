import CounterContainer from '../../common/counter/CounterContainer';
import './ItemDetail.css'


const ItemDetail = ({item, onAdd, totalItems}) => {
return (
        <div className='Card'>
            <img src={item.img} alt="" />

            <div className='info'>
            <h1>{item.title}</h1>
            <h3>{item.descripcion}</h3>
            <h3>${item.price}</h3>
            <CounterContainer className='contador' onAdd={onAdd} stock= {item.stock} totalItems={totalItems}/>
            <h3>Ya tenes: {totalItems} unidades en el carrito</h3>
            </div>
        </div>
    );
};

export default ItemDetail;