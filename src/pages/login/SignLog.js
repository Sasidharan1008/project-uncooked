import React, { useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import styles from "./Login.module.css";

function SignLog() {
 
  const [toggle, setToggle ] = React.useState(false)
  
  const functoggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className={styles.container}>
        <div className={styles.content}>
          {toggle ? <Signup passMethod={functoggle} /> :<Login passMethod={functoggle} />}
        </div>
    </div>
  )
}

export default SignLog