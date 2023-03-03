import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import {addFavorite, deleteFavorite } from '../../redux/actions';
import { useEffect } from 'react';
const Card = ({name, species, gender, image, onClose,detailId}) => {
   const [isFav, setIsFav] = useState (false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(detailId))
      }
      else {
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose,detailId}))
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
      <div className={styles.card}>
         {
          isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
          <button onClick={handleFavorite}>🤍</button>
         )
         }
         
         <section className={styles.card__head}>
            <button className={styles.botonslink} >
            <NavLink to = {`/detail/${detailId}`} className={styles.active}>
            <p className={styles.card__headName}>{name}</p>
            </NavLink>
            </button>
            <button className={styles.card__headBoton} onClick={onClose}>X</button>
         </section>

         <section>
            <img  src={image} alt={name} className={styles.card__peopleIMG}/>
         </section>

         <section className={styles.card__info}>
            <p className={styles.card__infoSpecies}>Species: {species}</p>
            <p className={styles.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export default Card;