
import React from "react";
import s from "./users.module.css"
import profilePoto from "./../../neon-music-note-on-brick-wall-eps-10-vector-30103301.jpg"
import { NavLink } from "react-router-dom";
const Users=(props)=>{
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={s.nav}>
            {pages.map(p => {
                return <span  onClick={(e) => { props.onPageChange(p) }}>{(p<=props.currentPage+3&&p>=props.currentPage-3)&&<button className={(p === props.currentPage)?s.active:s.passive}>{p}</button>}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.box}>
                    <div >
                        <NavLink to={"/profile/"+u.id}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : profilePoto} />
                        </NavLink>
                    </div>
                    <div className={s.body}>
                        <div className={s.text}>{u.name}</div>
                        <div className={s.text}>location</div>
                    </div>
                    <div >
                        {u.followed ? <button className={s.button+' '+s.unfollow} onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button > : <button className={s.button+' '+s.follow} onClick={() => { props.follow(u.id) }}>FOLLOW</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
}


export default Users;