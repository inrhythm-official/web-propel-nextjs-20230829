import Navbar from "./Navbar";
import Auth from "./Auth";

export default function ProtectedLayout({children}) {
    return (
        <div className="container-xxl">
            <Auth>
                <Navbar />
                {children}
            </Auth>
        </div>
    );
}