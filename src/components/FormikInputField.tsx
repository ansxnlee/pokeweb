import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type FormikInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
}

export const FormikInputField: React.FC<FormikInputFieldProps> = ({ 
  label, 
  size:_, // renaming to '_' since we won't use size
  ...props 
}) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={!!meta.error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null }
    </FormControl>
  );
}