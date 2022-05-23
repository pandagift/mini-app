import React from "react";
import logoImage from '../../assest/img/logo.svg';
import {menu} from "./menu";
import styles from '../Header/Header.module.scss';


const Header = () => {
    return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logoImage} alt="" height='35' />
        </div>
        <div className={styles.wrapper}>
<ul className={styles.menu}>
    {menu.map((item,idx)=>(
    <li key={`menu item ${idx}`}><a href={item.link}>{item.title}</a></li>
    ))}
</ul>
<div className={styles.buttons}>
<button className={styles.login}>Login</button>
<button className={styles.signup}>Sign-up</button>
</div>
        </div>
    </div>
    )
}
export default Header;