import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import ContentA from './contentA'
import ContentB from './contentB'

function CloseButton({ click }) {
  return (
    <Button
      variant="secondary  "
      onClick={() => click()}
    >
      Close
    </Button>
  )
}


function ModalFooter({ click }) {
  return (
    <Modal.Footer>
      <CloseButton click={click} />
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

function AppModal({content, show, click}) {

  return (
    <Modal show={show} onHide={() => click()}>
      <ModalHeader />

      <ModalBody content={content} />

      <ModalFooter click={click} />
    </Modal>
  )
}

function AppButton({click, buttonName, setContent, content }) {
  return (
    <Button variant="primary" onClick={() => {click(); setContent(content)}}>
      {buttonName}
    </Button>
  )
}

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => (setShow(!show))

  const [content, setContent] = React.useState(null)
  return (
    <>
      <AppButton click={handleClick} buttonName={"Modal Content A"} setContent={setContent} content={<ContentA />}/>
      &nbsp;
      <AppButton click={handleClick} buttonName={"Modal Content B"} setContent={setContent} content={<ContentB />}/>

      <AppModal click={handleClick} show={show} content={content}/>
    

    </>
  )
}

export default App
