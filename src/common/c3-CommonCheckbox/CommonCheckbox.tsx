import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./CommonCheckbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    formikFieldsProps?: any
};

const CommonCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        formikFieldsProps,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {



    return (<div className={s.cbContainer}>
        <label>
            <input className={s.optionInput}
                type={"checkbox"}
                {...formikFieldsProps}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            /> Remember me
        </label>
        </div> // благодаря label нажатие на спан передастся в инпут
    );
}

export default CommonCheckbox;
