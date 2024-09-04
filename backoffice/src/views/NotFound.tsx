import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-md mx-auto text-center">
        <h1 className="font-bold">Not Found</h1>
        <p>Whoops! we couldn't find a matching route.</p>
      </div>
    </div>
  );
};

export default NotFound;
