import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import './UrlShortening.scss';
import UrlDetails from './UrlDetails';

const apiUrl = 'https://api.shrtco.de/v2/shorten?url=';
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

function UrlShortening() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [urlTerm, setUrlTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  const { fetchData, data, isLoading } = useFetch();

  // get initial data from Local Storage
  useEffect(() => {
    const savedUrls = localStorage.getItem('urls');
    if (savedUrls) {
      setShortenedUrls(JSON.parse(savedUrls));
    }
  }, []);

  useEffect(() => {
    if (data && data?.ok) {
      setShortenedUrls(old => {
        const newUrls = [
          ...old,
          {
            id: nanoid(),
            fullUrl: urlTerm,
            shortenedUrl: data?.result?.full_short_link,
          }
        ];

        localStorage.setItem('urls', JSON.stringify(newUrls));
        return newUrls;
      });

      setUrlTerm('');
    }
  }, [data]);

  function formSubmitHandler(ev) {
    ev.preventDefault();
    setHasError(false);

    if (!urlRegex.test(urlTerm)) {
      setHasError(true);
    } else {
      fetchData(apiUrl + urlTerm);
    }

  }

  return (
    <div className="url-shortening">
      {isLoading && <Loader />}

      <div className="url-shortening-container">

        <div className="url-shortener">
          <form className='url-shortener-form' onSubmit={formSubmitHandler}>
            <div className="input-wrapper">
              <input type="text" placeholder='Shorten a link here...'
                className={hasError ? 'error' : ''}
                value={urlTerm}
                onChange={ev => setUrlTerm(ev.target.value)}
              />
              {hasError && <div className="error-message">Please add a URL</div>}
            </div>
            <button className='btn'>Shorten It!</button>
          </form>
        </div>

        <div className="shortened-urls-container">
          {shortenedUrls.map(url => {
            return (
              <UrlDetails
                key={url.id}
                fullUrl={url.fullUrl}
                shortenedUrl={url.shortenedUrl}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default UrlShortening;
