import { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { match } from "react-router-dom";
import {Iresult} from  "./type"
import {IData} from  "./type"

type MyProps = {
  // using `interface` is also ok
  result: Iresult[];
};
interface myState {
  data: IData[]
}

class Detailspage extends Component<MyProps, myState> { 
  constructor(props:MyProps) {
    super(props);
    console.log(this.props.match.params.id)
     this.state={
       data:[]
     }}
  
    componentDidMount() {
      this.getJobDetails();
      
    }
    getJobDetails = async () => {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${this.props.match.params.id}`
      );
      const data = await response.json();
      console.log(data);
  
      this.setState({ data });
    };

  render() {
    return (
        <Container>
        <Row>
          {data && (
            <>
              <Col xs={12} className="d-flex align-items-center my-4">
                {/* <Image
                  fluid
                  className="header-img me-3"
                  src={data.company_logo}
                /> */}
                 
                
              </Col>
              <Col xs={12} className=" ">
              <h1>{data.title_short}</h1>
                <h1>{data.title }</h1>

                <h5>How to apply:</h5>
                <h2>{data.isrc}</h2>
                
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  }
}

export default Detailspage;

