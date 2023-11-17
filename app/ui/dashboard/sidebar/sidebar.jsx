import React from 'react';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink';
import style from './sidebar.module.css'
import Image from 'next/image';

const SidebarPage = () => {
    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />
                },

            ]
        },
        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />
                },
                {
                    title: "Reports",
                    path: "/dashboard/reports",
                    icon: <MdAnalytics />
                },
                {
                    title: "Terms",
                    path: "/dashboard/terms",
                    icon: <MdPeople />
                }
            ]
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "dashboard/settings",
                    icon: <MdOutlineSettings />

                },
                {
                    title: "Help",
                    path: "dashboard/help",
                    icon: <MdHelpCenter />

                }
            ]
        },


    ]
    return (
        <div className={style.container}>
            <div className={style.user}>
                <Image className={style.userImg} src="/noavatar.png" alt="" width='50' height='50' />
                <div className={style.userDetails}>
                    <span className={style.userName}>nijam_420</span>
                    <span className={style.userTitle}>Administrator</span>
                </div>

            </div>
            <ul className={style.list}>
                {
                    menuItems.map((cat) => (
                        <li key={cat.title}>
                            <span className={style.cat}>{cat.title}</span>
                            {
                                cat?.list?.map((item) => (
                                    <MenuLink key={item.title} item={item} />
                                ))
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SidebarPage;