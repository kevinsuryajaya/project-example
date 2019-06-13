import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ContentRegister from './ContentRegister';
import ContentA from '../Modal/contentA';

const CustomButton = (props)=>{
  const {color, click, label} = props
  return(
    <Button color={color} onClick={click}>{label}</Button>
  )
}

const CustomButtonContent = (props)=>{
  const {color, click, label,toggleContent,content} = props
  return(
    <Button color={color} onClick={() => {click(); toggleContent(content)}}>{label}</Button>
  )
}

const CustomModalHeader = (props) => {
  const {toggle} = props
  return(
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
  )
}

const CustomModalBody = (props) =>{
  const {nestedModal,toggle,toggleNested,toggleAll,closeAll,content} = props
  return(
    <ModalBody>
            {content}
            <br />

            <CustomNested open={nestedModal} toggleNested={toggleNested} closeAll={closeAll} toggle={toggle} toggleAll={toggleAll}/>

          </ModalBody>
  )
}


const CustomModalFooter = (props) =>{
  const {toggle,toggleNested} = props

  return(

    <ModalFooter>
    <CustomButton color={"secondary"} click={toggle} label={"Cancel"}/>{' '}
    <CustomButton color={"success"} click={toggleNested} label={"Save"}/>
  </ModalFooter>
  )
}
const NestedHeader = (props) => {
  const {header} = props
  return(
    <ModalHeader>{header}</ModalHeader>
  )
}

const NestedBody = (props) => {
  const {body} = props
  return (
    <ModalBody>{body}</ModalBody>
  )
}

const NestedFooter = (props) => {
  const {toggleAll} = props
  return(
    <ModalFooter>
                <CustomButton color={"success"} click={toggleAll} label={"OK"}/>
    </ModalFooter>
  )
}

const CustomNested = (props) => {
  const {open, toggleNested, closeAll, toggle, toggleAll} = props
  return(
    <Modal isOpen={open} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
              <NestedHeader header={"Alert"}/>

              <NestedBody body={"Successfully"}/>

              <NestedFooter toggleAll={toggleAll}/>

      </Modal>
  )
}

const CustomModal = (props) => {
  const {open, toggle, closeAll, toggleNested, toggleAll,nestedModal,content} = props
  return(
    <Modal isOpen={open} toggle={toggle} >
          
          <CustomModalHeader click={toggle}/>
          
          <CustomModalBody  nestedModal={nestedModal} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll} closeAll={closeAll} content={content}/>

          <CustomModalFooter toggle={toggle} toggleNested={toggleNested}/>
    </Modal>
  )
}



function Nested(){
  const [modal, setModal]=React.useState(false)
  const [nestedModal, setNestedModal]=React.useState(false)
  const [closeAll, setCloseAll]=React.useState(false)
  const [content, setContent]=React.useState(null)

  const toggle = () => (setModal(!modal))
  const toggleNested = () => {setNestedModal(!nestedModal);setCloseAll(false)}
  const toggleAll = () => {setNestedModal(!nestedModal);setCloseAll(true)}
  const toggleContent = (content) => (setContent(content))

  return(
    <div>
        <CustomButtonContent color={"danger"} click={toggle} label={"Register"} toggleContent={toggleContent} content={<ContentRegister/>}/>
        <CustomButtonContent color={"danger"} click={toggle} label={"Register"} toggleContent={toggleContent} content={<ContentA/>}/>
        
        <CustomModal open={modal} toggle={toggle} closeAll={closeAll} toggleNested={toggleNested} toggleAll={toggleAll} nestedModal={nestedModal} content={content}/>
        
      </div>
  )
}


export default Nested;