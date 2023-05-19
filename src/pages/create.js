import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Form as AntForm, Button } from "antd";

import Step1 from "@/components/createDocument/formSteps/step1";
import Step2 from "@/components/createDocument/formSteps/step2";
import Step3 from "@/components/createDocument/formSteps/step3";
import Navbar from "@/components/createDocument/navbar";

// tslint:disable-next-line:jsx-key
const pages = [<Step1/>, <Step2/>, <Step3/>]
const FormItem = AntForm.Item;

const MyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [state, setState] = useState({page:0})



   const submit = () => {
    console.log(formData);
    
    
  };

  const nextPage = () => setState(state => ({ page: state.page + 1 }));



  return (
    <>
    <Navbar step={state.page+1}/>
    <Formik
      initialValues={formData}
      onSubmit={submit}
    >
   

        
       {({ errors, touched, handleChange, handleBlur }) => (
        <>
    <Form >
            <div >
              {pages[state.page]}
              <FormItem>
                {state.page === pages.length - 1 ? (
                  <button type="primary" htmlType="submit">
                    create listing
                  </button>
                ) : (
                  <button type="primary" onClick={nextPage}>
                    next page
                  </button>
                )}
              </FormItem>
            </div>
          </Form>
       
            </>

          ) }
       
  
    
    </Formik>
    </>
  );
};

export default MyForm;
