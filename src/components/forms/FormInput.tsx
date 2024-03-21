import { FormikHandlers } from 'formik'
import React, { FC, HTMLInputTypeAttribute } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

interface FormInputProps {
  label: string
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute
  onChange: FormikHandlers["handleChange"]
  onBlur: FormikHandlers["handleBlur"]
  value: string
  isError: boolean;
  error: string | undefined
}

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  isError,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? "text-red-500" : ""}>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur} />

      {isError ? (
        <div className="text-xs text-red-500">
          {error}
        </div>
      ) : null}

    </div>
  )
}

export default FormInput