const initState = {
    themeId: 1,
}

type changeThemeIdAC = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdAC): { themeId: number } => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAC => ({type: 'SET_THEME_ID', id}) // fix any
