import React from "react";
import s from "./Packs.module.css";

export const Packs = () => {
    return (
        <div className={s.table}>
            <h1 className={s.title}>Packs</h1>
            <div className={s.tableContainer}>
                <div className={s.tableItem}>Pack name</div>
                <div className={s.tableItem}>Cards count</div>
                <div className={s.tableItem}>Updated</div>
                <div className={s.tableItem}>Url</div>
                <div className={s.tableItem}>
                    <button>add</button>
                </div>
            </div>
        {/* mapped packs*/}
        </div>
    )
}