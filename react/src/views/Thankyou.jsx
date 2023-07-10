import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";

function Thankyou() {
    return (
        <>
        <Header />
            <Container className="container-div">
                <Row>
                    <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                        <h2 className="heading">Thankyou...</h2>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    </Row>
                    </Container>

            <Footer />
        </>
    );
}

export default Thankyou;
