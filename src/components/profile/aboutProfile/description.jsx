import React from "react";
import s from "./description.module.css"
const Discription = (props) => {
    return <div>
        <div>
        <img className={s.img} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
    </div>
        <div className={s.ava}>Hi, everyone! it's my work project)</div>
    </div>
}
export default Discription;