import React from "react";




function ParentDetails () {
    return(
        <div>
            <section className="section">
                <div className="container">
                    <div className="">
                        <div className="">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row mt-4">
                                        <input type="text" className="form-control m-2" placeholder="Names" />
                                    </div>
                                    <div className="row mt-4">
                                        <input type="text" className="form-control m-2" placeholder="National ID" />
                                    </div>
                                    <div className="row mt-4">
                                        <input type="text" className="form-control m-2" placeholder="Phone" />
                                    </div>
                                    <div className="row mt-4">
                                        <input type="text" className="form-control m-2" placeholder="Email" />
                                    </div>
                                </div>
                                {/* <div className='row mt-4'>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <button type="reset" className='btn btn-primary'>Back</button>
                                    </div>
                                    <div className="col-md-4">
                                        <button type="submit" className='btn btn-primary'>Next</button>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ParentDetails;