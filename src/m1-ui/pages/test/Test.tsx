import React from "react";
import CommonButton from "../../../common/c2-CommonButton/CommonButton";
import CommonInput from "../../../common/c1-CommonInput/CommonInput";
import CommonCheckbox from "../../../common/c3-CommonCheckbox/CommonCheckbox";
import style from "./Test.module.css"

export const Test = () => {
    return (
        <div className={style.test}>
            <CommonButton name={'test'}/>
            <CommonInput label={'Test'}/>
            <CommonCheckbox/>
        </div>
    )
}