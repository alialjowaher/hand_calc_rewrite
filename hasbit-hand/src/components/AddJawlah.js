import {React, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Form from 'react-bootstrap/Form'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import {ToggleButton, Form } from 'react-bootstrap'

const AddJawlah = (props) => {

  const [winnerTeamVal, setWinnerTeamVal] = useState("");
  const [winTypeVal, setwinTypeVal] = useState("");
  const [subWinTypeVal, setsubWinTypeVal] = useState("");
  const [nazilCountVal, setnazilCountVal] = useState(0);

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
    { name: 'غير صافي', value: 'NotSafi'},
    { name: 'صافي', value: 'Safi'},
  ];

  const nazilCount = [
    { name: 'ثلاثة', value: 3 },
    { name: 'اثنان', value: 2 },
    { name: 'واحد', value: 1 },
  ]


  function subWinSelection() {
    if (winTypeVal !== 'tasjilah'){

    return(
    <div className="card rounded border-0 p-2">
    <ButtonGroup  aria-label="Basic example">
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
    )} else {
      return 
      (
          <div></div>
      )
    }
  };

  // const handleSubmit = (evt) => {
  //   // evt.preventDefault();
  //   console.log(nazilCountVal);
  // }  
  
  
    return (
        <Modal  className="" 
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
          
          <ButtonGroup  aria-label="Basic example">
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
          <ButtonGroup  aria-label="Basic example">
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
              
   
        

          <div className="card rounded border-0 p-2 text-center" >
          <div className="h4 text-center pb-2"> عدد النازلين</div>
          <ButtonGroup  aria-label="Basic example">
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
          <div className="card rounded border-0 pt-2 pb-2 text-center justify-content-center">
          
          <div className="h4 text-center pb-2"> مجموع النازلين</div>
          
          <div className="row">
            <div className="col-8 offset-2">
          <Form.Control className="" type="number" placeholder="" max="999" />

            </div>
            </div>
          </div>
          <Button className="btn btn-lg btn-primary p-2 ps-5 pe-5" onClick={props.onHide} type="submit">اضافة</Button>
          
          </Form>

        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            
        </Modal.Footer>
      </Modal>
    );

}

export default AddJawlah