import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = new AbortController();
  // function to fetch data
  let fetchData = async (url) => {
    try {
      let response = await fetch(url, { signal: abortCont.signal });
      if (!response.ok) {
        setLoading(false);
        throw new Error(`Could not fetch data from that resource`);
      }
      let responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log(`fetch aborted`);
      } else {
        setLoading(false);
        setError(`Could not fetch data from that resource`, error.message);
      }
    }
  };

  // useEffect hook to render the fetched data
  useEffect(() => {
    console.log(`useEffect ran`);
    setTimeout(() => {
      fetchData(url);
    }, 1000);
    return () => abortCont.abort();
  }, [url]); // passing url as dependecy, coz as url changes we need to fetch Data.

  return { data, loading, error };
};

export default useFetch;
