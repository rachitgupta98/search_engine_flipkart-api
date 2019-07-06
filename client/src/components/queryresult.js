import React from "react";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/styles";

const styles = {
  card: {
    maxWidth: 300,
    height: "auto"
  },
  header: {
    marginTop: "20px",
    marginBottom: "20px",
    height: 80
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "red"
  }
};

class Queryresult extends React.Component {
  state = {
    expanded: false
  };

  handleMenuClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  handleFav = () => {
    alert("Added to Wishlist");
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const {
      title,
      img,
      inStock,
      offers,
      price,
      rating,
      specs,
      charge,
      d_time
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              FK
            </Avatar>
          }
          title={title}
          subheader={
            <b style={{ fontSize: "18px", color: "green" }}>{price}</b>
          }
        />
        <CardMedia
          style={{ backgroundSize: "contain" }}
          className={classes.media}
          image={img}
          title="Paella dish"
        />

        <CardActions disableSpacing>
          <Chip
            label={rating}
            style={{ color: "white", backgroundColor: "green" }}
          />

          <IconButton aria-label="Add to favorites" onClick={this.handleFav}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={this.handleMenuClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph style={{ color: "red" }}>
              Specs:
            </Typography>
            {specs.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
            <p>
              <span style={{ color: "red" }}>Stock:</span>
              {{ inStock } ? (
                <span style={{ color: "green" }}> Available</span>
              ) : (
                <span style={{ color: "red" }}> Out of Stock</span>
              )}
            </p>
            <p>
              <span style={{ color: "red" }}>Price:</span>
              <span style={{ color: "green" }}> {price}</span>
            </p>
            <Typography paragraph style={{ color: "red" }}>
              Offers:
            </Typography>
            {offers.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
            <br />
            <Typography paragraph style={{ color: "red" }}>
              Shipping Details:
            </Typography>
            <p>
              <span>Amount:</span>
              <span style={{ color: "green" }}> {charge}</span>
            </p>
            <p>
              <span>EstimatedDeliveryTime:</span>
              <span style={{ color: "green" }}> {d_time}</span>
            </p>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(Queryresult);
