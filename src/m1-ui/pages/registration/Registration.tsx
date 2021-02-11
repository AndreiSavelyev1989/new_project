import React from "react";
import style from "./../../../assets/style/Common.module.css";
import {useDispatch, useSelector} from "react-redux";
import {registrationTC} from "../../../m2-bll/redusers/registration-reducer";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../routes/Routes";
import {useFormik} from "formik";
import CommonButton from "../../../common/c2-CommonButton/CommonButton";
import CommonInput from "../../../common/c1-CommonInput/CommonInput";

type FormikErrorType = {
    email?: string
    password?: string
    passwordConfirm?: string
}

export const Registration = () => {
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistered)
    const error = useSelector<AppRootStateType, string | null>(state => state.registration.error)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
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
                errors.password = 'Password must be more than 7 characters ';
            }

            if (!values.passwordConfirm) {
                errors.passwordConfirm = 'Required';
            } else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'Password and Confirm Password must be equal'
            }
            return errors;
        },

        onSubmit: values => {
            if (values.password === values.passwordConfirm) {
                dispatch(registrationTC(values))
            }
        },
    })

    if (isRegistered) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <h1 className={style.title}>Registration</h1>
            <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <div className={style.error}>{error ? error : null}</div>

                <CommonInput
                    type={"text"}
                    label={"Email"}
                    error={error || formik.errors}
                    formikFieldsProps={{...formik.getFieldProps("email")}}/>

                {formik.touched.email && formik.errors.email ?
                    <div className={style.registrationError}>{formik.errors.email}</div> : null}

                <CommonInput
                    type={"password"}
                    label={"Password"}
                    formikFieldsProps={{...formik.getFieldProps("password")}}/>

                {formik.touched.password && formik.errors.password ?
                    <div className={style.registrationError}>{formik.errors.password}</div> : null}

                    <CommonInput
                        type={"password"}
                        label={"Confirm Password"}
                        formikFieldsProps={{...formik.getFieldProps("passwordConfirm")}}
                    />

                {formik.touched.passwordConfirm && formik.errors.passwordConfirm ?
                    <div className={style.registrationError}>{formik.errors.passwordConfirm}</div> : null}

                <CommonButton type={"submit"} name={"sign up"}/>
            </form>
        </div>
    )
}