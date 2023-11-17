
import SidebarPage from '../ui/dashboard/sidebar/sidebar';
import NavbarPage from '../ui/dashboard/navbar/navbar';
import style from '../ui/dashboard/dashboard.module.css'
const LayoutPage = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <SidebarPage/>
            </div>
            <div className={style.contain}>
                <NavbarPage/>
                {
                    children
                }
            </div>
        </div>
    );
};

export default LayoutPage;