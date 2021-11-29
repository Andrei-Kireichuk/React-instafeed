import React from "react";
import header from "./header.module.css"

const Header = () => {
    return (
        <div className={header.headerWrapper}>
        <div className={header.logo}>RICH <span style={{ fontSize: '1.5em'  }}>INSTA</span> FEED</div>
        <menu className={header.menu}>
        <ul className={header.menuBlock}>
          <li className={header.menuitem}>О сервисе</li>
          <li className={header.menuitem}>Сценарии</li>
          <li className={header.menuitem}>FAQ</li>
        </ul>
        <button className={header.regButton}>Регистрация</button>
        </menu>
      </div>
    )
}

export default Header;