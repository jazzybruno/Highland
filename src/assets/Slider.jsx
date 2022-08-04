import { drawFaceExpressions } from 'face-api.js/build/commonjs/draw';
import React from 'react';
import Slide1 from '../components/images/Admission/slide2.jpg';
import Slide2 from '../components/images/Admission/slide4.jpg';
import Slide3 from '../components/images/Admission/slide3.jpg';
import Slide4 from '../components/images/Admission/slide4.jpg';

function Slider() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item-active">
                    <img src={Slide1} class="d-block w-100" alt={Slide1}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>Lorem bcbsdbibvdbvksb jsdvbuidw</p>
                     </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide2} class="d-block w-100" alt={Slide2}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>Lorem bcbsdbibvdbvksb jsdvbuidw</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide3} class="d-block w-100" alt={Slide3}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>Lorem bcbsdbibvdbvksb jsdvbuidw</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide2} class="d-block w-100" alt={Slide2}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>Lorem bcbsdbibvdbvksb jsdvbuidw</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide4} class="d-block w-100" alt={Slide4}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide</h5>
                        <p>Lorem bcbsdbibvdbvksb jsdvbuidw</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slider="">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slider="">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>    
    );
}

export default Slider; 