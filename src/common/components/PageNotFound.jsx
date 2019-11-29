import React from "react";

const PageNotFound = props => {
  return (
    <div className="text-center">
      <div className="m-5 p-5">
        <div className="py-3">
          <i class="fas fa-exclamation-circle fa-5x text-danger"></i>
        </div>
        <p>Page Not Found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
