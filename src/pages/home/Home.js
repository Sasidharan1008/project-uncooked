import React from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import AboutImg from"./splashbg.jpg";
import Dinning from"./dining.jpg";
import FineDining from"./finedining.jpg";
import Dine from "./s1.png";
import Chef1 from "./chef 1.jpg";
import Chef2 from "./chef 2.png";
import Chef3 from "./chef 3.jpg";
import FeedBg from "./givebg.jpeg";


<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
</style>

function Home() {
  return (
    <>
      <div className={styles.slider}>
        <div className={styles.header}>
          <h2 className={styles.mainline}>EAT VISIT REPEAT</h2>   
          <h4 className={styles.subline}>We speak the language of the cuisine; we reach the hearts of the foodies.</h4>
          <Link className={styles.button} to='/menu'>Order Now</Link>
        </div>
      </div>
    <div className={styles.aboutus}>
      <h2>About Us</h2>
      <div className={styles.aboutmaindiv}>
        <div className={styles.aboutimg}>
          <img src={AboutImg} />
        </div>
        
        <div className={styles.aboutdiv}>
          <p className={styles.aboutp}>An Uncooked Kitchen is one that has been recognized by an organization, such as the Michelin Guide, for its exceptional culinary offerings. These Kitchen are usually known for their high-quality ingredients, creative recipes, and excellent service. Uncooked Kitchen often have celebrated chefs, who are renowned for their innovative cooking techniques. Many of these Kitchen also feature unique dishes and dining experiences, such as unique cocktails, unique decor, and special tasting menus. Uncooked Kitchen are a great choice for those looking for a memorable dining experience.</p>
          <Link className={styles.button} to="/about">About us</Link>
        </div>
      </div>
    </div>
    <div className={styles.parallex1}>
      
    </div>
    <div className={styles.table}>
      <p>-Contact-</p>
      <h1>MAKE A RESERVATION</h1>
      <p>Private Dinning & Buffet Dinning</p>
      <div className={styles.tableimg}>
        <img src={Dine} />
        <img src={FineDining} />
        <img src={Dinning} />
      </div>
      
      <Link to="/table" className={styles.button}>Table Reservation</Link>
    </div>
    <div className={styles.chef_l}>
      <h2>OUR MASTER CHEFS</h2>
      <div className={styles.chefgrp}>
        <div className={styles.chefdiv}>
          <img src={Chef1} className={styles.chefimg}/>
          <p>Sara Is An Experienced And Highly Skilled Chef Who Specializes In Crafting Innovative, Flavorful Dishes Using Fresh, Seasonal Ingredients. She Has A Keen Eye For Detail And Is Committed To Producing Dishes That Are Of The Highest Quality. Sara Is Also Adept At Managing A Kitchen And Working With A Team. With Her Creative Flair And Commitment To Excellence, Sara Is An Excellent Chef Who Consistently Produces Delicious Dishes.</p>
        </div>
        
        <div className={styles.chefdiv}>
          <img src={Chef2} className={styles.chefimg}/>
          <p>Tim Is A Chef Who Is Known For His Unique Approach To Cooking. He Often Adds A Touch Of Humour To His Dishes, Using Unusual Ingredients And Creative Presentation Methods To Create Dishes That Are Sure To Delight. He Is Also Known For His Commitment To Quality And Attention To Detail, Ensuring That His Dishes Are Always Cooked To Perfection. Tim Is A Great Chef Who Knows How To Make Every Dish A Tasty And Entertaining Experience.</p>
        </div>
        <div className={styles.chefdiv}>
          <img src={Chef3} className={styles.chefimg}/>
          <p>Lilly Is An Acclaimed Chef Who Is Renowned For Her Culinary Creativity And Excellence. She Is An Expert In Crafting Innovative Dishes Using Fresh, Seasonal Ingredients, And Is Passionate About Creating Dishes That Are Both Aesthetically Pleasing And Full Of Flavor. With Her Eye For Detail And Commitment To Excellence, Lilly Is Considered One Of The Best Chefs In The World And Is Known For Consistently Producing High-Quality Dishes That Excite The Senses.</p>
        </div>
      </div>
    </div>
    <div className={styles.chef_m}>
      <h2>OUR MASTER CHEFS</h2>
      <div className={styles.chefgrp_m}>
        <div className={styles.chefdiv_m}>
          <img src={Chef1} className={styles.chefimg_m}/>
          <p>Sara Is An Experienced And Highly Skilled Chef Who Specializes In Crafting Innovative, Flavorful Dishes Using Fresh, Seasonal Ingredients. She Has A Keen Eye For Detail And Is Committed To Producing Dishes That Are Of The Highest Quality. Sara Is Also Adept At Managing A Kitchen And Working With A Team. With Her Creative Flair And Commitment To Excellence, Sara Is An Excellent Chef Who Consistently Produces Delicious Dishes.</p>
        </div>
        
        <div className={styles.chefdiv_m}>
          <img src={Chef2} className={styles.chefimg_m}/>
          <p>Tim Is A Chef Who Is Known For His Unique Approach To Cooking. He Often Adds A Touch Of Humour To His Dishes, Using Unusual Ingredients And Creative Presentation Methods To Create Dishes That Are Sure To Delight. He Is Also Known For His Commitment To Quality And Attention To Detail, Ensuring That His Dishes Are Always Cooked To Perfection. Tim Is A Great Chef Who Knows How To Make Every Dish A Tasty And Entertaining Experience.</p>
        </div>
        <div className={styles.chefdiv_m}>
          <img src={Chef3} className={styles.chefimg_m}/>
          <p>Lilly Is An Acclaimed Chef Who Is Renowned For Her Culinary Creativity And Excellence. She Is An Expert In Crafting Innovative Dishes Using Fresh, Seasonal Ingredients, And Is Passionate About Creating Dishes That Are Both Aesthetically Pleasing And Full Of Flavor. With Her Eye For Detail And Commitment To Excellence, Lilly Is Considered One Of The Best Chefs In The World And Is Known For Consistently Producing High-Quality Dishes That Excite The Senses.</p>
        </div>
      </div>
    </div>
    <div className={styles.parallex2}>
    </div>
    <div className={styles.feed}>
      <h1>Your Feedback is Welcomed</h1>
      <div className={styles.feedmaindiv}>
        <div className={styles.feedimg}>
          <img src={FeedBg} className='' />
        </div>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' placeholder='Enter Your Name'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' placeholder='Enter Your Email'/>
        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input id='subject' placeholder='Enter Your Subject'/>
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Enter Your Message' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Home