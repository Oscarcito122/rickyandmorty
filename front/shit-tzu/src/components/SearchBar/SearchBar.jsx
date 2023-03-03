import styles from './SearchBar.module.css';
import { useState } from 'react';

 function SearchBar({onSearch}) {

   const [character, setCharacter] = useState ('');

   const handleChange = (event) => {
    setCharacter(event.target.value)
   }

   return ( 
      <div>
         
         <input className={styles.inputsearch} type='search' value={character} onChange = {handleChange} />
      <button className={styles.botonsearch}onClick={() => onSearch(character)}>Agregar</button>
       
      </div>
   
   );
}
export default SearchBar;