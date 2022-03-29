import React, { useState, useEffect } from 'react'
import Theme from './Theme'
import Accordion from './Accordion';
import { accordionData } from '../pages/api/AccordionData';

const Nav = () => {

    return (
        <nav className='navbar'>
            <Theme />
            <div>
                <ul className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <Accordion key={title} title={title} content={content} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;