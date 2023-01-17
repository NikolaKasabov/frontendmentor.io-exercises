import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Rules from './components/Rules/Rules';
import SelectedTypes from './components/SelectedTypes/SelectedTypes';
import TypeSelect from './components/TypeSelect/TypeSelect';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedType, setSelectedType] = useState(null);

  function closeModalHandler() {
    setShowModal(false);
  }

  function typeSelectHandler(type) {
    setSelectedType(type);
  }

  function newGameClickHandler() {
    setSelectedType(null);
  }

  function increaseScore() {
    setScore(old => old + 1);
  }

  return (
    <div className="App">
      {showModal && (
        <Modal onOverlayClick={closeModalHandler}>
          <Rules onCloseClick={closeModalHandler} />
        </Modal>
      )}

      <Header score={score} />

      {selectedType
        ? <SelectedTypes selectedType={selectedType}
          newGameClick={newGameClickHandler}
          increaseScore={increaseScore}
        />
        : <TypeSelect onTypeSelect={typeSelectHandler} />
      }

      <button className='app--show-modal-btn'
        onClick={() => setShowModal(true)}
      >rules</button>
    </div>
  );
}

export default App;
