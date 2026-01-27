//contact form type define
export interface IFormInput {
  name: string;
  email: string;
  interested: string;
  budget: string;
  website?: string | null;
  message: string;
}
//contact us form type define
export interface contactUsIFormInput {
    name: string;
    email: string;
    message: string;
}
//blog postbox form type define
export interface IPostboxForm {
    name: string;
    email: string;
    website?: string;
    comment: string;
}