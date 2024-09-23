export default function Reducer(state,action){

    switch (action.type) {
        case "SET_TODO":
            return {
                ...state, todo:action.value
            }
        case "ADD_TODO": 
        return {
            ...state, todos: [...state.todos,action.todo], todo:""
        }
        case "CHANGE_THEME" :
        return {
            ...state, theme: action.theme 
        }
        default:
            return state;
    }
}