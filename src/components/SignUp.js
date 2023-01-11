import React, {useEffect, useState} from 'react';
import styles from "../Styles/SignUp.module.css";
import {validate} from "../validate";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "../toast";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data , "signup"))
    }, [data, touched])

    const ChangeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }
    const FocusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('you signed up successfully', 'success');
        } else {
            notify('invalid data!', 'error');
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }
    return (
        <div className={styles.Container}>
            <form onSubmit={submitHandler} className={styles.Form}>
                <h1>Sign Up</h1>
                <div className={styles.inputBox}>
                    <label>Name: </label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} type="text"
                           name="name" value={data.name} onChange={ChangeHandler} onFocus={FocusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.inputBox}>
                    <label>Email: </label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                           type="text" name="email" value={data.email}
                           onChange={ChangeHandler} onFocus={FocusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.inputBox}>
                    <label> Password: </label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                           type="password" name="password" value={data.password}
                           onChange={ChangeHandler}
                           onFocus={FocusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.inputBox}>
                    <label>Confirm password: </label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type="password" name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={ChangeHandler} onFocus={FocusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.inputBox}>
                    <div className={styles.CheckBox}>
                        <label>I accept terms of privacy policy</label>
                        <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={ChangeHandler}
                               onFocus={FocusHandler}/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.Actions}>
                    <Link to={"/login"}>Login</Link>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;
