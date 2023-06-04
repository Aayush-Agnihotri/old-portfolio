import React from 'react';
import './projects.css';
import MusicMaster from '../images/MusicMaster.png';


function Projects() {

    return (
        <>
            <div className='header'>
                <h1 className='title'>My Projects</h1>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='image-container'>
                        <img src={MusicMaster} alt='Screenshot' className='img' />
                    </div>
                    <div className='text-container'>
                        <h2 className='card-title'>MusicMaster
                            <span className='card-date'>January 2023 - April 2023</span>
                        </h2>
                        <h3 className='card-subtitle'>Tech stack</h3>
                        <p className='card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.</p>
                    </div>
                    <div className='btn-container'>
                        <a style={{"all":"unset"}} href="https://github.com/Aayush-Agnihotri/musicmaster" target="_blank" rel="noopener noreferrer">
                            <button className='btn'>
                                <span style={{"fontWeight": "bold", "verticalAlign": "middle"}}>GitHub </span>
                                <img style={{"verticalAlign": "middle"}} width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/github.png" alt="github"/>
                                </button>
                        </a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Projects;