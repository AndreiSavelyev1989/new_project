import style from "./SettingsPacksPanel.module.css";
import React, {ChangeEvent} from "react";

type PropsType = {
    value: string
    onPrivatHandler: () => void
    onSearchPacksByName: (name: string) => void
    onSendSearchedPackName: () => void
}

export const SettingsPacksPanel: React.FC<PropsType> = (props) => {

    const onChangePrivatHandler = () => {
        props.onPrivatHandler()
    }

    const onPackNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onSearchPacksByName(e.currentTarget.value)
    }

    const onSendPackNameHandler = () => {
        props.onSendSearchedPackName()
    }

    return (
        <div className={style.settingsPackContainer}>
            <div>
                <input type={"checkbox"} onClick={onChangePrivatHandler}/><span>My packs</span>
            </div>
            <div className={style.input_style}>
                Search:
                <input  placeholder={'Pack name'} onChange={onPackNameHandler} value={props.value}/>
            </div>
            <button onClick={onSendPackNameHandler}>Search</button>
        </div>
    )
}