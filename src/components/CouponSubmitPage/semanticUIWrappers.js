import React from "react";
import { Form, Dropdown, Label, Input } from "semantic-ui-react";
import moment from "moment";

// Wrapper compoent for Semantic UI Input. Simplly inject Formik relevent functions to component.
export const SInput = props => {
  const { values, errors, touched, handleChange, handleBlur } = props;
  const { label, type, name, placeholder, disabled, myBlur, loading } = props;

  return (
    <Form.Field fluid="true" error={Boolean(touched[name] && errors[name])}>
      <label>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={e => {
          handleChange(e);
        }}
        onBlur={e => {
          handleBlur(e);
          // This only get executed for component that provided "myBlur". (In this case linkUrl Component Only)
          if (myBlur) {
            myBlur(e.target.value, props);
          }
        }}
        loading={loading && Boolean(values.linkUrlLoading || false)}
        name={name}
        value={values[name]}
        disabled={disabled}
      />
      {touched[name] &&
        errors[name] && (
          <Label basic color="red" pointing="above">
            {errors[name]}
          </Label>
        )}
    </Form.Field>
  );
};

// Wrapper compoent for Semantic UI Cutom Control Input. (3rd Party) Simplly inject Formik relevent functions to component.
export const SDatePicker = props => {
  const { values, errors, touched, setFieldValue, setFieldTouched } = props;
  const { label, name, selected, control } = props;

  return (
    <div className={"datepickerWrapper datepickerWrapper_error"}>
      <Form.Field
        fluid="true"
        label={label}
        control={control}
        className={control}
        selected={selected}
        placeholderText="Expire Date"
        minDate={moment()}
        /* In here using setFieldValue()/setFieldTouched() instead of handleChange()/handleBlur() because
           DropDown UI component send custom element when changed. So we manually extract relevent value from it and
           set it as a value of the field.
        */
        onChange={(e, data) => {
          setFieldValue(name, e);
        }}
        onBlur={(e, data) => {
          setFieldTouched(name, true, true);
        }}
        name={name}
        value={values[name]}
        error={Boolean(touched[name] && errors[name])}
      />
      {touched[name] &&
        errors[name] && (
          <Label basic color="red" pointing="above">
            {errors[name]}
          </Label>
        )}
    </div>
  );
};

// Wrapper compoent for Semantic UI DropDown. Simplly inject Formik relevent functions to component.
// Must provide label, name, placeholder,
export const SDropDown = props => {
  const { values, errors, touched, setFieldValue, setFieldTouched } = props;
  const {
    label,
    name,
    placeholder,
    search,
    selection,
    multiple,
    allowAdditions,
    loading
  } = props;

  // Handle what to do when user added new item to list. (Simpply update option list for that list)
  const handleAddition = (e, { value }) => {
    setFieldValue("dropDownListItems", {
      ...values.dropDownListItems,
      [name]: [
        ...values.dropDownListItems[name],
        { key: value, text: value, value: value }
      ]
    });
  };

  return (
    <Form.Field fluid="true">
      <label>{label}</label>
      <Dropdown
        // Options list automatically loadedd from initial state in values.
        options={values.dropDownListItems[name]}
        placeholder={placeholder}
        search={search}
        selection={selection}
        multiple={multiple || false}
        allowAdditions={allowAdditions}
        // Give user ability to add custom data to list.
        onAddItem={handleAddition}
        /* In here using setFieldValue()/setFieldTouched() instead of handleChange()/handleBlur() because
           DropDown UI component send custom element when changed. So we manually extract relevent value from it and
           set it as a value of the field.
        */
        onChange={(e, data) => {
          setFieldValue(name, data.value);
        }}
        onBlur={(e, data) => {
          setFieldTouched(name, true, true);
        }}
        loading={loading && Boolean(values.linkUrlLoading || false)}
        name={name}
        value={values[name]}
        error={Boolean(touched[name] && errors[name])}
      />
      {touched[name] &&
        errors[name] && (
          <Label basic color="red" pointing="above">
            {errors[name]}
          </Label>
        )}
    </Form.Field>
  );
};

// Wrapper compoent for Semantic UI TextArea. Simplly inject Formik relevent functions to component.
// Must provide label, name, placeholder,
export const STextArea = props => {
  const { values, errors, touched, setFieldValue, setFieldTouched } = props;
  const { label, name, placeholder } = props;

  return (
    <Form.Field fluid="true">
      <Form.TextArea
        label={label}
        placeholder={placeholder}
        onChange={(e, data) => {
          setFieldValue(name, data.value);
        }}
        onBlur={(e, data) => {
          setFieldTouched(name, true, true);
        }}
        name={name}
        value={values[name]}
        error={Boolean(touched[name] && errors[name])}
      />
      {touched[name] &&
        errors[name] && (
          <Label basic color="red" pointing="above" className="textAreaLabel">
            {errors[name]}
          </Label>
        )}
    </Form.Field>
  );
};
