import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import styled from "../assets/Loading.module.scss";

const rootLoading = document.getElementById("root-loading");

class PortalLoading extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }

  componentDidMount() {
    rootLoading.appendChild(this.element);
  }

  componentWillUnmount() {
    rootLoading.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.loadingNumber = 0;
    this.state = { show: false };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.loadingNumber++;

    if (document.getElementsByClassName("global-loading").length === 0) {
      this.setState({ show: true });
    }

    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.loadingNumber <= 0) {
          this.setState({ show: false });
          clearInterval(this.timer);
          this.loadingNumber = 0;
          this.timer = null;
        }
      }, 600);
    }
  }

  hide() {
    this.setState({ show: false });
    clearInterval(this.timer);
    this.loadingNumber--;
    this.timer = null;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      this.state.show && (
        <PortalLoading>
          <div
            className={clsx([
              "global-loading",
              styled.globalLoading,
              styled.loadingShow,
            ])}
          >
            <div className={styled.loadingSection} />
          </div>
          <div className={styled.loadingWrapper}>
            <div className={styled.loader}></div>
          </div>
        </PortalLoading>
      )
    );
  }
}