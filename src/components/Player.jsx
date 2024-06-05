import { useState } from "react";
export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    let editEle=<span className="player-name">{playerName}</span>;

    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        editEle=<input type="text" required value={playerName} onChange={handleChange}/>
    }
return(
    <li className={isActive? 'active':undefined}>
        <span className="player">
            {editEle}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
    </li>
);
}