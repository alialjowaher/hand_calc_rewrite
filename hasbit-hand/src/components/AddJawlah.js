import {React, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
const AddJawlah = (props) => {

   
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
            <Button variant="light" className="m-1 active">لـهم</Button>
            <Button variant="light" className="m-1">لـنا</Button>
          </ButtonGroup>
          </div>
          
          <div className="card rounded border-0 pt-2 pb-2">
          <div className="h4 text-center"> اختر نوع الفوز</div>
          <ButtonGroup  aria-label="Basic example">
            <Button variant="light" className="m-1 active">تسجيلة</Button>
            <Button variant="light" className="m-1">دبـل</Button>
            <Button variant="light" className="m-1">خلوص</Button>
          </ButtonGroup>
          </div>

          <div className="card rounded border-0 p-2">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="غير صافي"
                  name="winnerTeam"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="صـافي"
                  name="winnerTeam"
                  type={type}
                  id={`inline-${type}-2`}
                />
              
              </div>
            ))}
          </div>
          <div className="card rounded border-0 p-2 text-center" >
          <div className="h4 text-center pb-2"> عدد النازلين</div>
          {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="3"
                  name="nazilCount"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2"
                  name="nazilCount"
                  type={type}
                  id={`inline-${type}-2`}
                />
                              <Form.Check
                  inline
                  label="1"
                  name="nazilCount"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

          </div>
          <div className="card rounded border-0 pt-2 pb-2 text-center justify-content-center">
          
          <div className="h4 text-center pb-2"> مجموع النازلين</div>
          
          <div className="row">
            <div className="col-8 offset-2">
          <Form.Control className="" type="number" placeholder="" max="999" />

            </div>
            </div>
          </div>
          
          </Form>

        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            
           <Button className="btn btn-lg btn-primary p-2 ps-5 pe-5" onClick={props.onHide}>اضافة</Button>
        </Modal.Footer>
      </Modal>
    );

}

export default AddJawlah