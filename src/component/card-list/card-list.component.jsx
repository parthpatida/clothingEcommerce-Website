import { Component } from "react";
import "./card-list.style.css";

const CardList=({monsters})=> {
    return (
      <div className="card-list">
        {monsters.map((monster) => {
            const{id,email,name}=monster
          return (<div className="card-container" key={id}>
            <img alt={`${monster.name} image`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h1>{name}</h1>
            <h4>{email}</h4>
            </div>)
        })}
      </div>
    );
  
}
export default CardList;
