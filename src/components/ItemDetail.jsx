import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

export default function ItemDetail({ product }) {
  const [cantidad, setCantidad] = useState();
  const { addItem } = useContext(CartContext);


  const onAdd = (cant) => {
    setCantidad(cant);
    if (cant !== 0) {
      addItem(product, cant);
    }
  };

  return (
    <div>
      <div>
        <div className="container-detail" key={product.id}>
          <div>
            <h1 className="title-detail">{product.title}</h1>
            <img src={product.picture} alt="" width={400} />
          </div>
          <div>
            <p className="item-detail">
              Descripcion: <span>{product.description}</span>
            </p>
            <p className="item-detail">
              Categoria: <span>{product.category}</span>
            </p>
            <p className="item-detail">
              Precio: $<span>{product.price}</span>
            </p>
            <p className="item-detail">
              Stock disponible: <span>{product.stock}</span>
            </p>
            <div className="count-detail">
              {cantidad ? (
                <Link to={'/cart'} className="finalizar-detail">
                Finalizar compra
              </Link>
            ) : (
              <ItemCount
                stock={product.stock}
                initial={product.initial}
                onAdd={onAdd}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
