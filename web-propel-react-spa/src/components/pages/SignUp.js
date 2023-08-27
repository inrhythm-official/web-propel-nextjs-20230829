import React from 'react';
import CenteredLayout from "../common/CenteredLayout";
import SignUpForm from "../common/SignUpForm";

export default function SignUp() {
    return (
        <CenteredLayout>
            <h1 className="display-3 text-center">Sign Up</h1>
            <SignUpForm />
        </CenteredLayout>
    );
}