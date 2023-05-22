import { useSelector } from "react-redux";
import styles from "./Favorites.module.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
  return (
      <div className={styles.allNavbar}>
          <div className={styles.dependantBar}>
              <select onChange={handlerOrder}>
                  <option value="order" disabled="disabled">Order By</option>
                  <option value="Ascendente">Ascendente</option>
                  <option value ="Descendente">Descendente</option>
              </select>
              <select onChange={handlerFilter}>
                  <option value="filter" disabled="disabled">Filter By</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option>
              </select>
          </div>
      {
          myFavorites.map((character) => {
          return (
              <div>
                  <section className={styles.card__head}>
            <button className={styles.botonslink} >
            <NavLink to = {`/detail/${character.detailId}`} className={styles.active}>
            <p className={styles.card__headName}>{character.name}</p>
            </NavLink>
            </button>
         </section>

         <section>
            <img  src={character.image} alt={character.name} className={styles.card__peopleIMG}/>
         </section>

         <section className={styles.card__info}>
            <p className={styles.card__infoSpecies}>Species: {character.species}</p>
            <p className={styles.card__infoGender}>Gender: {character.gender}</p>
         </section>
             </div>
          )
          })
      }
      </div>

  )
}

export default Favorites;