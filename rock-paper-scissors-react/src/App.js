import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Rules from './components/Rules/Rules';
import TypeSelect from './components/TypeSelect/TypeSelect';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(12);
  const [selectedType, setSelectedType] = useState(null);

  function closeModalHandler() {
    setShowModal(false);
  }

  function typeSelectHandler(type) {
    setSelectedType(type);
  }

  return (
    <div className="App">
      {showModal && (
        <Modal onOverlayClick={closeModalHandler}>
          <Rules onCloseClick={closeModalHandler} />
        </Modal>
      )}

      <Header score={score} />

      <TypeSelect onTypeSelect={typeSelectHandler} />
      
      <button className='app--show-modal-btn'
        onClick={() => setShowModal(true)}
      >rules</button>
    </div>
  );
}

export default App;
