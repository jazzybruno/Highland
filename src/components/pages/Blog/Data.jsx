import axios from 'axios';
import React, { useEffect } from 'react'
import data from '../Admission/Levels';

function FetchBlogApi() {

    const api = axios.create({
        baseURL:"https://highland-backend.herokuapp.com"
    })

    const apiGet = () => {
       api.get('/post' , { headers:{
        "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMTE5ZDMyMjY0YzdjYTNjODBhNzVmIn0sImlhdCI6MTY2MTE1OTU0N30.aLBhpBofi7_XctaYK7OMey9GgRQQ95A4iVssKEtmP9c"
       }})
       .then((res)=>{
          console.log(res);
       })

       .catch((err)=>{
        console.log(err);
       })
    };

    useEffect(() => {
           
    }, [])

    return (
        <div>
            <button onClick={apiGet}>Fetch API</button>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div>
                {data.map((item) => (
                    <h2>{item.title}</h2>
                ))}
            </div>
        </div>
    )

}

export default FetchBlogApi;