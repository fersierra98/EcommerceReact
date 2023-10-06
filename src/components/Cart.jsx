import { useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartList, removeItem, clearList, calcPriceTot, total } =
    useContext(CartContext);

  useEffect(() => {
    let pricetotal = 0;
    cartList.forEach((element) => {
      pricetotal += element.price * element.quantity;
    });
    calcPriceTot(pricetotal);
  }, [cartList]);

  if (cartList.length === 0)
    return (
      <div className="container-titles">
        <h1 className="title-cart">Carrito:</h1>
        <p className="text-cart-vacio">
          Su carrito está vacío... Descubre nuestra colección de camisetas de fútbol {' '}
          <Link to={'/'} className="text-cart-inicio">
          Ver productos
          </Link>
        </p>
      </div>
    );

  return (
    <div>
      <div className="container-titles">
        <h1 className="title-cart">Tu carrito:</h1>
        <p className="total-cart">Total a pagar del carrito: ${total}</p>
        <button onClick={() => clearList()} className="btn-cart-clear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-trash3-fill btn-remove"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
          Vaciar carrito
        </button>
      </div>
      <div>
        {cartList.map((producto) => (
          <div key={producto.id} className="container-cart-grid">
            <div className="item-cart-grid">
              <img src={producto.picture} alt={producto.title} width={150} />
            </div>
            <div className="item-cart-grid">
              <h2>{producto.title}</h2>
              <span>{producto.description}</span>
            </div>
            <div className="item-cart-grid">
              <p>
                Precio por unidad: <span>${producto.price}</span>
              </p>
            </div>
            <div className="item-cart-grid">
              <p>
                Categoria: <span>{producto.category}</span>
              </p>
            </div>
            <div className="item-cart-grid">
              <p>
                Cantidad seleccionada: <span>{producto.quantity}</span>
              </p>
            </div>
            <div>
              <button
                className="btn-cart-remove"
                onClick={() => removeItem(producto.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-trash3-fill btn-remove"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="btn-finalizar">
          <Link to={'/checkout'} className="btn-cart-finalizar">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
