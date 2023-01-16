import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(true);

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="App">
      dfgfg
      {showModal && <Modal onOverlayClick={closeModalHandler}></Modal>}
    </div>
  );
}

export default App;
