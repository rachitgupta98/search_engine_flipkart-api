import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <Typography variant="body1" align="center" display="inline">
            <span className="footer">
              {" "}
              © Copyright Rachit. All Rights Reserved
            </span>
          </Typography>
        </div>
        <div className="footer-a">
          <a href="https://www.facebook.com/gr8.rachit">
            <i class="fab fa-facebook-f " />
          </a>
          <a href="https://twitter.com/rachit_g8t">
            <i class="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/_rachit_gupta/">
            <i class="fab fa-instagram" />
          </a>
          <a href="mailto: guptarachit371@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
