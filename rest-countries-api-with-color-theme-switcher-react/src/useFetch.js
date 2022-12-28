import { useCallback, useState } from 'react';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = useCallback((url) => {
    setIsLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { fetchData, data, isLoading };
}