import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import {addFav, deleteFav } from '../../redux/actions';
import { useEffect } from 'react';
const Card = ({name, species, gender, image, onClose,detailId}) => {
   const [isFav, setIsFav] = useState (false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(deleteFav(detailId))
      }
      else {
         setIsFav(true);
         dispatch(addFav({name, species, gender, image, onClose,detailId}))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === detailId) {
            setIsFav(true);
         }
      });
      //eslint-disable-next-line
   }, [myFavorites]);
   return (
      <div className={styles.card} >
         {
            onClose ? (
               <button className={`${styles.button} ${styles.closeBut}`} onClick={() => { onClose(detailId) }}><strong>x</strong></button>
            ) : ''}
         {
            isFav ? (
               <button className={`${styles.button} ${styles.favBut}`} onClick={handleFavorite}>★</button>
            ) : (
               <button className={`${styles.button} ${styles.favBut}`} onClick={handleFavorite}>☆</button>
            )
         }
         <NavLink to={`/detail/${detailId}`}>
            <img className={styles.img} src={image} alt={`Imagen de ${name}`} />
         </NavLink>
         <div className={styles.data}>
            <h4>{name}</h4>
         <div className={styles.subData}>
            <h5>{gender}</h5>
            <h5>{species}</h5>
         </div>
         </div>
      </div>
   );
}

export default Card;