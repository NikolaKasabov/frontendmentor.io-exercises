import './Tab.scss';

export default function Tab({title, onClick, isActive}) {
  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {title}
    </div>
  );
}
