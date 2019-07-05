import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import img from "../image/bg.png";
const styles = {
  root: {
    padding: "2px 4px",
    width: 400,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <img src={img} alt="background" className="img" />
        </div>
        <form onSubmit={this.props.onSubmit}>
          <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search for any product"
              value={this.props.state.data}
              onChange={this.props.onValueChange("data")}
            />
            <Button
              type="submit"
              className={classes.iconButton}
              aria-label="Search"
            >
              <SearchIcon />
            </Button>
          </Paper>{" "}
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(SearchBar);
