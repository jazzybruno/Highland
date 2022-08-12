import React from "react";
import './Fees.css';
import photo from '../../images/Admission/admit.jpg'


const Fees = (props) => {
return( <div className="fees-container">
     <div className="fees-container-img">
        <img src={props.photo} alt="" />
     </div>
     <div className="fees-container-line">
      <div className="fees-container-line-line"></div>
     </div>
     <div className="fees-container-level">
        <p>{props.level}</p>
        <h4>{props.desc}</h4>
     </div>

     <div className="fees-container-requiremenmts">
         <a  href="https://doc-14-98-docs.googleusercontent.com/docs/securesc/ajtoeghvhseq4rnk2lbhcdn6bl87ftvb/ups1h97orsftlrad99biv3rrold2ac1q/1660299150000/12155793190092915724/12155793190092915724/12EGgDgMp3rczQpRGlPHRzJVzS-yl47NJ?e=download&ax=AI9vYm68MzwmrR0d6nQ25f1TZHTRs_oyQdXOX5VgusXJjkRXG9aAUCkNlwcHveQpEiqXQQP1z9OwxX7czCTD0ULLbcrnErF-QAqeiSCmf5g1g5zTZpg_hVby-JKX8hSOw2faexwVmHOlSYxoC3fxwJt7uxPOMbPq8kCtDpcDChIl7rmmSiI0-rzDAGwx0Ef9mE4LmrOQj2MzzzqA32qc5hmrfVRVY7EpMEJHRNnni1XtDI2-G_qDHdekjVEoBS4ZDb1e5FrL9nTTpBpF_-0guGDbuQH2JBU_9OOnzhEbrPZgxdHZzYNvq7JlUe9jOMLANMEdCYn8BPszL0ZCCbcXHMV7Hqcr102pNQSRv_QqH52nXuaNfvONal0fUKjNQ6jSt_NbnG41Q2AI-lrDIqAdENROFXP8yWyv5l82_7hooqyxH7s1hwv7kK0fsnSUB_98khvJeRX6qGNK9GHJvkXw0HCoH6CUZlB4ICz1ZT2TwjZgiOwP6X5XBOsJq-OUYdOgoFYNLmSjK9njo4HUCB3qdyLA0zU-GuOLEDzVB_5xcQ6KT9IIcW1CwYaQ98_8oMq92GO6kELkRjQRH6nc5zKmyiUI6UOF09CRKfqi7idFPVqJwf5TOPSfnJPZkap-cnUQjfk9JeTXX4lN2Wsqya1_OCpYspfn7w6-Hij6kY142jXOP4U-klYrrLTdnnn2WUpfwD2_nNKwC0BkK1N-vKZf&uuid=2d11ee8e-6e40-48f8-9fe7-bdfbe11dd2fc&authuser=0&nonce=5945mnc25425c&user=12155793190092915724&hash=25n8lg422vlqqhnuaijpisecuris463q">Download Requirements</a>
         <a href="https://drive.google.com/file/d/12EGgDgMp3rczQpRGlPHRzJVzS-yl47NJ/view?usp=sharing" target="_blank">View in  PDF</a>
     </div>
</div> )
}

export default Fees;