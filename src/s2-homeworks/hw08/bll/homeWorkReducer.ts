import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
                const newState = [...state]
            return newState.sort((a, b) => {
                if( a.name < b.name){
                    return action.payload === 'down' ? 1 : -1
            }
                if(a.name > b.name){
                    return action.payload === 'down' ? -1 : 1}
                else{return 0}
            })
        }
        case 'check': {
            const newState = [...state]
            return newState.filter((i) => i.age >= action.payload)
        }
        default:
            return state
    }
}
