import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

//Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () =>{

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6,'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN],
                'You must select a Role: user / admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8,'Password is too short')
                .required('password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        '!password must match'
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = () => {
        alert('read user')
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}

                // *********** YUP validation Schema ***
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                  }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur, }) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Your username" />

                            {                               
                                errors.username && touched.username && 
                                (
                                    
                                    <ErrorMessage name="username" component='div' />
                                )
                            }

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

                            <label htmlFor="confirm">Password</label>
                            <Field 
                                id="confirm" 
                                name="confirm" 
                                placeholder="confirm password" 
                                type="password"
                            />

                            {                               
                                errors.confirm && touched.confirm && 
                                (
                                    
                                    <ErrorMessage name="confirm" component='div' />
                                )
                            }

                            <button type="submit">Register User</button>
                            {isSubmitting ? ( <p>Sending your credentials...</p>):null}
                        </Form>
                        )
                    }

            </Formik>
        </div>
    )
}

export default RegisterFormik;