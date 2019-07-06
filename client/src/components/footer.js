import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="body1" align="center" display="inline">
          <span className="footer">
            {" "}
            © Copyright Rachit. All Rights Reserved
          </span>
        </Typography>

        <div className="footer-a">
          <a href="https://www.facebook.com/gr8.rachit">
            <i className="fab fa-facebook-f " />
          </a>
          <a href="https://twitter.com/rachit_g8t">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/_rachit_gupta/">
            <i className="fab fa-instagram" />
          </a>
          <a href="mailto: guptarachit371@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </Fragment>
    );
  }
}
