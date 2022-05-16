import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function Admin() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitAnaliys =(e) =>{

  }

  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Patsent kiritish
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Patsent  Kiritish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={submitAnaliys}>
                <Form.Label>Laboratory (name) / Лаборатория (название): </Form.Label>
                <Form.Control name={'laboratoryName'}  type="text" />
                <Form.Label>Place of sampling / Место забора анализа : </Form.Label>
                <Form.Control name={'placeOfSampling'}  type="text" />
                <Form.Label>Research method / Метод исследования: </Form.Label>
                <Form.Control name={'researchMethod'}  type="text" />
                <Form.Label>Passport / Серия и номер паспорта: </Form.Label>
                <Form.Control name={'passport'} type="text"  />
                <Form.Label>Full name / Полное имя :</Form.Label>
                <Form.Control name={'fullName'} type="text"/>
                <Form.Label>Birth date / Дата рождения :</Form.Label>
                <Form.Control name={'birthDate'} type="date"  />
                <Form.Label>Sex / Пол :</Form.Label>
                <Form.Control name={'sex'} type="date"  />
                <Form.Label>Analysis date / Дата сдачи анализа : </Form.Label>
                <Form.Control name={'analysisDate'} type="text"  />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Yopish
          </Button>
          <Button variant="success" >
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Admin