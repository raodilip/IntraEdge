import React, { Component } from "react";
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import TextScroll from "./TextScroll";
import { list } from "../list";
import FilterList from "./FilterList";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      openModal: false,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  reset() {
    this.setState((prevState) => ({
      count: 0,
    }));
  }
  handleShow() {
    this.setState({ openModal: true });
    this.increment();
  }
  handleClose() {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <h6>Requirement 1</h6>
          </Row>
          <Row>
            <p>
              Render a button called “Open “and where you click on it, a modal
              opens with a message, “modal is clicked count number of times”.
              count should keep increasing on each click of open button. On
              clicking of the close button on modal, the modal should close. On
              click of the reset button on parent page, the counter value should
              reset to zero and modal popup count should start from one again.
            </p>
          </Row>
          <Row>
            <Button
              variant="secondary"
              onClick={() => this.handleShow()}
              className="modalButton"
            >
              Open
            </Button>

            <Button
              variant="secondary"
              onClick={() => this.reset()}
              className="modalButton"
            >
              Reset
            </Button>
          </Row>

          <Modal show={this.state.openModal} onHide={() => this.handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Click Counter</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal is clicked {this.state.count} times</Modal.Body>
          </Modal>
          <Row>
            <h6>Requirement 2</h6>
            <p>
              Render a text on the page and that text size should increase and
              decrease with mouse scroll
            </p>
          </Row>
          <Row>
            <TextScroll />
          </Row>
          <Row>
            <h6>Requirement 3</h6>
            <p>
              Render a small list of Cars or Fruits as an unordered list based
              on user select. Add a select dropdown to make filtering on
              type(cars or fruits) dynamic. I.e. Once you select Cars from drop
              down, car list gets displayed and once you select Fruits, fruit
              List is displayed. Add a sort button to toggle either the fruit or
              car list in ascending/descending order.
            </p>
            <FilterList list={list} />
          </Row>
        </Container>
      </>
    );
  }
}

export default Counter;
