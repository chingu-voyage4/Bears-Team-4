// This file handle all the validation rules for couponSubmitForm

import yup from "yup";

const schema = yup.object().shape({
  linkUrl: yup
    .string()
    .required("Required")
    .url("Provided URL Is Not Valid"),
  kind: yup
    .string()
    .required("Required")
    .oneOf(["coupon", "deal"], "Must Be Either Coupon Or Deal"),
  code: yup.string().when("kind", {
    is: "coupon",
    then: yup.string().required("Required").min(5, "Must be a valid coupon code")
  }),
  expiredAt: yup.mixed().required("Required"),
  title: yup.string().required("Required").min(10, "Title should be at least 10 Characters Long"),
  description: yup.string().required("Required").min(20, "Description should be at least 20 Characters Long"),
  exclutionDetails: yup.string().min(5, "Exclution Details should be at least 5 Characters Long"),
  store: yup.string().required("Required"),
  imgUrl: yup.string().url("Provided URL Is Not Valid"),
  categories: yup.array().min(1, "Must have at least one category")
  // tags: [],
});

// Sub Scheme To "Only" Validate linkUrl
export const linkUrlValidator = yup.object().shape({
  linkUrl: yup
    .string()
    .required("Required")
    .url("Provided URL Is Not Valid")
});

export default schema;
