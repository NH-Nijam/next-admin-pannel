import React from 'react';
import style from './rightbar.module.css'
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
const Rightbar = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={style.bg}/>
                </div>
                <div className={style.texts}>
                    <span className={style.notifiaction}>&#128293; Available Now</span>
                    <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={style.subtitle}>Takes 4 minutes to learn</span>
                    <p className={style.details}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ratione deleniti rerum culpa adipisci consequuntur labore alias sit .
                    </p>
                    <button className={style.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.texts}>
                    <span className={style.notifiaction}>&#128293; Available Now</span>
                    <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={style.subtitle}>Takes 4 minutes to learn</span>
                    <p className={style.details}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ratione deleniti rerum culpa adipisci consequuntur labore alias sit .
                    </p>
                    <button className={style.button}>
                        <MdReadMore/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;