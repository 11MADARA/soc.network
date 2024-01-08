import React from "react";
import s from "./newPost.module.css"
import { Form, Field } from "react-final-form"
const NewPost = (props) => {
    
    const onSubmit = (e) => {
        props.AddPost();
        props.onTextChange("")
        e.NewPostText="";
    }
    const validate = (e) => {
        props.onTextChange(e.NewPostText)
    }
    return <div>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={s.container}>
                    <div className={s.head}>New Post</div>
                    <Field
                        name="NewPostText"
                        render={({ input, meta }) => (
                            <>
                                <textarea type="text" placeholder="Add New Post Text" className={s.textarea} required {...input}/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </>
                        )}
                    />
                    <button type="submit" className={s.button}>Add Post</button>
                    </div>
                </form>

            )}
        />


    </div>
}
export default NewPost;