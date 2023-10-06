import { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState();
  const { cartList, total, clearList } = useContext(CartContext);

  const createOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: cartList.map((element) => {
        return {
          id: element.id,
          title: element.title,
          price: element.price,
          quantity: element.quantity,
        };
      }),
      total: total,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'ordenes');
    addDoc(ordersCollection, order).then(({ id }) =>
      Swal.fire({
        title: 'Orden completada con exito!',
        html: `Tu id de orden es: ${id}`,
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          clearList();
          setOrderId(id);
        }
      })
    );
  };

  if (orderId) {
    return (
      <div className="order-finished-titles">
        <h1>Muchas gracias por su compra!</h1>
        <h2>
          Haz click <Link to={'/'}>aqui</Link> para volver a la pagina de
          inicio.
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="title-fina-compra">Finalizar compra</h1>
      <h2 className="title-fina-datos">Completa con tus datos:</h2>
      <form className="form-finalizar" onSubmit={createOrder}>
        <input
          type="text"
          value={name}
          placeholder="Ingresá tu nombre"
          onChange={(e) => setName(e.target.value)}
          className="input-finalizar"
          required
        />
        <input
          type="text"
          value={email}
          placeholder="Ingresá tu email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-finalizar"
          required
        />
        <input
          type="number"
          value={phone}
          placeholder="Ingresá tu telefono"
          onChange={(e) => setPhone(e.target.value)}
          className="input-finalizar"
          required
        />
        <button className="btn-finalizar-checkout">Comprar</button>
      </form>
    </div>
  );
}
