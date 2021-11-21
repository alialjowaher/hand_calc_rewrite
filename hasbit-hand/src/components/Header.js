import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="bg-primary text-white p-2">
            <div className="row">
             <div className="col-1">
            <div className="btn btn-primary text-white rounded pl-1 pr-1 border" ><FontAwesomeIcon icon={faRedo} /></div>
                 </div>
                 <div className="col">
                     
            <h2 className="text-center pe-4">حاسبة الهاند</h2>
                     </div>   
            </div>

        </div>
    )


}

export default Header