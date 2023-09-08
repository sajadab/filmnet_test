import {AnyAction} from "redux";
import {FilmResponseDataModel} from "@/core/network/model/FilmModel";

export const FILM_ACTION="FILM_ACTION"

interface FilmState {
    item: FilmResponseDataModel|null,
}

const initialFilmState: FilmState = {
    item: null,
};


export function filmReducer(state = initialFilmState, action: AnyAction) {
    switch (action.type) {
        case FILM_ACTION:
            return {
                item: action.item,
            };
        default :
            return state
    }
}