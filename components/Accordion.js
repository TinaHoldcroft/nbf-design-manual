import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <li
                className='accordion-title'
                onClick={() => setIsActive(!isActive)}
            >
                {isActive ?
                    <span className='accordion-btn'>&minus;</span>
                    :
                    <span className='accordion-btn'>+</span>
                }
                <span>{title}</span>
            </li>
            {isActive &&
                <ul className='accordion-content'>
                    {content}
                </ul>
            }
        </>
    );
};

export default Accordion;