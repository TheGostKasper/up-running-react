import React, { createContext, useEffect, useRef, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import Spinner from "react-bootstrap/Spinner";

export interface IPayload {
  page: number;
  limit: number;
}

export const DataContext = createContext<any>(null);

export interface ILoadingError {
  fetchFn: () => Promise<any>;
  children?: any;
}

const LoadingError: React.FC<any> = ({ children, fetchFn }: ILoadingError) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>();

  const onFetch = useRef(() => {});
  onFetch.current = () => {
    setLoading((loading) => true);
    setError((err) => false);

    fetchFn()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError((err) => !err);
      })
      .finally(() => {
        setLoading((loading) => !loading);
      });
  };

  useEffect(() => {
    onFetch.current();
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
          <div className="alert alert-danger" role="alert">
            Something Went Wrong, Retry
            <IoIosRefresh
              onClick={onFetch.current}
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
