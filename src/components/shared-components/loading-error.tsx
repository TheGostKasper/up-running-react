import { DocumentNode, TypedDocumentNode, useQuery } from "@apollo/client";
import React from "react";

export interface ILoadingError {
  query: DocumentNode | TypedDocumentNode<any>;
  variables: any;
  children?: any;
  isInfinit: boolean;
}

const LoadingError: React.FC<any> = ({
  children,
  variables,
  query,
  isInfinit = true,
}: ILoadingError) => {
  const { loading, error, data } = useQuery(query, {
    variables: variables,
  });

  return (
    <>
      {isInfinit && children({ value: data })}
      {!isInfinit && !loading && !error && children({ value: data })}

      {loading && (
        <div className="flex-center">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {!loading && error && (
        <div className="alert alert-danger text-center w-100" role="alert">
          Something Went Wrong
        </div>
      )}
    </>
  );
};

export default LoadingError;
