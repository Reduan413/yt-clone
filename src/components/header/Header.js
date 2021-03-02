import React from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="border border-dark header">
            <FaBars className="header__menu" size={26} onClick={() => handleToggleSidebar()}/>
            <img
                src="https://www.freepnglogos.com/uploads/youtube-icon-logo-7.png"
                alt="logo"
                className="header__logo"
            />

            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png"
                    alt="avater"
                />
            </div>
        </div>
    )
}

export default Header
