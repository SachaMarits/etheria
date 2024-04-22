import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const FloatingSidebar = ({
  onClose,
  show,
  children,
  className = "",
  title = "",
  direction = "right",
}) => {
  const nodeRef = useRef(null);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!document.getElementById("root")) return;

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`floating-sidebar ${
          direction === "left" ? "left" : "right"
        } ${className || ""}`}
      >
        <i
          className="mdi mdi-close text-xl cursor-pointer"
          onClick={() => onClose()}
        />
        <h3 className="pt-[1.15rem] pb-3" style={{ marginLeft: "52px" }}>
          {title}
        </h3>
        {children}
      </div>
    </CSSTransition>,
    document.getElementById("root") ?? document.body
  );
};

export default FloatingSidebar;
