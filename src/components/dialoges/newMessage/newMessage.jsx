import React from "react";
import { Field, Form } from "react-final-form";
import s from "./newMessage.module.css"
const NewMessage = (props) => {
    const onSubmit = (e) => {
        props.SendMessage();
    }
    const validate = (e) => {
        debugger;
        if (props.newMessageText !== e.newMessage) {
            props.onTextChange(e.newMessage)
        }
    }
    return <>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="newMessage"
                        render={({ input, meta }) => (
                            <div>
                                <textarea value={props.newMessageText} {...input} className={s.textarea} type="text" placeholder="Add New Message Text" requared="true"/>
                            </div>
                        )}
                    />
                    <button type="submit">Send</button>
                </form>
            )}
        />
    </>
}
export default NewMessage