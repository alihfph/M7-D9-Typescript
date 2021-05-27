import { Container, Col, Row, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import { IData } from "./type";

type MusicParams = {
  id: string;
};
// interface myState {
//   data: IData[];
// }

const Detailspage = () => {
  const { id } = useParams<MusicParams>();
  const [track, setTrack] = useState<IData>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
        );
        const data = await response.json();
        console.log(data);

        setTrack(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <Container>
      <Row>
        <>
          <Col xs={12} className="d-flex align-items-center my-4">
            {/* <Image
                  fluid
                  className="header-img me-3"
                  src={data.company_logo}
                /> */}
          </Col>
          <Col xs={12} className=" ">
            {/* <h1>{track?.album.title_short}</h1> */}
            <h1>{track?.album.title}</h1>
            <Image rounded alt="albumCover" src={track?.album.cover_xl} />
            <h5>How to apply:</h5>
            {/* <h2>{track?.album.isrc}</h2> */}
          </Col>
        </>
      </Row>
    </Container>
  );
};

export default withRouter(Detailspage);
