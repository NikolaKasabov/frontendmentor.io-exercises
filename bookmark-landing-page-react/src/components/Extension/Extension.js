import './Extension.scss';
import chromeLogo from '../../images/logo-chrome.svg';
import firefoxLogo from '../../images/logo-firefox.svg';
import operaLogo from '../../images/logo-opera.svg';
import ExtensionCard from './ExtensionCard';

const data = [
  {
    id: 0,
    title: 'Add to Chrome',
    text: 'Minimum version 62',
    image: chromeLogo,
  },
  {
    id: 1,
    title: 'Add to Firefox',
    text: 'Minimum version 55',
    image: firefoxLogo,
  },
  {
    id: 0,
    title: 'Add to Opera',
    text: 'Minimum version 46',
    image: operaLogo,
  },
];

export default function Extension() {
  return (
    <div className="extension">
      <h2>Download the extension</h2>
      <p className='extension-text'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      <div className="extension-cards-container">
        {data.map(el => (
          <ExtensionCard
            key={el.id}
            image={el.image}
            title={el.title}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
}
