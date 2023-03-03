import styles from "./Detail.module.css";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const {detailId} = useParams()
  const[character, setCharacter] = useState({});


  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
      <div className={styles.head}>
        <div className={styles.detailhead }>

        <section>
        <h1 className={styles.detailheadName}>{character?.name}</h1>
        </section>

       <div>
        <img className={styles.imag} src= {character?.image} alt= {character?.name} />
        </div>

        <section className={styles.detailInfo}>
        <p>Status:{character?.status}</p> 
        <p>Specie:{character?.species}</p> 
        <p>Gender:{character?.gender}</p> 
        </section>

       </div>
        <button className={styles.detailboton}>
       <Link to = "/home" className={styles.activ}> Regresar </Link>
       </button>

      </div>
  )
}

export default Detail;