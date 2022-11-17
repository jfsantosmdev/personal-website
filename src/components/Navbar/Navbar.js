import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [showNavList, setShowNavList] = useState(false)
    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul className='nav-list'>
                {projects.length ? (
                    <li className='nav-list-item'>
                        <a 
                            className='link link-nav'
                            href='#projects'
                            onClick={toggleNavList}
                        >
                            Projects
                        </a>
                    </li>
                ) : null }
                
                {skills.length ? (
                    <li className='nav-list-item'>
                        <a 
                            className='link link-nav' 
                            href='#skills'
                            onClick={toggleNavList}
                        >
                            Skills
                        </a>
                    </li>
                ) : null}
                
                {contact.email ? (
                    <li className='nav-list-item'>
                        <a 
                            className='link link-nav' 
                            href='#contact'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button 
                type='button'
                onClick={toggleTheme}
                className='btn btn-icon nav-theme'
                aria-label='toogle theme'
            >
                { themeName === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
            </button>

        </nav>
    )
}

export default Navbar