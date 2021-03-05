import React from "react";
import {FaRegRegistered, GiCardPick, ImProfile, RiLockPasswordFill, RiLoginBoxLine} from "react-icons/all";
import {PATH} from "../routes/Routes";

export const sidebarData = [
    {
        title: "Profile",
        path: PATH.PROFILE,
        icon: <ImProfile/>
    },
    {
        title: "Registration",
        path: PATH.REGISTRATION,
        icon: <FaRegRegistered/>
    },
    {
        title: "Restore password",
        path: PATH.RESTORE_PASSWORD,
        icon: <RiLockPasswordFill/>
    },
    {
        title: "Login",
        path: PATH.LOGIN,
        icon: <RiLoginBoxLine/>
    },
    {
        title: "Packs",
        path: PATH.PACKS,
        icon: <GiCardPick/>
    },

]