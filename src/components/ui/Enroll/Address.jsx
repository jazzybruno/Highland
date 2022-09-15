import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Enroll-form-file/File.css'
import './Levels.css';
import {Link, useNavigate} from 'react-router-dom';


const addressContent = [
  { label: "Eastern", value: 1 },
  { label: "Western", value: 2 },
  { label: "Northern", value: 3 },
  { label: "Southern", value: 4 },
];

const sectorContent = [
    { label: ""}
]

function Address(props) {

    const [formData, setFormData] = React.useState(
        {
            
        province: "",
        district: "",
        sector: "",
        cell: "",
        village: ""
            
        } 
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        console.log(formData);
        console.log(props.currentData);
    }

     const navigate = useNavigate()
    const handleSubmit = () => {
     const data = props.currentData
     navigate("/enrollfa" , {
        state: {
            ...data,
            address : formData
        }
     })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {/* <Select options={ addressContent } placeholder="Village" /> */}
                    <input type="text" className='form-control' placeholder='Village'  onChange={handleChange}
                    name="village"
                    value={formData.village}/>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">

                    {/* <Select options={ addressContent } placeholder="Cell" /> */}
                    <input type="text" className='form-control' placeholder='cell'  onChange={handleChange}
                    name="cell"
                    value={formData.cell}/>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {/* <Select options={ addressContent } placeholder="Sector" /> */}
                    <input type="text" className='form-control' placeholder='Sector'  onChange={handleChange}
                    name="sector"
                    value={formData.sector}/>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {/* <Select options={ addressContent } placeholder="District" /> */}
                    <input type="text" className='form-control' placeholder='District'  onChange={handleChange}
                    name="district"
                    value={formData.district}/>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <input placeholder="Province" className='form-control' onChange={handleChange} name="province" value={formData.province} />
                </div>
                <div className="col-md-4"></div>
            </div>
            {/* <div className='address-nav-btns row mt-4'> */}
            <div className='file-buttons1 mt-4 '>
                <Link to="/enrollper"><button className="enroll-back">Back</button></Link>
                <button onClick={handleSubmit} className="enroll-next">Next</button>

            </div>
            {/* </div> */}
        </div>
    );
} 

export default Address;
