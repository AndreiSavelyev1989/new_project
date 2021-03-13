import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/state/store";
import {CardsPackInitialStateType, setCheckedCount} from "../../../../m2-bll/redusers/pack-reducer";

const useStyles = makeStyles({
    root: {
        width: 300
    },
});

export const RangeSlider = () => {

    const classes = useStyles();

    const dispatch = useDispatch()
    const {minCardsCount, maxCardsCount} = useSelector<AppRootStateType, CardsPackInitialStateType>(state=> state.packs)
    const value = useSelector<AppRootStateType, number[] | number>(state => state.packs.checkedCount)

    const valuetext = (value: number) => {
        return `${value}`;
    }

    const handleChange = (event: any, newValue: number[] | number) => {
        dispatch(setCheckedCount(newValue));
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Count packs
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={minCardsCount}
                max={maxCardsCount}
            />
        </div>
    );
}