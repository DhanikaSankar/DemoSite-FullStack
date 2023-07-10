import React from "react";
import { Form } from "react-bootstrap";

const AddressForm = ({ indxVal, formik, address, onChange }) => {
  const handleInputChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div>
      <div className="mb-3">
        <Form.Label>Previous Address</Form.Label>
        <Form.Group className="mb-3" controlId={`${indxVal}.address1`}>
          <Form.Control
            type="text"
            // id={`${indxVal}.address1`}
            name={`${indxVal}.address1`}
            placeholder="Address line 1"
            className="mb-3"
            value={address.address1}
            onChange={(e) => handleInputChange("address1", e.target.value)}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched[indxVal]?.[`address1`] &&
              formik.errors[indxVal]?.[`address1`]
            }
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId={`${indxVal}.address2`}>
          <Form.Control
            // id={`${indxVal}.address2`}
            name={`${indxVal}.address2`}
            type="text"
            placeholder="Address line 2"
            className="mb-3"
            value={address.address2}
            onChange={(e) => handleInputChange("address2", e.target.value)}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched[indxVal]?.[`address2`] &&
              formik.errors[indxVal]?.[`address2`]
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId={`${indxVal}.address3`}>
          <Form.Control
            // id={`${indxVal}.address3`}
            name={`${indxVal}.address3`}
            type="text"
            placeholder="Address line 3"
            className="mb-3"
            value={address.address3}
            onChange={(e) => handleInputChange("address3", e.target.value)}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched[indxVal]?.[`address3`] &&
              formik.errors[indxVal]?.[`address3`]
            }
          />
        </Form.Group>
      </div>
    </div>
  );
};

export default AddressForm;
