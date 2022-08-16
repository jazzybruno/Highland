import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Levels.css';
import {Link} from 'react-router-dom';


const addressContent = [
  { label: "Eastern", value: 1 },
  { label: "Western", value: 2 },
  { label: "Northern", value: 3 },
  { label: "Southern", value: 4 },
];

const sectorContent = [
    { label: ""}
]

function Address() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } placeholder="Village" />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">

                    <Select options={ addressContent } placeholder="Cell" />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } placeholder="Sector" />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } placeholder="District" />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } placeholder="Province" />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className='row mt-4'>
                <div className="col-md-4"></div>
                <div className="col-md-3">
                   <Link to="/enrollper"> <button type="submit" className='select-back-btn'>Back</button></Link>
                </div>
                <div className="col-md-2">
                   <Link to="/enrollfa"> <button type="submit" className='select-next-btn'>Next</button></Link>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
} 

export default Address;
