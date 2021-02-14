export type stateType = {
    collapsed: boolean
}
export type actionType = {
    type: string
}
export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE"

export const reducer = (state: stateType, action: actionType): stateType => {

    switch (action.type) {
        case TOGGLE_COLLAPSE:
            const CopyState = {...state}
            CopyState.collapsed = !state.collapsed
            return CopyState

        default: throw new Error("Wrong actions type")
    }
    return state
}