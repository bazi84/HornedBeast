import { render } from "@testing-library/react";
import { Component } from "react";
import beastImages from './beastData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';


class Main extends Component {
  render() {
    return (
      <constainer>
        
        <h1>The Best Wild Beast {this.props.message}</h1>
        <Row>
          <Col>
        <BeastImage image_url={beastImages[0].image_url}/>
          </Col>
          <Col>
        <BeastImage image_url={beastImages[1].image_url}/>
        </Col>
        </Row>

        <Row>
        <Col>
        <BeastImage image_url={beastImages[2].image_url}/>
        </Col>
        <Col>
        <BeastImage image_url={beastImages[3].image_url}/>
        </Col>
        </Row>

      </constainer>
      
    );
  }
}

class BeastImage extends Component {

  constructor(props) {
    super(constructor);
    this.state = {
      "status": "Like"
    }
  }
  clickHandler = () => {
    const newStatus = this.state.status === "Nay" ? "Like" : "Nay";
    this.setState({
      status: newStatus
    });
  }
  
  render() {
    return (
      <div onClick={this.clickHandler}>
     <Image src={this.props.image_url rounded fluid/>
      <p>{this.state.status}</p>
    </div>
    );
  }
}

export default Main;