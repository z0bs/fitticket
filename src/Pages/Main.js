import React from 'react'
import styles from './main.module.css'
import Banner from '../Components/Banner.js/Banner'
import { SectionLeft, SectionRight } from '../Components/Sections/Section'



const Main = () => {
    return (
        <>
            <Banner />

            <main className={styles.container}>
                <SectionRight
                    heading='Book Movies'
                    text='Going on a movie date has never been so covenient. Booking Movies on our website gives to you extra time to have fun'
                    src='img/img-02.png'
                />



                <SectionLeft
                    heading='Book Movies'
                    text='Hassle free and most convenient way to book Your favorite Movies. Movie dates just became better!'
                    src='img/img-03.png'
                />

                <div className={styles.section}>
                    <img src='img/img-06.png' alt='' className='' />
                    <p>Set Movie Dates Like A Pro!</p>
                </div>

            </main>

        </>
    )
}



export default Main