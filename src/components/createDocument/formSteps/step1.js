import { Field } from "formik";
import  InputField  from "./inputField";
export default function Step1(){

    return(
        
        <>
    <Field name="name" placeholder="Name" component={InputField} />
    <Field name="category" placeholder="Category" component={InputField} />
    <Field
      name="description"
      placeholder="Description"
      component={InputField}
    />
  </>
    )

}