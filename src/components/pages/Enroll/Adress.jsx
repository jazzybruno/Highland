import React from 'react';
import './Enroll-1.css'
import Heading from "../../ui/Enroll/Heading";
import Level from '../../ui/Enroll/Levels';
import Address from '../../ui/Enroll/Address';

function Adress() {
    return (
        <div>

           <div className="main-container-enroll">
            {/* the upper part start */}
            <div className="main-container-enroll-upper-part">
               < Heading />
            </div>
            {/* the upper part end */}

            {/* the lower part start */}
            <div className="main-container-enroll-lower-part">
                {/* the lower left part start  */}
                <div className="main-container-enroll-lower-left-part">
                       <Level />
                </div>
                {/* the lower left part end  */}



                  {/* the lower right part start  */}
                  
                  <div className="main-container-enroll-lower-right-part">  
                     <Address />
                    </div>
                    {/* the lower right part end  */}
            </div>
            {/* the lower part end */}
           </div>

        </div>
    )
}

export default Adress;