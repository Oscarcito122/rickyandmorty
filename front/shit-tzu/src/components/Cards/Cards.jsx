
 import styles from './Cards.module.css';
 import Card from '../Card/Card';
  function Cards({id,characters,onClose}) {

    return(
       <div className={styles.container}>
          {
              characters.map(({id,name, species, gender, image })=> {
                return <Card
                key = {id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                detailId={id}
                onClose={() => onClose(id)}
                />
            })
          }
       </div>
    )
 };

 export default Cards