import { useEffect, useState } from "react";
import api from "../services/api";

const useFetch = (resource: string, initialData: any) => {
  const [url, setUrl] = useState(resource);
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await api.get(url);
        const responseData = response.data;

        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError, url }, setUrl];
};

export default useFetch;
