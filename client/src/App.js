import React from "react";
import SearchBar from "./components/searchbar";
import Queryresult from "./components/queryresult";
import Footer from "./components/footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      result: []
    };
  }
  handleChange = dbs => e => {
    this.setState({
      [dbs]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { data } = this.state;
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        data: data
      }),
      family: 4,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        res.json().then(body => {
          this.setState({
            result: body
          });
        });
      })
      .catch(err => {
        console.error(err);
        alert("Error occured,try different search input");
      });
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <a href="https://github.com/rachitgupta98" style={{ float: "right" }}>
          <i className="fab fa-github fa-2x" />
        </a>
        <SearchBar
          state={this.state}
          onValueChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className="queryresult">
          {result.map((v, i) => (
            <Queryresult
              title={v.title}
              img={v.imgUrl}
              inStock={v.inStock}
              offers={v.offers}
              price={v.price}
              rating={v.rating}
              specs={v.specs}
              charge={v.shipping_chrg}
              d_time={v.shipping_delivery}
              key={i}
            />
          ))}
        </div>
        <div style={{ marginTop: "25%" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
