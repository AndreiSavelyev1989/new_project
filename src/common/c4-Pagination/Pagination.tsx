import React, {useState} from "react";
import style from "./Pagination.module.css";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onCurrentPage: (pageNumber: any) => void
    portionSize: number
    isFetching: boolean
}

export const Pagination = (props: PaginationPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={style.pagination}>
            {portionNumber > 1 && <button
                onClick={() => setPortionNumber(portionNumber - 1)}
                disabled={props.isFetching}
                className={style.navigationButton}
            >Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <button
                    key={p}
                    className={props.currentPage === p
                        ? style.currentButton
                        : style.paginationButton
                    }
                    onClick={() => props.onCurrentPage(p)}
                    disabled={props.isFetching}
                >{p} </button>)}
            {portionCount > portionNumber && <button
                onClick={() => setPortionNumber(portionNumber + 1)}
                disabled={props.isFetching}
                className={style.navigationButton}
            >Next</button>}
        </div>
    )
}