import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";
const Form = ({login}) => {
    const [userData, setUserData] =useState({ 
        username: '',
        password: '' });
    const [errors, setErrors] = useState ({
        username: '',
        password: '' 
    });

    const handleInputChange = (event) => {
        setUserData({
      ...userData,
      [event.target.name]: event.target.value,
     
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
          
        })
            
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)

    };
    return (
<div className={styles.wrap}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input className={errors.username && styles.warning}  type= "text" value={userData.username} name="username" onChange={handleInputChange}></input>
         {errors.username && <p className={styles.danger} >{errors.username}</p>}
        <label htmlFor="password">Password:</label>
        <input className={errors.password && styles.warning}  type="text" value={userData.password} name="password" onChange={handleInputChange}></input>
        {errors.password && <p className={styles.danger}>{errors.password}</p>}
        <button className={styles.botonslink}>Login</button>
    </form>
</div>
)
}

export default Form;