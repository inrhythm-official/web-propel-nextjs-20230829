import Layout from '../common/Layout'
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <Layout>
            <div className="my-5 text-center">
                <h1 className="display-3">Welcome to ReadersList!</h1>
                <p className="lead">Helping readers plan their reading in an organized fashion.</p>
                <NavLink to="/sign-up"><button className="btn btn-primary">Sign Up</button></NavLink>
            </div>
        </Layout>

    );
}