import React from 'react'
import styles from './section.module.css'
import classNames from 'classnames'


const sectionNames = classNames(styles.section, styles.sectionleft)

export const SectionRight = (props) => {
  return (
    <section>
      <div className={styles.sectionText}>
        <h2>{props.heading}</h2>
        <p> {props.text}</p>
      </div>
      <img src={props.src} alt='' />
    </section>
  )
}

export const SectionLeft = (props) => {
  return (
    <section className={sectionNames}>
      <div className={styles.sectionText}>
      <h2>{props.heading}</h2>
        <p> {props.text}</p>
        <img src='img/img-04.png' alt='' className=''/>
      </div>
        <img src={props.src} alt='' />
        
    </section >
  )
}
