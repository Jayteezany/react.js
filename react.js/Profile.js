import React from "react"


export default function Profile(props) {
  return (
    <>
    <article className="p-5 bg-white rounded-lg shadow shadow-emerald-300">
      <img src={props.owner.avatar_url} 
      alt={props.owner.login/>
      className="w20 h-20 rounded-full shadow"
    
      <div>
        <h2>{props.owner.login}</h2>
        <p>{props.name}</p>
        {props.private ? <p>Private</p> : <p>Public</p>}
      </div>

      <div>
        <p>This repository was created on {""}
        {formated(newDate(props.crated_at), "dd MM YYYY")} by {""}
        {props.owner.login}
      </p>
      </div>
    </article>
    </>
  )
}
 