import { useEffect, useState, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useFetch;
