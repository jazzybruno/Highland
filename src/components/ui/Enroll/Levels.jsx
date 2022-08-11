import React from 'react';
import './Levels.css';
import connector from '../../images/Enroll/line.png'
import {Link , Route , Routes} from 'react-router-dom';

function Level() {
    return (
        <div className='all-levels-container'>
            <div className='steps'>
                <div className='step-container-1'>
                    <Link to='/enroll' className="step-number">1</Link>
                </div>
                <div className='step-text'>
                    <p>Choose Level</p>
                </div>
            </div>
            <img src={connector} alt="connector" className='connector' />
            <div className='steps'>
                <div className='step-container-2'>
                    <Link to='/enrollstudent' className="step-number">2</Link>
                </div>
                <div className='step-text'>
                    <p>Choose Level</p>
                </div>
            </div>
            <img src={connector} alt="connector" className='connector' />
            <div className='steps'>
                <div className='step-container-3'>
                    <Link to='/' className="step-number">3</Link>
                </div>
                <div className='step-text'>
                    <p>Choose Level</p>
                </div>
            </div>
        </div>
    )
}

export default Level;