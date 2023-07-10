import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { newContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initValues, validationSchema } from "./validations";
import { monthList } from "./common";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {
    const { setUser, setToken, setBanner } = useContext(newContext);
    useEffect(() => {
        setBanner(true);
    }, []);

    const [errors, setErrors] = useState({});

    const nav = useNavigate();
    //fomrik validation variable
    // const formik = useFormik({
    //     initialValues: initValues,
    //     validationSchema : validationSchema,
    //     onSubmit : onSumbit,
    //     enableReinitialize : true
    // })

    const onSumbit = (values) => {
        const payload = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
            day: values.dob_day,
            month: values.dob_month,
            year: values.dob_year,
        };

        // Request to server
        // setErrors(null);
        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                setUser(data.data.user);
                setToken(data.data.token);
                nav("/Address-check");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors);
                    // if (response.data.errors) {
                    //     setErrors(response.data.errors);
                    // } else {
                    //     setErrors({
                    //         name: [response.data.message],
                    //     });
                    // }
                    setErrors(response.data.errors || {});
                }
            });
    };

    const [submitform, setSubmitForm] = useState(true);

    //check if the errors exists in the file
    const CheckErrors = (formik) => {
        const firstPart = [
            "first_name",
            "last_name",
            "dob_day",
            "dob_month",
            "dob_year",
        ];
        const errorMessages =
            typeof errors === "object" && Object.keys(errors).length > 0 ? (
                Object.keys(errors).map((e) => <p key={e}>{errors[e]}</p>)
            ) : (
                <></>
            );
        if (
            submitform &&
            Object.keys(formik.errors).filter((item) =>
                firstPart.includes(item)
            ).length > 0 &&
            Object.keys(formik.touched).length === 5
        )
            return (
                <div className="alert">
                    {Object.keys(formik.errors)
                        .filter((item) => firstPart.includes(item))
                        .map((key) => (
                            <p key={key}>{formik.errors[key]}</p>
                        ))}
                    {errorMessages}
                </div>
            );
        else if (
            !submitform &&
            Object.keys(formik.errors).filter(
                (item) => !firstPart.includes(item)
            ).length > 0 &&
            Object.keys(formik.touched).length > 5
        )
            return (
                <div className="alert">
                    {Object.keys(formik.errors)
                        .filter((item) => !firstPart.includes(item))
                        .map((key) => (
                            <p key={key}>{formik.errors[key]}</p>
                        ))}
                    {errorMessages}
                </div>
            );
        return typeof errors === "object" && Object.keys(errors).length > 0 ? (
            <div className="alert">{errorMessages}</div>
        ) : (
            <></>
        );
    };

    return (
        <>
            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 detail-form">
                <div className="formpart detail-formpart">
                    {/* {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )} */}
                    <Formik
                        initialValues={initValues}
                        validationSchema={validationSchema}
                        onSubmit={onSumbit}
                    >
                        {(formik) => (
                            <Form>
                                {CheckErrors(formik)}
                                <div className={submitform ? "show" : "hide"}>
                                    <h3 className="title">
                                        Enter Your Personal Details
                                    </h3>
                                    {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                                    <div
                                        className="mb-3"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <label
                                            htmlFor="first_name"
                                            style={{
                                                marginBottom: "10px",
                                            }}
                                        >
                                            First Name
                                        </label>
                                        <Field
                                            id="first_name"
                                            name="first_name"
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                    </div>
                                    {/* </Form.Group> */}

                                    <div
                                        className="mb-3"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <label
                                            htmlFor="last_name"
                                            style={{
                                                marginBottom: "10px",
                                            }}
                                        >
                                            Last Name
                                        </label>
                                        <Field
                                            id="last_name"
                                            name="last_name"
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Enter Your Date of Birth</label>
                                        <fieldset>
                                            <legend> Date Of Birth</legend>

                                            <Row>
                                                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                                                    <Field
                                                        id="dob_day"
                                                        name="dob_day"
                                                        as="select"
                                                        placeholder="Select"
                                                        className="form-control"
                                                    >
                                                        <option value="">
                                                            Day{" "}
                                                        </option>
                                                        {Array.from(
                                                            { length: 31 },
                                                            (_, index) =>
                                                                index + 1
                                                        ).map((e) => (
                                                            <option
                                                                key={e}
                                                                value={e}
                                                            >
                                                                {e}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                </div>

                                                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <Field
                                                        id="dob_month"
                                                        name="dob_month"
                                                        as="select"
                                                        placeholder="Select"
                                                        className="form-control"
                                                    >
                                                        <option value="">
                                                            Month
                                                        </option>
                                                        {monthList().map(
                                                            (e) => (
                                                                <option
                                                                    key={
                                                                        e.index
                                                                    }
                                                                    value={
                                                                        e.index
                                                                    }
                                                                >
                                                                    {e.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <Field
                                                        id="dob_year"
                                                        name="dob_year"
                                                        as="select"
                                                        placeholder="Select"
                                                        className="form-control"
                                                    >
                                                        <option value="">
                                                            Year
                                                        </option>
                                                        {Array.from(
                                                            {
                                                                length:
                                                                    2002 -
                                                                    1910 +
                                                                    1,
                                                            },
                                                            (_, index) =>
                                                                1910 + index
                                                        ).map((e) => (
                                                            <option
                                                                key={e}
                                                                value={e}
                                                            >
                                                                {e}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                </div>
                                            </Row>
                                        </fieldset>
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            variant="warning"
                                            onClick={() => {
                                                // fieldsToValidate.forEach((e) => { formik.validateField(e)});
                                                formik.setTouched({
                                                    first_name: true,
                                                    last_name: true,
                                                    dob_day: true,
                                                    dob_month: true,
                                                    dob_year: true,
                                                });
                                                formik
                                                    .validateForm()
                                                    .then((value) => {
                                                        if (
                                                            Object.keys(
                                                                value
                                                            ).filter(
                                                                (e) =>
                                                                    ![
                                                                        "phone",
                                                                        "email",
                                                                    ].includes(
                                                                        e
                                                                    )
                                                            ).length === 0
                                                        )
                                                            setSubmitForm(
                                                                false
                                                            );
                                                    });
                                            }}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>

                                <div className={submitform ? "hide" : "show"}>
                                    <h3 className="title">
                                        Enter Your Contact Details
                                    </h3>
                                    <div
                                        className="mb-3"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <label
                                            htmlFor="email_address"
                                            style={{
                                                marginBottom: "10px",
                                            }}
                                        >
                                            Email Address
                                        </label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter email"
                                            className="form-control"
                                        />
                                    </div>

                                    <div
                                        className="mb-3"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <label
                                            htmlFor="email_address"
                                            style={{
                                                marginBottom: "10px",
                                            }}
                                        >
                                            Phone Number
                                        </label>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="phone"
                                            placeholder="Enter phone number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <Button variant="success" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;
