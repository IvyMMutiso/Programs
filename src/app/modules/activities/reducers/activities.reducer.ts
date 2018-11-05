import { ActivitiesActionType, ActivitiesListActions } from "../actions/activities.actions";
import { Activity } from "src/app/modules/activities/models/activity";

export interface ActivitiesState {
    activitiesList: Array<Activity>;
}

export const initialState: ActivitiesState = {
    activitiesList: null
};

export function activitiesReducer(state = initialState, action: ActivitiesListActions): ActivitiesState {
    switch (action.type) {
        case ActivitiesActionType.GetActivitiesList: {
            return {...state };
        }
        case ActivitiesActionType.GetActivitiesListSuccess: {
            return {...state, activitiesList: action.payload };
        }
        default: {
            return state;
        }
    }
}

// export const GetActivitiesList = (state: ActivitiesState) => state.activitiesList;
