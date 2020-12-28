import { useState, useEffect, useRef } from "react";
import classes from "./SliderBar.module.css";
import PropTypes from 'prop-types';

const SliderBar = (props) => {
  const refContainer = useRef(null);
  const refLine = useRef(null);

  const [downClientX, setDownClientX] = useState(0);
  const [percentage, setPercentage] = useState(
    props.initValue && !isNaN(props.initValue) ? props.initValue : 20
  );

  useEffect(() => {
    if (props.initValue && !isNaN(props.initValue)) {
      setPercentage(props.initValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _eventStarterHandler = (eventType, e) => {
    switch (eventType) {
      case "click":
        setDownClientX(e.clientX);
        break;
      case "tap":
        setDownClientX(e.touches[0].clientX);
        break;

      default:
        break;
    }
  };

  const _mouseStartHandler = (e) => {
    _moveHandler("mouse", e);
  };
  const _touchStartHandler = (e) => {
    _moveHandler("tap", e);
  };
  useEffect(() => {
    if (downClientX > 0) {
      window.addEventListener("mousemove", _mouseStartHandler);
      window.addEventListener("touchmove", _touchStartHandler);
      window.addEventListener("mouseup", _mouseUpHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downClientX]);

  const _moveHandler = (eventType, e) => {
    let movementX;
    eventType === "mouse"
      ? (movementX = e.clientX - downClientX)
      : (movementX = e.touches[0].clientX - downClientX);

    let newPercentage =
      percentage + movementX / (refContainer.current.offsetWidth * 0.01);

    if (newPercentage > 100) newPercentage = 100;
    if (newPercentage < 0) newPercentage = 0;

    setPercentage(newPercentage);
    if (props.valueHandler !== undefined) {
      props.valueHandler(newPercentage);
    }
  };

  const _mouseUpHandler = () => {
    window.removeEventListener("mousemove", _mouseStartHandler);
    window.removeEventListener("mouseup", _mouseUpHandler);
    window.removeEventListener("touchmove", _touchStartHandler);
  };

  let lineStyle = {
    width: `${percentage}%`,
    backgroundColor: props.lineColor ? props.lineColor : "",
    border: props.lineBorder ? props.lineBorder : "none",
  };

  let containerStyle = {
    ...props,
    width: `100%`,
    backgroundColor: props.backgroundColor ? props.backgroundColor : '',
  };

  let ellipseStyle = {
    backgroundColor: props.ellipseColor ? props.ellipseColor : "",
    border: props.ellipseBorder ? props.ellipseBorder : "none",
  };

  return (
    <div
      ref={refContainer}
      className={classes.SliderBarContainer}
      style={containerStyle}
    >
      <div ref={refLine} className={classes.SliderBarLine} style={lineStyle}>
        <div
          className={classes.Ellipse}
          style={ellipseStyle}
          onTouchStart={(e) => _eventStarterHandler("tap", e)}
          onMouseDown={(e) => _eventStarterHandler("click", e)}
        ></div>
      </div>
    </div>
  );
};

SliderBar.propTypes= {
  initValue: PropTypes.number,
  border: PropTypes.string,
  ellipseBorder: PropTypes.string,
  ellipseColor: PropTypes.string,
  valueHandler: PropTypes.func
}

export default SliderBar;
