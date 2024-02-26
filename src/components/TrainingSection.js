import React from 'react'
import './TrainingSection.css'
import {Link} from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const TrainingSection = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>Képzés</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia beatae, perferendis eligendi tempora temporibus dicta incidunt similique maxime ipsam tenetur porro cum iste. Fugit.</p>
            <Link to="/contact" className='btn'>Kapcsolat</Link>
        </div>

        <div className="right">
            <div className="image-container">
                <div className='image-stack top'>
                    <img src={Moon} alt="moon" className='img' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} alt="pod" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingSection