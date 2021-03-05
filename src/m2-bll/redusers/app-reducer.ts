export type AppStateType = {
    payload: {
        isInitialized: boolean
    }
}

const initialState: AppStateType = {
    payload: {
        isInitialized: false,
    }
}

//actions
export type ActionsType = ReturnType<typeof setIsInitializedApp>


export const appReducer = (state: AppStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "app/SET_INITIALIZED_APP":
            return {
                ...state,
                isInitialized: action.payload
            }
        default:
            return state
    }
}

export const setIsInitializedApp = (isInitialized: boolean) => ({
    type: "app/SET_INITIALIZED_APP",
    payload: isInitialized
} as const)
