
import React from "react";
import s from "./users.module.css"
import profilePoto from "./../../219983.png"
const Users=(props)=>{
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    debugger;
    return <div>
        <div>
            {pages.map(p => {
                return <span className={p === props.currentPage && s.selected} onClick={(e) => { props.onPageChange(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.box}>
                    <div >
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : profilePoto} />
                    </div>
                    <div className={s.body}>
                        <div>{u.name}</div>
                        <div>location</div>
                    </div>
                    <div className={s.button}>
                        {u.follow ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button > : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
}


export default Users;