import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { collection, getDocs, getFirestore, query, where, } from 'firebase/firestore';

const ItemListContainer = () => {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipo } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    if (!tipo) {
      const itemsCollection = collection(db, 'productos');
      setTimeout(() => {
        getDocs(itemsCollection).then((snapshot) => {
          setListadoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoading(false);
        });
      }, 2000);
    } else {
      const q = query(collection(db, 'productos'), where('category', '==', tipo));
      setTimeout(() => {
        getDocs(q).then((snapshot) => {
          setListadoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoading(false);
        });
      }, 2000);
    }
  }, [tipo]);

  if (!listadoProductos) return [];
  if (loading)
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
      <h1 className="title-main">
        Camisetas de fútbol FS!
      </h1>
      <div className="productos-main">
        <Itemlist items={listadoProductos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
