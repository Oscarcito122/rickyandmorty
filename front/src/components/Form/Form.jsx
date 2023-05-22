import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";
const Form = ({login}) => {
    const [userData, setUserData] = useState({ 
        username: '',
        password: '' 
    });
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
<div >
    <form className={styles.container} onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.active}>Username: </label>
        <input className={errors.username && styles.warning}  type= "text" value={userData.username} name="username" onChange={handleInputChange}></input>
        <p className={styles.error}>{errors.username}</p>
        <label htmlFor="password" className={styles.active}>Password: </label>
        <input className={errors.password && styles.warning}  type="text" value={userData.password} name="password" onChange={handleInputChange}></input>
        <p className={styles.error}>{errors.password}</p>

        <button className={styles.botonslink}>Login</button>
    </form>
</div>
)
}

export default Form;