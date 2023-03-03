import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";



const Nav = ({onSearch}) => {
 return (
     <div className={styles.navstyles}>
      <SearchBar onSearch = {onSearch} />  
      <button className={styles.botonslink}>        
      <NavLink to="/About" className={styles.active}>About</NavLink>
      </button>    
   
      <button className={styles.botonslink}> 
      <NavLink to ="/home" className={styles.active}>Home</NavLink>
      </button>  
        
      <button className={styles.botonslink}> 
       <NavLink to ="/" className={styles.active}>Logout</NavLink>
      </button>
      <button className={styles.botonslink}> 
       <NavLink to ="/favorites" className={styles.active}>Favorites</NavLink>
      </button>
     </div>
 )
}

export default Nav;