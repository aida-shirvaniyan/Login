import React, {useEffect, useState} from 'react';
import styles from "../Styles/SignUp.module.css";
import {Link} from "react-router-dom";
import {validate} from "../validate";
import {notify} from "../toast";
import {ToastContainer} from "react-toastify";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    useEffect(() => {
        setErrors(validate(data , "login"))
    }, [data, touched])

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }
    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('you logged in successfully', 'success');
        } else {
            notify('invalid data!', 'error');
            setTouched({
                email: true,
                password: true,
            })
        }
    }
    return (
        <div className={styles.Container}>
            <form onSubmit={submitHandler} className={styles.Form}>
                <h1>Login</h1>
                <div className={styles.inputBox}>
                    <label>Email:</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.inputBox}>
                    <label>Password:</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password"
                        value={data.password}
                        name="password"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.Actions}>
                    <Link to={"/signup"}>Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;
