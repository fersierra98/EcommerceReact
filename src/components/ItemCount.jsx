import { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setcount] = useState(parseFloat(initial));

  const add = () => {
    if (count < parseFloat(stock)) {
      return setcount(count + 1);
    }
  };

  const dash = () => {
    if (count > 0) {
      return setcount(count - 1);
    }
  };

  return (
    <div className="contador">
      <div className="contador-produc">
        <button className="btndash" onClick={dash}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="rgb(0, 119, 255)"
            className="bi bi-cart-dash"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </button>
        <span className="numbercount-produc">{count}</span>
        <button className="btnplus" onClick={add}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="rgb(0, 119, 255)"
            className="bi bi-cart-plus"
            viewBox="0 0 16 16"
          >
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="btnadd-produc">
        Agregar al carrito
      </button>
    </div>
  );
}
