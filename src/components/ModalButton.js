import React, {useState} from 'react'
import {createPortal} from "react-dom" 
import ModalContent from './ModalContent'


function ModalButton() {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button 
    onClick={() => setShowModal (true)}>
        <img src='/images/shopping.svg' alt='shopping'/>
    </button>
    {showModal && 
    createPortal(
    <ModalContent closeModal = {() => setShowModal (false)}/>, 
    document.body
    )}
    </>
  )
}

export default ModalButton