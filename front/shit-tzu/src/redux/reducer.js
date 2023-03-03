 
import { ADD_FAVORITE, DELETE_FAVORITE,FILTER,ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacter: []
};


const reducer = (state = initialState,action ) => {
    switch(action.type) {
        case ADD_FAVORITE:
           return {
               ...state,
               myFavorites: [...state.allCharacter, action.payload],
               allCharacter: [...state.allCharacter,action.payload]
           }
           case DELETE_FAVORITE:
               return {
                   ...state,
                   myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
               }
           case FILTER:
               const allCharsFiltered = state.allCharacter.filter(char => char.gender === action.payload)
               return {
                   ...state,
                   myFavorites: allCharsFiltered
               }
            case ORDER:
                
                return{
                  ...state,
                  myFavorites:
                  action.payload === "Ascendente"
                  ? state.allCharacter.sort((a,b)=> a.id - b.id)
                  : state.allCharacter.sort((a,b)=> b.id - a.id)
                }
                

            default: return {
                    ...state
        }
    }
}

export default reducer;