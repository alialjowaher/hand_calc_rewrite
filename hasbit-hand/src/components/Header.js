import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="bg-primary text-white p-3">
            <div className="row">
             <div className="col-1">
            <div className="btn btn-primary text-white rounded border"><FontAwesomeIcon icon={faRedo} /></div>
                 </div>
                 <div className="col">
            <h2 className="text-center pt-1 pe-4">حاسبة الهاند</h2>
                     </div>   
            </div>

        </div>
    )


}

export default Header