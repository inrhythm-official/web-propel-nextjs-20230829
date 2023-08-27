import Cookie from 'js-cookie'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Auth({ children }) {
    const navigate = useNavigate();
    const isLoggedIn = Cookie.get('session')

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {!isLoggedIn && 'should redirect'}
            {children}
        </>
    );
}