// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

import { Tooltip } from "react-tooltip";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Zoom>
      <div className="flex gap-4 flex-col justify-center items-center w-screen h-screen">
        <h2 className="text-5xl">Page not found</h2>
        <p>Status: 404</p>

        <div>
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Press, It's derect you home page"
            onClick={goToHome}
            className="btn"
          >
            Go Home
          </button>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
    </Zoom>
  );
};

export default ErrorPage;
