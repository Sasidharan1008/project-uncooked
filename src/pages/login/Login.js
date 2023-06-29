import React from 'react';
import styles from "./Login.module.css";

function Login({passMethod}) {
  return (
        <div className={styles.login}>
          <p className={styles.mainhead}>Log In</p>
          <div className={styles.labelin}>
          <label className={styles.label} htmlFor='email'>Email</label>
            <input className={styles.input} name='email' id='email' type='email'/>
            
          </div>
          <div className={styles.labelin}>
          <label className={styles.label} htmlFor='pass'>Password</label>
            <input className={styles.input} name='pass' id='pass' type='password' />
          </div>
          <div className={styles.forgot}>
              <span className={styles.label}>Forgot Password</span>
              <button className={styles.toggle} onClick={passMethod}>New User?</button>
          </div>
          <button className={styles.btn}>Login</button>
        </div>
  )
}

export default Login