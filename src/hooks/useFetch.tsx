import { useState, useEffect } from 'react';

const useFetch = <R extends any = any>(url: string) => {
  const [response, setResponse] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    (async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error! ${response.status}`);
        }
        const data = await response.json();
        console.log('useFetch ran...', data);
        // console.log(data);
        setResponse(data);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.error('Request cancelled');
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { response, isLoading, error };
};

export default useFetch;
