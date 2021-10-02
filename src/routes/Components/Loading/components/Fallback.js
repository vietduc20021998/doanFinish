import React from "react";
import clsx from "clsx";
import styled from "../assets/Loading.module.scss";

export function Fallback() {
  return (
    <div style={{ position: 'absolute', zIndex: 1060}}>
      <div
        className={clsx([
          styled.globalLoading,
          styled.loadingShow,
        ])}
      >
        <div className={styled.loadingSection} />
      </div>
      <div className={styled.loadingWrapper}>
        <div className={styled.loader}>Loading ...</div>
      </div>
    </div>
  )
}