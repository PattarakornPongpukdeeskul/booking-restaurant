import { useState } from 'react'
import Modal from 'react-modal'

import { Datepicker } from '..'
import { Style } from './style'

export const ModalBooking = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Style>
      <button onClick={openModal}>Booking</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}>
        <button onClick={closeModal}>x</button>
        <Datepicker />
      </Modal>
    </Style>
  )
}
