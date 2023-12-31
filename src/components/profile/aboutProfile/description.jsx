import React from "react";
import s from "./description.module.css"
import Preloader from "../../common/preloader/preloader"
import profilePoto from "../../../neon-music-note-on-brick-wall-eps-10-vector-30103301.jpg"
import landscape from "../../../Landscape-Color.jpg"
import ProfileStatus from "./profileStatus";
const Discription = (props) => {
    if(!props.profile){
        return<Preloader/>
    }
    return <div>
        <div>
        <img className={s.img} src={landscape} />
    </div>
    <img className={s.ava}src={(!props.profile.photos.large)?profilePoto:props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
}
export default Discription;