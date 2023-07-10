import React, { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { newContext } from "../contexts/ContextProvider";

function AddressCheck() {
  const { user, setBanner } = useContext(newContext);
  useEffect(() => {
    setBanner(false);
  }, []);

  const userName = user.first_name;
  const id = user.user_id;
  const nav = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value == "Yes") {
      nav(`/address/${id}`);
    } else nav("/thankyou");
  };

  return (
    <>
      <Header />
      <Content user={userName} />
      <Container>
        <Row>
          <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
            <div className="formpart">
              <div id="slide03" style={{ display: "block" }}>
                <h3>Do you have a Previous Address?</h3>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="address"
                    value="Yes"
                    id="flexRadioDefault1"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label next02"
                    for="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="address"
                    value="No"
                    id="flexRadioDefault2"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label tothank"
                    for="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AddressCheck;
