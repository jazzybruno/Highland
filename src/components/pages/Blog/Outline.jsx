import React from 'react';
// import Slider from '../../../assets/Slider';
import './Blog.css'
import {Link} from 'react-router-dom';
import Service1 from '../../images/Admission/nursery.jpg';

// photo = photo
// label = label
// description = description

function Outline(props) {
    return (

        <div className='main-post-container'>
           <div className="main-post-container-img">
            Post Number : {props.index}
            <img src={props.photo} alt="this is the post part" />
           </div>
           <div className="main-post-container-text">
            <div className="main-post-contanier-text-title">
                {props.label}
            </div>
            <div className="main-post-container-text-desc">
                {props.description}
            </div>
           </div>
        </div>
    )
}

export default Outline;