import { Link } from 'react-router-dom';

export default function Item({ id, title, picture }) {
  return (
    <div className="producto">
      <h1 className="name-produc">{title}</h1>
      <img src={picture} alt={title} />
      <Link to={`/item/${id}`} className="detail-produc">
        Ver detalles del producto
      </Link>
    </div>
  );
}
