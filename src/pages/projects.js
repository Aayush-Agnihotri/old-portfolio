import React, { useState, useEffect } from 'react';
import './projects.css';
import Navbar from '../components/navbar';

import MusicMaster from '../images/MusicMaster.png';
import NJoy from '../images/NJoy.png';
import TownMate from '../images/TownMate.png';


function Projects() {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    	const updateDimension = () => {
      		setScreenSize(getCurrentDimension())
    	}
    	window.addEventListener('resize', updateDimension);

        if (screenSize.width < 500) {
            const dates = document.querySelectorAll('.card-date');
            for (var i = 0; i < dates.length; i++) {
                dates[i].style.display = 'none';
            }
        }

        if (screenSize.width < 600) {
            const cards = document.querySelectorAll('.card');
            const images = document.querySelectorAll('.img');
            for (var g = 0; g < cards.length; g++) {
                cards[g].style.width = `${screenSize.width * 0.8}px`;
                images[g].style.width = `${screenSize.width * 0.8}px`;
            }
        }     
        
    	return(() => {
        	window.removeEventListener('resize', updateDimension);
    	})
  	}, [screenSize.width])

    return (
        <>
            <Navbar navLinks={true} />

            <div className='header'>
                <h1 className='title'>Featured Projects</h1>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='image-container'>
                        <img src={MusicMaster} alt='MusicMaster' className='img' />
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

                <div className='card'>
                    <div className='image-container'>
                        <img className='img' src={NJoy} alt='NJoy' />
                    </div>
                    <div className='text-container'>
                        <h2 className='card-title'>NJoy
                            <span className='card-date'>January 2022 - March 2022</span>
                        </h2>
                        <h3 className='card-subtitle'>React, Firebase</h3>
                        <p className='card-desc'>NJoy is the go-to trip-advising app created for the Garden State, providing information about New Jersey's favorite places and activities. NJoy allows users to plan their next trip, read and add reviews about locations, get directions, and much more.</p>
                    </div>
                    <div className='btn-container'>
                        <a style={{"all":"unset"}} href="https://github.com/Aayush-Agnihotri/NJoy" target="_blank" rel="noopener noreferrer">
                            <button className='btn'>
                                <span style={{"fontWeight": "bold", "verticalAlign": "middle"}}>GitHub </span>
                                <img style={{"verticalAlign": "middle"}} width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/github.png" alt="github"/>
                            </button>
                        </a>
                    </div>
                </div>

                <div className='card' style={{"marginBottom": "3%"}}>
                    <div className='image-container'>
                        <img className='img' src={TownMate} alt='NJoy' />
                    </div>
                    <div className='text-container'>
                        <h2 className='card-title'>TownMate
                            <span className='card-date'>January 2021 - March 2021</span>
                        </h2>
                        <h3 className='card-subtitle'>Java, Airtable</h3>
                        <p className='card-desc'>TownMate is a cross-platform app that gives newcomers to a community information about restaurants, shopping malls, public transportation, and more. Awarded 3rd place for TSA National Software Development Competition.</p>
                    </div>
                    <div className='btn-container'>
                        <a style={{"all":"unset"}} href="https://github.com/Aayush-Agnihotri/TownMate" target="_blank" rel="noopener noreferrer">
                            <button className='btn'>
                                <span style={{"fontWeight": "bold", "verticalAlign": "middle"}}>GitHub </span>
                                <img style={{"verticalAlign": "middle"}} width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/github.png" alt="github"/>
                            </button>
                        </a>
                        <a style={{"all":"unset"}} href="https://tsaweb.org" target="_blank" rel="noopener noreferrer">
                            <button className='btn'>
                                <span style={{"fontWeight": "bold", "verticalAlign": "middle"}}>TSA </span>
                                <img style={{"verticalAlign": "middle"}} width="20" height="20" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-share-arrows-pack-tanah-basah-basic-outline-tanah-basah.png" alt="TSA Website"/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;