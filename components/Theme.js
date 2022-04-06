import React, { useState } from 'react';

const Theme = () => {
    if (typeof window !== 'undefined') {
        const DarkModePreset = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const [isActive, setIsActive] = useState(false);

        function setMode(set, remove) {
            document.documentElement.setAttribute(set, 'true');
            document.documentElement.removeAttribute(remove, 'true');
            //document.body.classList.add(`${set}-theme`);
            //document.body.classList.remove(`${remove}-theme`);
            localStorage.theme = set;
        }

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && DarkModePreset)) {
            setMode('dark', 'light');
        } else {
            setMode('light', 'dark');
        }

        function toggleTheme() {
            setIsActive(!isActive)
            if (localStorage.theme === 'dark') {
                setMode('light', 'dark');
            } else {
                setMode('dark', 'light');
            }
        }

        return (
            <button
                onClick={toggleTheme}
                className='mode-wrapper'
                value={isActive ? 'skift til mørk bakgrunn' : 'skift til lys bakgrunn'}
                type='button'
                name='theme toggle'
            >
                <span className='float-bg' />
                <span className='light'>lys</span>
                <span className='dark'>mørk</span>
            </button>
        )
    } else return null;
}

export default Theme;