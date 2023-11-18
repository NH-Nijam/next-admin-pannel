'use client'
import { usePathname } from 'next/navigation';
import style from './navbar.module.css'
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch
} from 'react-icons/md'
const NavbarPage = () => {
    const pathname =usePathname()
    return (
        <div className={style.container}>
            <div className={style.title}>{pathname.split("/").pop()}</div>
            <div className={style.menu}>
                <div className={style.search}>
                    <MdSearch/>
                    <input type="text"  placeholder='Search...'  className={style.input}/>
                </div>
                <div className={style.icons}>
                    <MdOutlineChat Size={20}/>
                    <MdNotifications Size={20}/>
                    <MdPublic Size={20}/>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;