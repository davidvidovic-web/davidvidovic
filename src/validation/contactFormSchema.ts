import { contactUsIFormInput, IFormInput } from "@/types/form-dt";
import * as yup from "yup";

export const contactFormSchema: yup.ObjectSchema<IFormInput> = yup.object({
    name: yup.string().required("Name is required."),
    email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Email is required."),
    interested: yup.string().required("Please select a service."),
    budget: yup.string().required("Please select your budget."),
    website: yup.string().url("Please enter a valid website URL.").nullable(),
    message: yup.string().required("Please tell us how we can help."),
});

// Yup Validation Schema
export const contactUsSchema: yup.ObjectSchema<contactUsIFormInput> = yup.object({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Please enter a valid email address.").required("Email is required."),
    message: yup.string().required("Please write a message."),
});
