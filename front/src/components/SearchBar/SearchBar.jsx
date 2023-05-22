import styles from './SearchBar.module.css';
import { useState } from 'react';

 function SearchBar({onSearch}) {

   const [character, setCharacter] = useState ('');

   const handleChange = (event) => {
    setCharacter(event.target.value)
   }

   return ( 
      <div className={styles.dependantBar}>
      
         <input className={styles.addForm} type='search' value={character} onChange = {handleChange} />
      <button className={styles.buttonadd} onClick={() => onSearch(character)}>ADD</button>
      
      </div>
   
   );
}
export default SearchBar;