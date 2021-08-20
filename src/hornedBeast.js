import React, { Component } from 'react'
import { Card, Button, Col, Modal, ModalBody, Form } from 'react-bootstrap';


class Hornedbeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galary: 0
        }
    }
    handelmodal() {
        this.setState({ show: !this.state.show })
    }
    increaseClick = () => {
        this.setState(
            {
                galary: this.state.galary + 1
            })
    }
    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={() => this.handelmodal()}>
                    <Modal.Header >
                        <Modal.Title>{this.props.title}</Modal.Title></Modal.Header>
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Body> <Card.Img onClick={() => { this.handelmodal() }} variant="top" src={this.props.imgUrl} style={{ width: 250 }} /></Modal.Body>
                    <ModalBody> {this.props.keyword}</ModalBody>
                    <ModalBody> {this.props.horns}</ModalBody>
                    <ModalBody> {this.state.galary}</ModalBody>
                    <Modal.Footer><Button onClick={() => { this.handelmodal() }}>close Modal</Button></Modal.Footer>
                </Modal>

                <Col sm={3}>
                    <Card bg={'warning '}>
                        <Card.Img onClick={() => { this.handelmodal() }} variant="top" src={this.props.imgUrl} style={{ width: 250 }} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text> {this.props.description} </Card.Text>
                            <Card.Text> {this.props.keyword} </Card.Text>
                            <Card.Text> {this.props.horns} </Card.Text>
                            <Card.Text> {this.state.galary} </Card.Text>
                            <Button variant="primary" onClick={this.increaseClick}>💛</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}
export default Hornedbeasts