import { Activity } from "../models/activity";
import { ActivitiesActionType, ActivitiesListActions } from "../actions/activities.actions";


export interface State {
    activitiesList: Activity[];
}

export const initialState: State = {
    activitiesList: null
};

export function activitiesReducer(state = initialState, action: ActivitiesListActions): State {
    switch (action.type) {
        // case ActivitiesActionType.GetActivitiesList: {
        //     return {...state, activitiesList: action.payload };
        // }
        case ActivitiesActionType.GetActivitiesListSuccess: {
            return {...state, activitiesList: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const GetActivitiesList = (state: State) => state.activitiesList;
