import React from "react";
import { creareUser, deleteById, getAllPagedUsers, getAllUsers, getUserById, login, updateUser } from "../../services/axiosCRUDService";
import { Formik, Field, Form, ErrorMessage } from "formik";
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

const AxiosCrudExample = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    //email: eve.holt@reqres.in
    //password: cityslicka
    const authUser = (values) => {
        login(values.email, values.password)
        .then((response) => {
            if (response.data.token) {
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token', response.data.token)
            } else {
                sessionStorage.removeItem('token');
                throw new Error('Login failure');
            }
        })
        .catch(error => {
            alert(`Something went wrong: ${error}`)
            sessionStorage.removeItem('token');
        }) 
        .finally(_=> console.log('Login done'))
    }

    //CRUD EXAMPLE
    const obtainAllUsers = () => {
        getAllUsers()
        .then(response => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error('User not found')
            }
        })
        .catch(err=> alert(`Something went wrong ${err}`));
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
        .then(response => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error('Users not found in page')
            }
        })
        .catch(err=> alert(`Something went wrong ${err}`));
    }

    const obtainUserByID = (id) => {
        getUserById(id)
        .then(response => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error('User not found')
            }
        })
        .catch(err=> alert(`Something went wrong ${err}`));
    }

    const createNewUser = (name, job) => {
        creareUser(name, job)
            .then(response => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
            .catch(err => alert(`something went wrong ${err}`))
    }

    const updateUserById = (id, name, job) => {
        updateUser(id, name, job)
            .then(response => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
            .catch(err => alert(`something went wrong ${err}`))
    }

    const deleteUserByID = (id) => {
        deleteById(id)
        .then(response => {
            if (response.status === 204) {
                alert("User delete 2")
            } else {
                throw new Error('User not found')
            }
        })
        .catch(err=> alert(`Something went wrong ${err}`));
    }

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
                    authUser(values)
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

            {/*Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get all Users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get all Users (Page 1) with Axios
                </button>
                <button onClick={() => obtainUserByID(1)}>
                    Get Users by id (user 1) with Axios
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Create Users with Axios
                </button>
                <button onClick={() => updateUserById(2, 'morpheus', 'zion resident')}>
                    Update Users by id (user 2) with Axios
                </button>
                <button onClick={() => deleteUserByID(2)}>
                    delete User by id with Axios
                </button>
            </div>
        </div>
    )
}

export default AxiosCrudExample;