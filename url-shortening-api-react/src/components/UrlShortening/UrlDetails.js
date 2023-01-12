import { useEffect, useState } from 'react';
import './UrlDetails.scss';

function UrlDetails({ fullUrl, shortenedUrl }) {
  const [wasCopied, setWasCopied] = useState(false);

  useEffect(() => {
    if (wasCopied) {
      setTimeout(() => setWasCopied(false), 1000);
    }
  }, [wasCopied]);

  function clickHandler() {
    // copy to clipboard
    navigator.clipboard.writeText(shortenedUrl);
    setWasCopied(true);
  }

  return (
    <div className="url-details">
      <p>{fullUrl}</p>
      <div className="line"></div>
      <a href={shortenedUrl} target='_blank'>{shortenedUrl}</a>
      <button className={`btn ${wasCopied ? 'copied' : ''}`} onClick={clickHandler}>
        {wasCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default UrlDetails;
