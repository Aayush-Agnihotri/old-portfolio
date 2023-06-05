import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar({ navLinks }) {
    return (
      <>
        <div className='navbar'>
            <div className='logo'>
                <div>
                    <Link to='/'>
                        <img width="45" height="45" src="https://img.icons8.com/material-outlined/48/FFFFFF/font-style-formatting.png" alt="Logo"/>
                    </Link>
                </div>
                {!navLinks ?
                
                <div className='projects-link'>
                    <Link to='/projects' style={{'all': 'unset', "cursor":"pointer"}}>
                        <h3>Projects</h3>
                    </Link>
                </div>
                : <></>}
            </div>
            
            {navLinks ? 
            <div className='nav-links'>
                <div>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/resume.png" alt="Resume"/>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/aayush-agnihotri/' target="_blank" rel="noopener noreferrer">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="LinkedIn"/>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/Aayush-Agnihotri' target="_blank" rel="noopener noreferrer">
                        <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub"/>
                    </a>
                </div>
                <div>
                    <a href = "mailto:aa2328@cornell.edu">
                        <img width="30" height="30" src="https://img.icons8.com/material-rounded/48/FFFFFF/new-post.png" alt="Email"/>
                    </a>
                </div>
            </div>
            : <></>}

        </div>
      </>
    );
  }
  
  export default Navbar;