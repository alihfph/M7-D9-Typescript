import React, { Component } from 'react';
import {Iresult} from  "./type"
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

interface myState {
  search : string,
  result: Iresult[]
}

class Searchpage extends Component<{}, myState> {

  state : myState= {
    search: "",
    result: []
  };

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { search} = this.state;

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
    );
    const { data } = await response.json();
    console.log(data);
    this.setState({
      result:data 
    });
  };

  render() {
    console.log(this.state);
    return (
      <Container>
      <Row className="mt-5">
        <Col xs={12} md={8} className="mx-auto">
          <h1> Search here </h1>
      <Form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={this.handleChange} />
      </Form>
          {this.state.result.map((r) => (
            <Col xs={12} className="d-flex">
              <Col xs={2}>
                <Image src={r.picture} />
              </Col>
              <Col xs={10} className="ps-2">
                <h6 className="mt-3">{r.title}</h6>
                <Link to={`/${r.id}`} className="btn btn-primary">
                  Show more
                </Link>
              </Col>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Searchpage;

