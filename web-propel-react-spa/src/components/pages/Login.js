import LoginForm from "../common/LoginForm";
import CenteredLayout from "../common/CenteredLayout";

export default function Login() {
    return (
        <CenteredLayout>
            <h1 className="mb-3 display-3 text-center">Login</h1>
            <LoginForm />
        </CenteredLayout>
    );
}