import React from 'react';
import './home.css';

import Navbar from '../components/navbar';
import Headshot from '../images/Aayush_Agnihotri_Headshot.jpeg';

function Home() {
    return (
        <>
            <Navbar navLinks={false} />

            <div className='splash-container'>
                <div className='headshot-container'>
                    <img src={Headshot} alt='MusicMaster' className='headshot' />
                </div>
                <div className='desc-container'>
                    <h1 className='splash-title'>Hey, I'm Aayush.</h1>
                    <p className='splash-desc'>I am currently a student at <span className='b'>Cornell University</span>
                    , majoring in <span className='b'>Computer Science</span> in the <a href='https://as.cornell.edu' target="_blank" rel="noopener noreferrer">College of Arts and Sciences</a> with a minor in
                    <span className='b'> Business</span>. I have experience in <span className='b'>software engineering</span>, primarily in <span className='b'>web and full stack development</span>.</p>
                    <p className='splash-desc'>I aim to leverage technology and data to build useful and innovative products for people.</p>
                </div>

                <div className='links'>
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

            </div>

            
        </>
    )
}

export default Home;