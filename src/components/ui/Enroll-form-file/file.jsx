import React from 'react'
import { useForm } from 'react-hook-form'
import './File.css'

function file() {
    const { register,handleSubmit } = useForm();
     const onChange = (e) => {
        const file = e.target.files[0];

     } ;
     const onSubmit = data => {
        const storageRef = app.storage().ref();
        const fileRef = storageREf.child(data.image[0].name);
        fileRef.put(data.image[0]).then(() => {
            console.log("Uploaded file");
        });
     }
     const [formData,setFormData] = React.useState(
       {
        year:"",
        class:"",
        preSchool:""
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
    }

  return (
    <div className='file-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className='file-header'>Student's Details</h3>

        <input
                type="text"
                placeholder="Year"
                onChange={handleChange}
                name="year"
                value={formData.year}
                className="file-inputs"
            />
            <br/>

            <br/>
            <input
                type="text"
                placeholder="Class"
                onChange={handleChange}
                name="class"
                value={formData.class}
                className="file-inputs"
            />

           <br/>

          <br/>
             <input
                type="text"
                placeholder="Previous School"
                onChange={handleChange}
                name="preSchool"
                value={formData.preSchool}
                className="file-inputs"
            />

            <br/>
            


            <p className='student-photo'>Student Photo</p>
            <div className="choose-file">
            <input required name ="image" type="file" onChange={onChange} />
            <button className='file-submit'>Submit</button>
            </div>
            <div className='file-buttons'>
            <button className="enroll-back">Back</button>
            <button className="enroll-next">Next</button>

            </div>

        </form>
    </div>
  )
}

export default file