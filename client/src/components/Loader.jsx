import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center w-full justify-center h-full">
      <div>
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default Loader;
