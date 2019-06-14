import React from 'react'
import { Button } from 'reactstrap'
import ContentRegister from './ContentRegister'
import ContentA from '../Modal/contentA'
import CustomModal from './modal'

const CustomButtonContent = props => {
  const { color, click, label, toggleContent, content } = props
  return (
    <Button
      color={color}
      onClick={() => {
        click()
        toggleContent(content)
      }}
    >
      {label}
    </Button>
  )
}

function Nested() {
  const [modal, setModal] = React.useState(false)
  const [nestedModal, setNestedModal] = React.useState(false)
  const [closeAll, setCloseAll] = React.useState(false)
  const [content, setContent] = React.useState(null)

  const toggle = () => setModal(!modal)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal)
    setCloseAll(true)
  }
  const toggleContent = content => setContent(content)

  return (
    <div>
      <CustomButtonContent
        color={'danger'}
        click={toggle}
        label={'Register'}
        toggleContent={toggleContent}
        content={<ContentRegister />}
      />
      <CustomButtonContent
        color={'danger'}
        click={toggle}
        label={'Register'}
        toggleContent={toggleContent}
        content={<ContentA />}
      />

      <CustomModal
        open={modal}
        toggle={toggle}
        closeAll={closeAll}
        toggleNested={toggleNested}
        toggleAll={toggleAll}
        nestedModal={nestedModal}
        content={content}
      />
    </div>
  )
}

export default Nested
