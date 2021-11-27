import { React, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Form from 'react-bootstrap/Form'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import { ToggleButton, Form } from 'react-bootstrap'
import db from '../db'
const AddJawlah = (props) => {

  const [winnerTeamVal, setWinnerTeamVal] = useState("");
  const [winTypeVal, setwinTypeVal] = useState("");
  const [subWinTypeVal, setsubWinTypeVal] = useState("");
  const [nazilCountVal, setnazilCountVal] = useState(0);
  const [nazilTotalVal, setnazilTotalVal] = useState(0)
  const [tasjilahTypeVal, settasjilahTypeVal] = useState("");
  const winnerTeam = [
    { name: 'لهم', value: 'lahom' },
    { name: 'لنا', value: 'lana' },

  ];

  const winType = [
    { name: 'تسجيلة', value: 'tasjilah' },
    { name: 'دبـل', value: 'dabal' },
    { name: 'خلوص', value: 'khlos' },

  ];

  const subWinType = [
    { name: 'غير صافي', value: 'NotSafi' },
    { name: 'صافي', value: 'Safi' },

  ];

  const nazilCount = [
    { name: 'ثلاثة', value: 3 },
    { name: 'اثنان', value: 2 },
    { name: 'واحد', value: 1 },
  ];

  const tasjilahType = [
    { name: 'دبـل', value: 'Dabal' },
    { name: 'خلوص', value: 'Khlos' },
  ];

  function subWinSelection() {
    if (winTypeVal !== 'tasjilah') {

      return (
        <div className="card rounded border-0 p-2">
          <ButtonGroup aria-label="Basic example">
            {subWinType.map((subWin, idx) => (
              <ToggleButton
                key={idx}
                id={`subWin-${idx}`}
                type="radio"
                variant={'outline-secondary'}
                name="subWin"
                value={subWin.value}
                checked={subWinTypeVal === subWin.value}
                onChange={(e) => setsubWinTypeVal(e.currentTarget.value)}
                className="m-1"
              >
                {subWin.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      )
    } else {
      return (
        <div className="card rounded border-0 p-2">
          <ButtonGroup aria-label="Basic example">
            {tasjilahType.map((tasjType, idx) => (
              <ToggleButton
                key={idx}
                id={`tasjType-${idx}`}
                type="radio"
                variant={'outline-secondary'}
                name="tasjType"
                value={tasjType.value}
                checked={tasjilahTypeVal === tasjType.value}
                onChange={(e) => settasjilahTypeVal(e.currentTarget.value)}
                className="m-1"
              >
                {tasjType.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      )
    }
  };

  function nazilValues() {
    if (subWinTypeVal === 'NotSafi') {
      return (
        <div>
          <div className="card rounded border-0 pt-2 pb-2 text-center justify-content-center">
            <div className="h4 text-center pb-2"> مجموع النازلين</div>
            <div className="row">
              <div className="col-8 offset-2">
                <Form.Control className="" type="number" placeholder="" max="999" onChange={e => setnazilTotalVal(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="card rounded border-0 p-2 text-center" >
            <div className="h4 text-center pb-2"> عدد النازلين</div>
            <ButtonGroup aria-label="Basic example">
              {nazilCount.map((nCount, idx) => (
                <ToggleButton
                  key={idx}
                  id={`nCount-${idx}`}
                  type="radio"
                  variant={'outline-secondary'}
                  name="nCount"
                  value={nCount.value}
                  checked={nazilCountVal === nCount.value}
                  onChange={(e) => setnazilCountVal(e.currentTarget.value)}
                  className="m-1"
                >
                  {nCount.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>


        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }

  const handleSubmit = (evt) => {
    const winValues = [
      { winType: 'khlosSafi', winner_team: '', losser_team: '', winner_value: -30, losser_value: 300, nazil_count: 0, nazil_total: 0, isTasjilah: 'false' },
      { winType: 'dabalSafi', winner_team: '', losser_team: '', winner_value: -60, losser_value: 600, nazil_count: 0, nazil_total: 0, isTasjilah: 'false' },
      { winType: 'khlosNotSafi', winner_team: '', losser_team: '', winner_value: -30, losser_value: 0, nazil_count: 0, nazil_total: 0, isTasjilah: 'false' },
      { winType: 'dabalNotSafi', winner_team: '', losser_team: '', winner_value: -60, losser_value: 0, nazil_count: 0, nazil_total: 0, isTasjilah: 'false' },
      { winType: 'tasjilahKhlos', winner_team: '', losser_team: '', winner_value: 0, losser_value: 600, nazil_count: 0, nazil_total: 0, isTasjilah: 'true' },
      { winType: 'tasjilahDabal', winner_team: '', losser_team: '', winner_value: 0, losser_value: 300, nazil_count: 0, nazil_total: 0, isTasjilah: 'true' },

    ]

    const nazil_Values = [
      { nazil: 1, subTotal: 200 },
      { nazil: 2, subTotal: 100 },
      { nazil: 3, subTotal: 0 },

    ]


    let finalWinType = '';
    if (winTypeVal === 'tasjilah') {
      finalWinType = winTypeVal.concat(tasjilahTypeVal);
    } else {
      finalWinType = winTypeVal.concat(subWinTypeVal);
    }

    const jawlahResult = winValues.filter((v) => v.winType === finalWinType);
    jawlahResult[0].winner_team = winnerTeamVal === "lana" ? "lana" : "lahom";
    jawlahResult[0].losser_team = winnerTeamVal === "lana" ? "lahom" : "lana";
    jawlahResult[0].nazil_count = nazilCountVal;
    jawlahResult[0].nazil_total = nazilTotalVal;

    if (jawlahResult[0].nazil_count !== 0) {
      const nazilFilter = nazil_Values.filter((v) => v.nazil === parseInt(nazilCountVal));
      switch (jawlahResult[0].winType) {
        case "khlosNotSafi":
          jawlahResult[0].losser_value = (parseInt(nazilFilter[0].subTotal) + parseInt(nazilTotalVal));
          break;
        case 'dabalNotSafi':
          jawlahResult[0].losser_value = (parseInt(nazilFilter[0].subTotal) * 2 + parseInt(nazilTotalVal) * 2);
          break;
        default:
          break;
      }
    };


    async function saveJwalah() {
      try {
        await db.jawlatStore.add({
          winType: finalWinType,
          winner_team: jawlahResult[0].winner_team,
          losser_Team: jawlahResult[0].losser_team,
          winner_value: jawlahResult[0].winner_value,
          losser_value: jawlahResult[0].losser_value,
          nazil_count: jawlahResult[0].nazil_count,
          nazil_total: jawlahResult[0].nazil_total,
          isTasjilah: jawlahResult[0].isTasjilah

        })
      } catch (error) {
        console.log('failed to add');
      }
    }

    function resetInputs() {

      setWinnerTeamVal('');
      setwinTypeVal('');
      setsubWinTypeVal('');
      setnazilCountVal(0);
      setnazilTotalVal(0);
      settasjilahTypeVal('');

    };


    evt.preventDefault();
    saveJwalah();
    resetInputs();
    props.onHide();

    // console.log(jawlahResult);
  }


  return (
    <Modal className=""
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center" id="contained-modal-title-vcenter">
          <div className="row text-center ms-5 ps-5">

            اضافة جولة

          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="text-center pt-3">

          <div className="card rounded border-0">
            <div className="h4 text-center"> اختر الفريق الفائز</div>

            <ButtonGroup aria-label="Basic example">
              {winnerTeam.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-primary'}
                  name="radio"
                  value={radio.value}
                  checked={winnerTeamVal === radio.value}
                  onChange={(e) => setWinnerTeamVal(e.currentTarget.value)}
                  className="m-1"
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>

          <div className="card rounded border-0 pt-2 pb-2">
            <div className="h4 text-center"> اختر نوع الفوز</div>
            <ButtonGroup aria-label="Basic example">
              {winType.map((win, idx) => (
                <ToggleButton
                  key={idx}
                  id={`win-${idx}`}
                  type="radio"
                  variant={'outline-primary'}
                  name="win"
                  value={win.value}
                  checked={winTypeVal === win.value}
                  onChange={(e) => setwinTypeVal(e.currentTarget.value)}
                  className="m-1"
                >
                  {win.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>

          {subWinSelection()}

          {nazilValues()}

          <Button className="btn btn-lg btn-primary p-2 ps-5 pe-5" onClick={handleSubmit} type="submit">اضافة</Button>
        </Form>

      </Modal.Body>
      {/* <Modal.Footer className="justify-content-center">
            
        </Modal.Footer> */}

    </Modal>
  );

}

export default AddJawlah