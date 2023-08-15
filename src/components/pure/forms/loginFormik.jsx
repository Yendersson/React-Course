import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
            // *** initial values that the form will take
                initialValues={initialCredentials}
                // *********** YUP validation Schema ***
                validationSchema={loginSchema}
                // *** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials', values);
                    history('/profile')
                    // We save the data in the localstorage
                  }}
                >

                    {/* We obtain props from Formik */}

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur, }) => (
                            <Form>
                            <label htmlFor="email">Email</label>
                                <Field id="email" type="email" name="email" placeholder="example email@gmail.com" />

                                {
                                    errors.email && touched.email && 
                                    (
                                        <ErrorMessage name="email" component='div' />
                                    )
                                }

                                <label htmlFor="password">Password</label>
                                <Field 
                                    id="password" 
                                    name="password" 
                                    placeholder="password" 
                                    type="password"
                                />

                                {                               
                                    errors.password && touched.password && 
                                    (
                                        
                                        <ErrorMessage name="password" component='div' />
                                    )
                                }

                                <button type="submit">Login</button>
                                {isSubmitting ? ( <p>Login your credentials...</p>):null}
                            </Form>
                        )
                    }
            </Formik>
        </div>
    )
}

export default LoginFormik;