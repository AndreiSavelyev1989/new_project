import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {loginTC} from "../../../m2-bll/redusers/auth-reducer";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";
import CommonInput from "../../../common/c1-CommonInput/CommonInput";
import CommonButton from "../../../common/c2-CommonButton/CommonButton";
import style from "./../../../assets/style/Common.module.css";
import CommonCheckbox from "../../../common/c3-CommonCheckbox/CommonCheckbox";
import s from "./Login.module.css"

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch() //разобраться с useDispatch
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const error = useSelector<AppRootStateType, string | null>(state => state.auth.error)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length > 15) {
                errors.password = 'Password must be 15 characters or less';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be 8 characters or more ';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(loginTC(values))
        },
    })
    if (isLoggedIn) {
        return <Redirect to={"/"}/>
    }
    return (
        <div className={style.commonContainer}>
            <h1 className={style.title}>Login Here</h1>
            <div className={style.error}>{error ? error : null}</div>
            <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <CommonInput
                    type={"text"}
                    label={"Email"}
                    formikFieldsProps={{...formik.getFieldProps("email")}}/>
                {formik.touched.email && formik.errors.email ?
                    <div className={style.registrationError}>{formik.errors.email}</div> : null}

                <CommonInput
                    type={"password"}
                    label={"Password"}
                    formikFieldsProps={{...formik.getFieldProps("password")}}/>
                {formik.touched.password && formik.errors.password ?
                    <div className={style.registrationError}>{formik.errors.password}</div> : null}

                <div className={s.checkbox}>
                    <CommonCheckbox
                        type={"checkbox"}
                        formikFieldsProps={{...formik.getFieldProps("rememberMe")}}/>

                </div>

                <CommonButton type={"submit"} name={"Login"}/>
            </form>

        </div>
    )
}