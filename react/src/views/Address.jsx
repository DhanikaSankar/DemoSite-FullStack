import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    Link,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import axiosClient from "../axios-client";
import { newContext } from "../contexts/ContextProvider";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddressForm from "./AddressForm";
import { useFormik } from "formik";
import * as Yup from "yup";

function Address() {
    const { id } = useParams();

    const nav = useNavigate();
    const { user, setBanner } = useContext(newContext);

    useEffect(() => {
        setBanner(false);
    }, []);

    const [addressForms, setAddressForms] = useState([
        { address1: "", address2: "", address3: "" },
    ]);
    const userName = user.first_name;
    //   const id = user.user_id;

    const addAddressForm = () => {
        setAddressForms((prevForms) => [
            ...prevForms,
            { address1: "", address2: "", address3: "" },
        ]);
    };

    const removeAddressForm = (index) => {
        setAddressForms((prevForms) =>
            prevForms.filter((_, formIndex) => formIndex !== index)
        );
    };

    const handleInputChange = (index, field, value) => {
        setAddressForms((prevForms) => {
            const updatedForms = [...prevForms];
            updatedForms[index] = { ...updatedForms[index], [field]: value };
            return updatedForms;
        });
    };

    const onSubmit = (values) => {
        const payload = Object.keys(values).map((ind) => ({
            previous_address_1: values[ind].address1,
            previous_address_2: values[ind].address2,
            previous_address_3: values[ind].address3,
        }));

        // ... Handle form submission and API call

        axiosClient
            .post(`/address/${id}`, payload)
            .then(({ data }) => {
                // setUser(data.data.user);
                // setToken(data.data.token);
                nav("/thankyou");
            })
            .catch((err) => {

                const response = err.response;
                console.log(err);
                if (response && response?.status == 422) {
                }
            });
    };

    const handleBack = () => {
        nav("/Address-check");
    };

    //dynamic validation
    const validationSchema = useMemo(() => {
        const vds = {};
        addressForms.forEach(
            (e, i) =>
                (vds[i] = Yup.object().shape({
                    address1: Yup.string().required("This field is required"),
                    address2: Yup.string().required("This field is required"),
                    address3: Yup.string().required("This field is required"),
                }))
        );
        return Yup.object().shape(vds);
    }, [addressForms]);

    //dynamic initValues
    const initValues = useMemo(() => {
        const init = {};
        addressForms.forEach(
            (e, i) =>
                (init[i] = {
                    address1: "",
                    address2: "",
                    address3: "",
                })
        );
        return init;
    }, [addressForms]);

    //fomrik handler
    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
        enableReinitialize: true,
    });

    return (
        <>
            <Header />
            <Content user={userName} />
            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                <div className="formpart">
                    <Form onSubmit={formik.handleSubmit}>
                        <div id="slide04">
                            <h3>Enter your Previous Address</h3>

                            {Object.keys(formik.values).map((ind) => {
                                const value = formik.values[ind];
                                return (
                                    <AddressForm
                                        key={`${ind}-form-item`}
                                        formik={formik}
                                        indxVal={ind}
                                        address={value}
                                        onChange={(field, value) =>
                                            formik.setFieldValue(
                                                `${ind}.${field}`,
                                                value
                                            )
                                        }
                                    />
                                );
                            })}

                            <div id="submitoradd01" className={"show"}>
                                <Button
                                    type="submit"
                                    className="btn btn-success tothank"
                                >
                                    Submit
                                </Button>
                                <p>
                                    <a
                                        className="decoration"
                                        onClick={addAddressForm}
                                    >
                                        Add Another Address
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="decoration"
                                        onClick={handleBack}
                                    >
                                        &lt;&lt; Back
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Address;
