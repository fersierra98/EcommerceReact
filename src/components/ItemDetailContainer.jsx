import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemRef = doc(db, 'productos', id);
    getDoc(itemRef).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
      setLoad(false);
    });
  }, [id]);

  if (!product) return null;
  if (load)
    return (
      <Oval
      ariaLabel="loading-indicator"
      height={120}
      width={120}
      strokeWidth={2}
      strokeWidthSecondary={2}
      color="black"
      secondaryColor="white"
      wrapperStyle={{}}
      wrapperClass="oval-cargando"
      />
    );

  return (
    <div>
      <h1 className="title-itemdetail">detalle del producto</h1>
      <ItemDetail product={product} />
    </div>
  );
}
