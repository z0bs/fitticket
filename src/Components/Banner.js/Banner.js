import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
    return (


        <div className={styles.banner}>

            <div className={styles.logoContainer}>
                <img src='img/fitticket1.png' alt='' className={styles.logo} />
            </div>


            <div className={styles.bannerImage}>
                <img src='img/bannerImage.jpg' alt=' ' />
            </div>

            <div className={styles.bannerText}>
                <p>Fun that Fits</p>

                <ul>
                    <li>Tickets</li>
                    <li>Blockbusters</li>
                    <li>Entertainment</li>
                </ul>

                <ul>
                    <li>Pop Corn</li>
                    <li>Fun</li>
                    <li>Coke</li>
                </ul>
            </div>

            <div className={styles.fitticket}>
                <h1>Fitticket</h1>
                <p>Nigeria's #1 leading movie ticket purchasing website providing movie enthusiasts with a hassle-free platform to conveniently purchase tickets.</p>
            </div>
        </div>
    )
}

export default Banner