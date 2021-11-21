import React from 'react'
import {ProgressBar} from 'react-bootstrap'
const Content = () => {
    const progresBarVal = (2/7 * 100)
    return (
        <div className="content fluid">
            <div className="row p-4 card shadow m-3 rounded">
            <div className="col-12 ">
                <div className="row d-flex justify-content-between text-center mb-3">
                    
                    <div className="col-4 h3">لـهم</div>
                    <div className="col-4 text-danger h3 font-weight-bolder">الفرق</div>
                    <div className="col-4 h3">لـنا</div>
                    
                </div>
                <div className="row d-flex justify-content-between text-center">
                    <div className="col-4 h4">360</div>
                    <div className="col-4 h4 text-danger">1200</div>
                    <div className="col-4 h4">720</div>
                </div>
                </div>         
            </div>
            <div className="row p-3 card shadow p-4 m-3 rounded">
            <div className="col-12">
                <div className="row d-flex justify-content-between text-center mb-3">
                    <div className="col h4">مجموع الجولات</div>
                    <div className="col h4 pt-3">الجولة الحالية</div>
                </div>
                <div className="row d-flex justify-content-between text-center">
                    <div className="col h4">1</div>
                    <div className="col h4">1</div>
                </div>
                </div>  
                <div className="row m-0 pt-3 p-0">
                <ProgressBar className="m-0 p-0" dir="RTL" now={progresBarVal} />
                </div>
            </div>
        </div>
    )


}

export default Content