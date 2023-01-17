import { useEffect, useState } from 'react';
import Badge from '../Badge/Badge';
import './SelectedTypes.scss';

function getRandomType() {
  const types = ['rock', 'paper', 'scissors'];
  return types[Math.floor(Math.random() * types.length)];
}

function SelectedTypes({ selectedType, newGameClick, increaseScore }) {
  const [computerSelection, setComputerSelection] = useState('');
  const [didPlayerWin, setDidPlayerWin] = useState(false);

  useEffect(() => {
    let computerSelectedType = getRandomType();

    while (computerSelectedType === selectedType) {
      computerSelectedType = getRandomType();
    }

    setComputerSelection(computerSelectedType);

    if (selectedType === 'rock') {
      if (computerSelectedType === 'paper') {
        setDidPlayerWin(false);
      } else if (computerSelectedType === 'scissors') {
        setDidPlayerWin(true);
        increaseScore();
      }
    } else if (selectedType === 'paper') {
      if (computerSelectedType === 'scissors') {
        setDidPlayerWin(false);
      } else if (computerSelectedType === 'rock') {
        setDidPlayerWin(true);
        increaseScore();
      }
    } else if (selectedType === 'scissors') {
      if (computerSelectedType === 'rock') {
        setDidPlayerWin(false);
      } else if (computerSelectedType === 'paper') {
        setDidPlayerWin(true);
        increaseScore();
      }
    }
  }, []);

  return (
    <div className="selected-types">
      <div className="player-selection">
        <h3>you picked</h3>
        <div className="badge-wrapper">
          <Badge type={selectedType} />
        </div>
      </div>

      <div className="new-game-btn-wrapper">
        <h2>{didPlayerWin ? 'you win' : 'you lose'}</h2>
        <button className='new-game-btn'
          onClick={newGameClick}
        >play again</button>
      </div>

      <div className="computer-selection">
        <h3>the house picked</h3>
        <div className="badge-wrapper">
          <Badge type={computerSelection} />
        </div>
      </div>
    </div>
  );
}

export default SelectedTypes;
