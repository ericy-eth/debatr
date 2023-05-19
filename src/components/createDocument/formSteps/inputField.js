import { Form, Input } from "antd";
const FormItem = Form.Item;



export default function InputField({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }
}){
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <>
       <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Input />
    </FormItem>
    </>
 
  );
};

