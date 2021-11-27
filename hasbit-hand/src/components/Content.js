import { React, useState } from 'react'
import { ProgressBar, Container, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import AddJawlah from './AddJawlah'
import db from '../db'
import { useLiveQuery } from 'dexie-react-hooks';




const Content = () => {
    const progresBarVal = (2 / 7 * 100)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const jawlats = useLiveQuery(() => db.jawlatStore.toArray(function (result) {
        const count = result.reduce((counter, { winType }) =>
            winType === "dabalSafi" ? (counter += 1) : counter, 0);
        return count;
    }));


    let lanaTotal = jawlats;
    //lahomTotal
    //farq
    let allJawlatCount = useLiveQuery(() => db.jawlatStore.count());
    let jawaltCount = useLiveQuery(() => db.jawlatStore.where('isTasjilah').equals('false').count());

    return (
        <Container fluid className="overflow-hidden">
            <AddJawlah
                show={show}
                onHide={handleClose}
                backdrop=""
                keyboard={false}
            />
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
                        <div className="col-4 h4">{lanaTotal}</div>
                    </div>
                </div>
            </div>
            <div className="row p-3 card shadow p-4 m-3 rounded">
                <div className="col-12">
                    <div className="row d-flex justify-content-between text-center mb-3">
                        <div className="col h4">مجموع الجولات</div>
                        <div className="col h4 ">الجولة الحالية</div>
                    </div>
                    <div className="row d-flex justify-content-between text-center">
                        <div className="col h4">{allJawlatCount}</div>
                        <div className="col h4">{jawaltCount}</div>
                    </div>
                </div>
                <div className="row m-0 pt-3 p-0">
                    <ProgressBar className="m-0 p-0" dir="RTL" now={progresBarVal} />
                </div>
            </div>

            <div className="bg-white text-white rounded-top fixed-bottom icon-bar">
                <div className="row text-center justify-content-between pt-2 pb-2">
                    <div className="col btn btn-white"><FontAwesomeIcon icon={faList} /></div>
                    <div className="col-2 btn btn-primary rounded" onClick={handleShow}><FontAwesomeIcon icon={faPlus} /></div>
                    <div className="col btn btn-white"><FontAwesomeIcon icon={faHome} /></div>
                </div>
            </div>



        </Container>
    )


}

export default Content