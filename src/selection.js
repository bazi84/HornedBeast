import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";


class SelectSample extends Component {
  choiceOfHorns = (e) => {
    if (e.target.value === 'Show All'){
      return this.props.renderfilteredBeast(0)
    } else {
      const choice = +e.target.value;
      return this.props.renderfilteredBeast(choice) 
    }
  }
  render() {
    return (
      <Form onChange={this.choiceOfHorns}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label >Number of Horns</Form.Label>
          <Form.Control as="select">
            <option>Show All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }


}

export default SelectSample;