import React from 'react';
// import Slider from '../../../assets/Slider';
import './Blog.css'
import {Link} from 'react-router-dom';
import Service1 from '../../images/Admission/nursery.jpg';


function Outline(props) {
    return (

        <div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                    </div>
                    <div className="col-md-6">
                        <div className="card-shadow">
                                <img src={props.photo} alt="services" className='blog-image img-fluid' />
                            <div className="card-body">
                                <h4 className='fw-bold'>{props.label}</h4>
                                <p>
                                 {props.description}
                                                                </p>
                                <div className="application-section-enroll">
                                    <a href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section> 
        </div>
    )
}

export default Outline;