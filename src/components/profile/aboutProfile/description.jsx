import React from "react";
import s from "./description.module.css"
import Preloader from "../../common/preloader/preloader"
import profilePoto from "../../../neon-music-note-on-brick-wall-eps-10-vector-30103301.jpg"
const Discription = (props) => {
    if(!props.profile){
        return<Preloader/>
    }
    return <div>
        <div>
        <img className={s.img} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
    </div>
    <img className={s.ava}src={(!props.profile.photos.large)?profilePoto:props.profile.photos.large}/>
        <div className={s.description}>{(props.profile.aboutMe==null)?"Hi, everyone! it's my work project)":props.profile.aboutMe}</div>
    </div>
}
export default Discription;