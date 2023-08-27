import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <div className="container-xxl">
            <Navbar />
            {children}
        </div>
    );
}