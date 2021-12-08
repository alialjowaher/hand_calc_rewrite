import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import db from '../db'


const Header = () => {


    function clearDB(e) {
        e.preventDefault();
        db.jawlatStore.clear();
    }

    return (
        <div className="bg-primary text-white p-3">
            <div className="row">
                <div className="col-2">
                    <Button className="btn btn-primary text-white rounded border"><FontAwesomeIcon icon={faRedo} onClick={clearDB} /></Button>
                </div>
                <div className="col-8">
                    <h2 className="text-center pt-1">حاسبة الهاند</h2>
                </div>
            </div>
        </div>
    )


}

export default Header