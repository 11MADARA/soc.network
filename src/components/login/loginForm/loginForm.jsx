import React, { useState } from "react";
import s from "./loginForm.module.css"
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from 'final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { LoginTC } from "../../../redux/authReducer";
let LoginForm = (props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const onSubmit = async e => {
        setIsButtonDisabled(true)
        try {
            await props.LoginTC(e.Email, e.Password, e.RememberMe);
        } catch (error) {
            setIsButtonDisabled(false);
            return { [FORM_ERROR]: error };
        } 
    }
    const validate = (e) => {

    }
    const initialData = ({
        Email: ""
    })
    return (
        <div>
            <section className={s.section}>
                <div className={s.h1}>
                    Login
                </div>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialData}
                    render={({ submitError, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="Email"
                                    render={({ input, meta }) => (
                                        <div className={s.inputbox}>
                                            <input className={s.input} {...input} type="email" required />
                                            <div className={s.label}>Email</div>
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                            <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
                                        </div>
                                    )}
                                />
                            </div>
                            <div>
                                <Field
                                    name="Password"
                                    render={({ input, meta }) => (
                                        <div className={s.inputbox}>
                                            <input className={s.input} {...input} type="password" required />
                                            <div className={s.label}>Password</div>
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                            <FontAwesomeIcon className={s.icon} icon={faLock} />
                                        </div>
                                    )}
                                />
                            </div>
                            <div>
                                <Field
                                    name="RememberMe"
                                    render={({ meta, input }) => (
                                        <div className={s.RemContainer}>
                                            <input {...input} type="checkbox" className={s.checkbox} />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                            <label className={s.Remember}>Rememder Me</label>
                                            <a href="#" className={s.Forget}>Forget Password</a>
                                        </div>
                                    )}
                                />
                            </div>
                            {submitError && <div className={s.error}>{submitError}</div>}
                            <button disabled={isButtonDisabled} className={s.login} type="submit">Log in</button>
                            <div className={s.RegContainer}>
                                <label className={s.RegLabel}>Don't have a acount</label>
                                <a href="#" className={s.Register}>Register</a>
                            </div>
                        </form>
                    )} />
            </section>
        </div>
    )
}

export default connect(null, { LoginTC })(LoginForm);