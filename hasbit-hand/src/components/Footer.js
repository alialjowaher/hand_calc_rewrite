import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="bg-primary text-white p-2 rounded fixed-bottom">
            <div className="row text-center justify-content-between">
                <div className="col btn btn-primary p-2"><FontAwesomeIcon icon={faList} /></div>
                <div className="col btn btn-primary p-2"><FontAwesomeIcon icon={faPlus} /></div>
                <div className="col btn btn-primary p-2"><FontAwesomeIcon icon={faHome} /></div>
                </div>           
        </div>
    )


}

export default Footer