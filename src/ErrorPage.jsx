import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  let err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="text-4xl bg-slate-300 text-center font-serif m-6 border-8 text-black">
        Status {err.status}
      </div>
      <div className="text-2xl bg-slate-300 text-center font-serif m-6 border-8 text-red-500">
        {err.data}
      </div>
    </>
  );
};

export default ErrorPage;
