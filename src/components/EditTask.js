import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal';
import { editTask } from '../redux/actions';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditTask = ( {task} ) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [old, setOld] = useState(task.action)
    const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const editedTask = {
          id:task.id,
          action:old,
          isDone:task.isDone
      }
dispatch(editTask(editedTask));
closeModal()
      
  }
  

    return (
        <div>
           <button onClick={openModal}>Ediit</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <form onSubmit={handleSubmit} >
             <input type="text" value={old} onChange={(e)=>setOld(e.target.value)}   />
             <button  type="submit" >Confirm</button>
             <button onClick={closeModal} > Cancel</button>
         </form>
          </Modal> 
        </div>
    )
}

export default EditTask
