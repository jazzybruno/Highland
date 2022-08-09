import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const addressContent = [
  { label: "Eastern", value: 1 },
  { label: "Western", value: 2 },
  { label: "Northern", value: 3 },
  { label: "Southern", value: 4 },
];

function Address() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Select options={ addressContent } />
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className='row mt-4'>
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <button type="reset" className='btn btn-primary'>Back</button>
                </div>
                <div className="col-md-2">
                    <button type="submit" className='btn btn-primary'>Next</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
} 

export default Address;
