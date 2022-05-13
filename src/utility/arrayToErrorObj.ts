import { FieldError } from "../generated/graphql";

// helper fn for displaying user register/login errors with formik
export const arrayToErrorObj = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
}