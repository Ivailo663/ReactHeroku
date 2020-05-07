import React from 'react'
import s from './NavItems.css'

const NavItems = (props) => {
    return (
        <ul className={s.navItems}>
            {props.children}
        </ul>
    )
}

export default NavItems
