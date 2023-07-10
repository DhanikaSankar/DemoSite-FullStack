import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <Container>
                    <Row>
                        <Col>
                            <h5>Lorem Ipsum is simply dummy text</h5>
                            <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.{" "}
                            </p>
                            <p>
                                It has survived not only five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <p>Copyright@2022</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
