import React, { useEffect } from 'react';
import { Products } from '../../assets/products';
import MenuItem from './MenuItem';
import styles from "./Menu.module.css";

function Menu() {

  const [type,setType] = React.useState("All");
  const [datas,setData] = React.useState(Products);
  const [search,setSearch] = React.useState("");
  const [searchData,setSearchData] = React.useState(Products);

  useEffect(() => {
    setSearchData(Products.filter(product => {
      if (type === "All"){
        return product
      } else if (product.category === type){
        return(product)
      }
  }))
  },[type])

  useEffect(() => {
    setSearchData(datas.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase())));
  }, [search]);
  
  return (
    <div className={styles.menus}>
      <div className={styles.btnGroup}>
        <button value='All' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>All</button>
        <button value='South Indian' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>South Indian</button>
        <button value='Fried Rice' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Fried Rice</button>
        <button value='Pasta' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Pasta</button>
        <button value='Sandwich' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Sandwich</button>
        <button value='Sweet' onClick={(e) => setType(e.target.value)} className={styles.catbtn}>Desserts</button>
      </div>
      <div className={styles.searchbox}>
        <input type='text'  value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Products' />
      </div>
      <div className={styles.cardGroup}>
        <MenuItem products={searchData} />
      </div>
    </div>
  )
}

export default Menu