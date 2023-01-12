import { useState } from 'react';

function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData(url) {
    setIsLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return { fetchData, data, isLoading };
}

export default useFetch;
