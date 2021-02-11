import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./CommonButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    error?: string
    name: string
}

const CommonButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        error,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    return (
        <button
            className={s.btn}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{restProps.name}</button>
    );
}

export default CommonButton;
