import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";
import title from '../../title.png';




const Nav = ({onSearch}) => {
 return (
     <div className={styles.allNavbar}>
     <div className={styles.navBar}>
     <img className={styles.titleImg} src={title} alt='Rick and Morty title' />

      <NavLink to="/About" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >About</NavLink>
      <NavLink to ="/home" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >Home</NavLink>
       <NavLink to ="/" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >Logout</NavLink>
       <NavLink to ="/favorites" className={({ isActive }) => isActive ? styles.active : styles.navLinks}>Favorites</NavLink> 
      </div>
      <SearchBar onSearch = {onSearch} />  
     </div>
 )
}

export default Nav;