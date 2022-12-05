import React from 'react'
import logo_inshorts from '../assets/logo_inshorts.png'
import styles from '../css/NavBar.module.css'
import SideBar from './SideBar'

function NavBar({setCategories}) {
  return (
    <header className={styles.navbar}>
      <div className="sideBar">
        <SideBar setCategories={setCategories}/>
      </div>

      <div>
        <img src={logo_inshorts} alt="Nav Logo" />
      </div>


    </header>
  )
}

export default NavBar