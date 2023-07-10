import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name field is important "),
    last_name: Yup.string().required("Last Name field is important "),
    dob_day: Yup.string().required("Select dob day "),
    dob_month: Yup.string().required("Select dob month"),
    dob_year: Yup.string().required("Select dob year"),
    // email: Yup.string()
    //     .email("invalid email format")
    //     .required("Select dob year"),
    // phone: Yup.string().required("Select dob year"),
});

export const initValues = {
    first_name: "",
    last_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    email: "",
    phone: "",
};
