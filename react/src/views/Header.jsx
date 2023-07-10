import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
    return (
        <>
            <header className="main-header">
                <Container>
                    <Row>
                        <Col className="img-logo">
                            <img
                                src="/img/logo.png"
                                alt="logo"
                                style={{ height: "80px"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;
