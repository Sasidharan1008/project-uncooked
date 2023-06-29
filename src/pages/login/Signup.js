import React from 'react'
import styles from "./Login.module.css";

function Signup({passMethod}) {
  return (
        <div className={styles.signup}>
          <p className={styles.mainhead}>Create Your Account </p>
          <div className={styles.labelin}>
            <label className={styles.label} htmlFor='name'>Username</label>
            <input className={styles.input} name='name' id='name' type='text'/>
          </div>

          <div className={styles.labelin}>
            <label className={styles.label} htmlFor='email'>Email</label>
            <input className={styles.input} name='email' id='email' type='email'/>
          </div>

          <div className={styles.labelin}>
            <label className={styles.label} htmlFor='pass'>Password</label>
            <input className={styles.input} name='pass' id='pass' type='password' />
          </div>

          <div className={styles.labelin}>
            <label className={styles.label} htmlFor='conpass'>Confirm Password</label>
            <input className={styles.input} name='conpass' id='conpass' type='password' />
          </div>

          <div className={styles.forgot}>
          <button className={styles.toggle} onClick={passMethod}>Old User?</button>
          </div>
          <button className={styles.btn}>Signin</button>
        </div>
  )
}

export default Signup