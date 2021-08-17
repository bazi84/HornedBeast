import { render } from "@testing-library/react";
import { Component } from "react";

class Main extends Component {
  render() {
    return (
      <>
        <h1>Message here: {this.props.message}</h1>
        <BeastImage Image_url={beastImages[0].Image_url}/>
        <BeastImage Image_url={beastImages[1].Image_url}/>
        <BeastImage Image_url={beastImages[2].Image_url}/>
        <BeastImage Image_url={beastImages[3].Image_url}/>
      </>
    );
  }
}

class BeastImage extends Component {
  render() {
    return <img src={this.props.Image_url} alt="Honred Beast" />
  }
}


export default Main;