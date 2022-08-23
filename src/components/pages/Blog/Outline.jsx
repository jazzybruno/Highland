import React from 'react';
import './Blog.css'
import {Link} from 'react-router-dom';
import Service1 from '../../images/Admission/nursery.jpg';

function Outline() {
    return (
        <div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                    </div>
                    <div className="col-md-6">
                        <div className="card-shadow">
                                <img src={Service1} alt="services" className='blog-image img-fluid' />
                            <div className="card-body">
                                <h4 className='fw-bold'>Lorem ipsum</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo et nam quis dis sed sit diam vestibulum. Sagittis tempus neque urna, sit. Posuere pretium senectus iaculis in at tristique augue tristique. Netus elit at ultrices amet auctor blandit. Sed at volutpat blandit non facilisis et quis. Nulla velit imperdiet accumsan sit sit ipsum arcu dui. Lacus, sed volutpat at pretium. Morbi diam vestibulum enim, tellus sed. Ut tempor, elit proin cras ac eget tellus, ut. Viverra nunc bibendum ut risus nec hendrerit id.
                                </p>
                                <div className="application-section-enroll">
                                    <a href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-shadow">
                                <img src={Service1} alt="services" className='blog-image img-fluid' />
                            <div className="card-body">
                                <h4 className='fw-bold'>Lorem ipsum</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo et nam quis dis sed sit diam vestibulum. Sagittis tempus neque urna, sit. Posuere pretium senectus iaculis in at tristique augue tristique. Netus elit at ultrices amet auctor blandit. Sed at volutpat blandit non facilisis et quis. Nulla velit imperdiet accumsan sit sit ipsum arcu dui. Lacus, sed volutpat at pretium. Morbi diam vestibulum enim, tellus sed. Ut tempor, elit proin cras ac eget tellus, ut. Viverra nunc bibendum ut risus nec hendrerit id.
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