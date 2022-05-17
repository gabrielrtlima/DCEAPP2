import Header from "../../components/Header";

import './index.css';
import FormLogin from "../../components/FormLogin";

const Login = () => {
    return(
        <>
            <div className="home-body">
                <Header />
                <div className="home-container">
                    <h1>ENTRAR</h1>
                    <div className="home-card-container" id="login-card">
                        <FormLogin />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;