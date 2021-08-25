// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Arrow2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 66 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M65.707 8.707a1 1 0 000-1.414L59.343.929a1 1 0 10-1.414 1.414L63.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h65V7H0v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow2Icon;
/* prettier-ignore-end */
