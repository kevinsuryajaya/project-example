import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import ContentA from './contentA'
import ContentB from './contentB'

function ContentButtonA({ setContent, content }) {
  return (
    <Button
      variant="primary"
      onClick={() => setContent((content = <ContentA />))}
    >
      Content A
    </Button>
  )
}

function ContentButtonB({ setContent, content }) {
  return (
    <Button
      variant="primary"
      onClick={() => setContent((content = <ContentB />))}
    >
      Content B
    </Button>
  )
}

function ModalFooter({ setContent, content }) {
  return (
    <Modal.Footer>
      <ContentButtonA setContent={setContent} content={content} />

      <ContentButtonB setContent={setContent} content={content} />
    </Modal.Footer>
  )
}

function ModalBody({ content }) {
  return <Modal.Body>{content}</Modal.Body>
}

function ModalHeader() {
  return (
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
  )
}

function AppModal({ setShow, show }) {
  const [content, setContent] = React.useState('Testing Content')

  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <ModalHeader />

      <ModalBody content={content} />

      <ModalFooter setContent={setContent} content={content} />
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
