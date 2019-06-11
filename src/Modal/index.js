import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function SaveButton({ setShow, show }) {
  return (
    <Button variant="primary" onClick={() => setShow(!show)}>
      Save Changes
    </Button>
  )
}

function CloseButton({ setShow, show }) {
  return (
    <Button variant="secondary" onClick={() => setShow(!show)}>
      Close
    </Button>
  )
}

function ModalFooter({ setShow, show }) {
  return (
    <Modal.Footer>
      <CloseButton setShow={setShow} show={show} />

      <SaveButton setShow={setShow} show={show} />
    </Modal.Footer>
  )
}

function ModalBody() {
  return <Modal.Body>Testing Modal</Modal.Body>
}

function ModalHeader() {
  return (
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
  )
}

function AppModal({ setShow, show }) {
  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <ModalHeader />

      <ModalBody />

      <ModalFooter setShow={setShow} show={show} />
    </Modal>
  )
}

function AppButton({ setShow, show }) {
  return (
    <Button variant="primary" onClick={() => setShow(!show)}>
      Show Modal
    </Button>
  )
}

function App() {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <AppButton setShow={setShow} show={show} />

      <AppModal setShow={setShow} show={show} />
    </>
  )
}

export default App
