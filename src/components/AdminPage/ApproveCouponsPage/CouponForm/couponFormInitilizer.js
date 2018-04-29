// This file get excuted from <Formik render=""/> and recive form relevent functions as inputs.
// Simplly this define how to render Coupon Submit Form.

import React from "react";
import { Form, Divider, Button, Message, Icon } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

import { SInput, STextArea, SDropDown } from "./semanticUIWrappers";
import { linkUrlHandler } from "./couponFormHelpers";

// Main function witch define how form get rendered.
export default formikFunctions => {
  const ImageList = (
    <div className="couponImages">
      {formikFunctions.values.images &&
        formikFunctions.values.images.map((image, id) => {
          return (
            <div key={id}>
              <img
                src={image}
                alt=""
                onClick={e => {
                  formikFunctions.setValues({
                    ...formikFunctions.values,
                    imgUrl: e.target.src
                  });
                }}
              />
            </div>
          );
        })}
    </div>
  );

  return (
    <Form onSubmit={formikFunctions.handleSubmit}>
      <SInput
        label="Coupon/Deal Link"
        type="text"
        placeholder="Valid Coupon/Deal Link"
        name="linkUrl"
        loading={true}
        myBlur={linkUrlHandler}
        {...formikFunctions}
      />

      <Form.Group widths="equal">
        <SDropDown
          search
          selection
          label="Type"
          placeholder="Choose A Type"
          name="kind"
          {...formikFunctions}
        />
        <SInput
          label="Coupon Code"
          type="text"
          placeholder="Coupon Code"
          name="code"
          disabled={formikFunctions.values.kind === "deal"}
          {...formikFunctions}
        />
        <SInput
          label="Expiration Date"
          type="text"
          placeholder="Expiration Date"
          name="expiredAt"
          {...formikFunctions}
        />
        {/* <SDatePicker
          label="Expiration Date"
          placeholder="Expiration Date"
          control={DatePicker}
          className="couponForm_dataPicker"
          selected={formikFunctions.values.expiredAt}
          name="expiredAt"
          {...formikFunctions}
        /> */}
      </Form.Group>

      <SInput
        label="Title"
        type="text"
        placeholder="Enter Suitable Title For Coupon/Deal Here..."
        name="title"
        {...formikFunctions}
      />
      <STextArea
        label="Description"
        placeholder="Enter Details About Coupon Here..."
        name="description"
        {...formikFunctions}
      />
      <STextArea
        label="Exclution Details"
        placeholder="Enter Details About Coupon Exclution Here... (If Applicable)"
        name="exclutionDetails"
        {...formikFunctions}
      />

      <Divider horizontal>Additional Details</Divider>

      <SDropDown
        search
        selection
        allowAdditions
        label="Store"
        placeholder="Choose A Store From The List Or Add New One"
        name="store"
        loading={true}
        {...formikFunctions}
      />

      {ImageList}

      <SInput
        label="Coupon Image URL"
        type="text"
        placeholder="Select/Add Appopriate Image For This Coupon"
        name="imgUrl"
        loading={true}
        {...formikFunctions}
      />
      <SDropDown
        search
        selection
        multiple
        allowAdditions
        label="Categories"
        placeholder="Choose From List Or Add Suitable Categories"
        name="categories"
        loading={true}
        {...formikFunctions}
      />
      <SDropDown
        search
        selection
        multiple
        allowAdditions
        label="Tags"
        placeholder="Choose From List Or Add Suitable Tags"
        name="tags"
        loading={true}
        {...formikFunctions}
      />

      <div className="addCouponButton">
        <Button
          primary
          size="huge"
          type="submit"
          loading={formikFunctions.values.uploading}
        >
          Update Coupon
        </Button>
      </div>

      {formikFunctions.values.showMsg ? (
        formikFunctions.values.success ? (
          <Message positive icon>
            <Icon name="inbox" />
            <Message.Content>
              <Message.Header>Coupon Successfully Updated</Message.Header>
              <p>Approve/Delete Coupon On Main List</p>
            </Message.Content>
          </Message>
        ) : (
          <Message warning icon>
            <Icon name="inbox" />
            <Message.Content>
              <Message.Header>Coupon Update Failed</Message.Header>
              <p>Please Check Details and Try Again</p>
            </Message.Content>
          </Message>
        )
      ) : (
        ""
      )}
    </Form>
  );
};
