import React from "react";
import a from "./dialoges.module.css";
import Dialoge from "./dialoge/dialoge";
import Message from "./messages/message";
import NewMessage from "./newMessage/newMessage";


const Dialoges = (props) => {
  let state=props.dialogsPage;
  let dialoge=state.dialogs.map(d=><Dialoge name={d.name} id={d.id} avaImg={d.avaImg}/>);
  let message=state.messages.map(m=><Message text={m.text}/>)
  



  return <div className={a.dialoges}>
    <div className={a.user}>
     {dialoge}
    </div>
    <div className={a.messages}>
      {message}
      <NewMessage SendMessage={props.SendMessage} onTextChange={props.onTextChange} newMessageText={state.newMessageText}/>
    </div>
  </div>
}
export default Dialoges;