// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       {/* Add your login form and other components here */}
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import loginoptions from "../assets/loginoptions.png";
import logo from "../assets/cubeseed.png";
import styles from "@/styles/loginpage.module.scss";

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password, rememberMe);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.logincontainer}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" className={styles.logoimg} />
        </div>
        <div className={styles.title}>
          <h1 className={styles.titletext}>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginform}>
          <div className={styles.inputwrap}>
            <label className={styles.emaillabel}>Email:</label>

            <input
              className={styles.emailinput}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className={styles.inputwrap}>
            <label className={styles.passwordlabel}>Password:</label>
            <input
              className={styles.passwordinput}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className={styles.after_input}>
            <div className={styles.inputwrap_check}>
              <label className={styles.checklabel}>
                <input
                  className={styles.checkinput}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>

            <div className={styles.forgotpassword}>
              <a href="#" onClick={onForgotPassword} className={styles.forgotlink}>
                Forgot password?
              </a>
            </div>
          </div>

          <Link href="/login-page" legacyBehavior className={styles.loginbtn}>
            <a className={styles.button}>Login</a>
          </Link>

          <div className={styles.line}>
            <hr />
          </div>

          <div className={styles.or}>OR</div>

          {/* <div className="loginoptions">
          <AiFillGoogleCircle/>
          <BsFacebook/>
          <AiFillTwitterCircle/>
        </div> */}
          <div className={styles.loginoptions}>
            <Image src={loginoptions} alt="loginoptions" className={styles.optionsimg} />
          </div>

          <div className={styles.new}>
            <p className={styles.new_text}>New to CubeSeed? Get Started</p>
          </div>

          <div className={styles.links}>
            <a href="#help" className={styles.helplink}>
              Help
            </a>
            <a href="#privacy" className={styles.privacylink}>
              Privacy
            </a>
            <a href="#terms" className={styles.termslink}>
              Terms
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
