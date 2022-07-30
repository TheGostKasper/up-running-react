import React, { createContext, useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import Spinner from "react-bootstrap/Spinner";

export const DataContext = createContext<any>(null);

export interface ILoadingError {
  fetchFn: () => Promise<any>;
  children?: any;
}

const LoadingError: React.FC<any> = ({ children, fetchFn }: ILoadingError) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>();

  const fetchLoad = (fn: Promise<any>) => {
    setLoading((loading) => (loading = true));
    setError((err) => (err = false));
    return fn
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError((err) => (err = !err));
      })
      .finally(() => {
        setLoading((loading) => (loading = false));
      });
  };

  useEffect(() => {
    setLoading((loading) => (loading = true));
    setError((err) => (err = false));
    fetchLoad(fetchFn());

    return () => {
      setData(null)
     }
  }, [fetchFn]);

  return (
    <>
      {loading && (
        <div className="flex-center">
          <Spinner animation="border" />
        </div>
      )}
      {!loading && error && (
        <div>
          <div className="alert alert-danger text-center" role="alert">
            Something Went Wrong, Retry
            <IoIosRefresh
              onClick={() => fetchLoad(fetchFn())}
              className="ml-medium pointer"
            />
          </div>
        </div>
      )}
      {!loading && !error && children({ value: data })}
    </>
  );
};

export default LoadingError;
