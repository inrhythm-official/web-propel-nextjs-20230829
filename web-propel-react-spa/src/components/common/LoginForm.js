import React from 'react'
import {Formik} from "formik"
import Cookie from 'js-cookie'
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import * as yup from 'yup'
import {useNavigate} from "react-router-dom";

const validationSchema = yup.object().shape({
    email: yup .string() .email('Please enter a valid email address.') .required('Email is required'),
    password: yup.string().required('Password is required')
});

function LoginForm() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{email: 'test', password: ''}}
            validationSchema={validationSchema}
            onSubmit={async ({email, password}, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    let res = await fetch('http://localhost:4000/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({email, password})
                    })
                    res = await res.json()
                    localStorage.setItem('token', res.token);
                    Cookie.set('session', res.token)
                    navigate('/dashboard')
                } catch (e) {
                   console.log(e)
                }
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={handleChange} value={values.email}/>
                        <Form.Text className="text-danger">
                            {errors.email && touched.email && errors.email}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} value={values.password}/>
                        <Form.Text className="text-danger">
                            {errors.password && touched.password && errors.password}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;