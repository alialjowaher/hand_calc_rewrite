import { React, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Container, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import AddJawlah from './AddJawlah'
import db from '../db'
import { useLiveQuery } from 'dexie-react-hooks';


const Content = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const jawalats = useLiveQuery(() => db.jawlatStore.toArray());

    const lanaTotal = useLiveQuery(() => db.jawlatStore.toArray(function (result) {
        const count = result.reduce((counter, { winner_team, losser_team, winner_value, losser_value }) =>
            winner_team === "lana" || losser_team === "lana" ? (counter += winner_value) : (counter += losser_value), 0);
        return String(count);
    }));

    const lahomTotal = useLiveQuery(() => db.jawlatStore.toArray(function (result) {
        const count = result.reduce((counter, { winner_team, losser_team, winner_value, losser_value }) =>
            winner_team === "lahom" || losser_team === "lahom" ? (counter += winner_value) : (counter += losser_value), 0);
        return String(count);

    }));

    const farq = Math.abs(Math.abs(lanaTotal) - Math.abs(lahomTotal)).toString()
    const allJawlatCount = useLiveQuery(() => db.jawlatStore.count());
    const jawaltCount = useLiveQuery(() => db.jawlatStore.where('isTasjilah').equals('false').count());
    const progresBarVal = (jawaltCount / 7 * 100)

    return (
        <Container fluid className="overflow-hidden">
            <AddJawlah
                show={show}
                onHide={handleClose}
                backdrop=""
                keyboard={false}
            />
            <div className="row p-3 pt-1 card shadow m-2 rounded">
                <div className="col-12">
                    <div className="row d-flex justify-content-between text-center mb-2 pt-2">

                        <div className="col-4 h3">لـهم</div>
                        <div className="col-4 text-danger h3 font-weight-bolder">الفرق</div>
                        <div className="col-4 h3">لـنا</div>

                    </div>
                    <div className="row d-flex justify-content-between text-center">
                        <div className="col-4 h4">{lahomTotal}</div>
                        <div className="col-4 h4 text-danger">{farq}</div>
                        <div className="col-4 h4">{lanaTotal}</div>
                    </div>
                </div>
            </div>
            <div className="row p-3 card shadow p-4 m-2 rounded">
                <div className="col-12">
                    <div className="row d-flex justify-content-between text-center mb-3">
                        <div className="col h4">مجموع الجولات</div>
                        <div className="col h4 pt-3">الجولة الحالية</div>
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


            <div className="row card shadow m-2 rounded">
                <div className="col-12 ps-4 pe-4">
                    <Table borderless responsive >
                        <thead>
                            <tr class="text-center">
                                <th className="bold  text-secondary">لهـم</th>
                                <th className="bold  text-secondary">لنـا</th>

                            </tr>
                        </thead>
                        <tbody>
                            {jawalats?.map(jawlah => {
                                return (
                                    <tr className="text-center border-1" key={jawlah.No}>

                                        {jawlah.winner_team === 'lahom' ? <td key={jawlah.No}>{jawlah.winner_value}</td> : <td>{jawlah.losser_value}</td>}

                                        {jawlah.winner_team === 'lana' ? <td key={jawlah.No}>{jawlah.winner_value}</td> : <td>{jawlah.losser_value}</td>}

                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
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


    // list all round below  
    // delete last round

}

export default Content