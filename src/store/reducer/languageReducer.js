const defaultState = [];

const ADD_CARD = 'ADD_CARD';

export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const languageReducer = (state = defaultState, action) => {
    if (action.type = ADD_CARD) {
        return [...state, {
            ...action.payload,
            id: Date.now()
        }]
    } else {
        return state
    }
}
