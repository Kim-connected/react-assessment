import React from "react";

export default class FetchProduct extends React.Component {
  state = {
    loading: true,
    product: null
  };

  async componentDidMount() {
    const url = "http://localhost:8000/products";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ product: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.face) {
      return <div>didn't get an ASCII face</div>;
    }

    return (
      <div>
        <div>{this.state.face}</div>
        <div>{this.state.size}</div>
        <div>{this.state.price}</div>
      </div>
    );
  }
}
