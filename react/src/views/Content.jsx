import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { newContext } from "../contexts/ContextProvider";

function Content(props) {
    const {banner} = useContext(newContext);


    return (
        <>
            <section className="bnrsection">
                {banner === true ?
                <Container fluid>
                    <Row>
                        <Col className="p-0">
                            <img src="/img/bnr.jpg" alt="banner"/>
                        </Col>
                    </Row>
                </Container> :""
                }

                <Container>
                    <Row>
                        <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                            {props.user != undefined ?
                            <h1>Hi {props.user} Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1> :
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            }
                            <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leaFp into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Content;
