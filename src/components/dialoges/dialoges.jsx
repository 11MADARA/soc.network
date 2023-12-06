import React from "react";
import a from "./dialoges.module.css";
import Dialoge from "./dialoge/dialoge";
import Message from "./messages/message";


const Dialoges = (props) => {
  let state=props.dialogsPage;
  let dialoge=state.dialogs.map(d=><Dialoge name={d.name} id={d.id} avaImg={d.avaImg}/>);
  let message=state.messages.map(m=><Message text={m.text}/>)
  let newMessageText=state.newMessageText;

  const SendMessage=()=>{
  props.SendMessage();
}

let onTextChange=(el) =>{
  let text=el.target.value;
  props.onTextChange(text);
}


  return <div className={a.dialoges}>
    <div className={a.user}>
     {dialoge}
    </div>
    <div className={a.messages}>
      {message}
      <div>
      <textarea onChange={onTextChange} value={newMessageText} ></textarea>
      <button onClick={SendMessage}>send</button>
    </div>
    </div>
  </div>
}
export default Dialoges;