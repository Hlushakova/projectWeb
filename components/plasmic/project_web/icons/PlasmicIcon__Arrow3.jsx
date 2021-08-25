// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Arrow3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 8"}
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
          "M31.37 4.354a.5.5 0 000-.708L28.188.464a.5.5 0 10-.707.708L30.309 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h31.016v-1H0v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow3Icon;
/* prettier-ignore-end */
