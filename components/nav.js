import React from 'react'
import Accordion from './Accordion'
import { accordionData } from '../pages/api/AccordionData'
//import styles from '../styles/Logo.module.scss'

const Nav = () => {

    return (
        <nav className='navbar'>
            {/*<img className={`logo ${styles.logo}`} src='./logo_black.svg' alt='' />*/}
            <div>
                <ul className='accordion'>
                    {accordionData.map(({ title, content }) => (
                        <Accordion key={title} title={title} content={content} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;