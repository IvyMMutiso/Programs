import {
  ActivitiesActionType,
  ActivitiesListActions
} from "../actions/activities.actions";
import { Activity } from "src/app/modules/activities/models/activity";

export interface ActivitiesState {
  activitiesList: Array<Activity>;
}

export const initialState: ActivitiesState = {
  activitiesList: null
};

export function activitiesReducer(
  state = initialState,
  action: ActivitiesListActions
): ActivitiesState {
  switch (action.type) {
    case ActivitiesActionType.GetActivitiesList: {
      return { ...state };
    }

    case ActivitiesActionType.GetActivitiesListSuccess: {
      return { ...state, activitiesList: action.payload };
    }

    case ActivitiesActionType.AddActivity:
    case ActivitiesActionType.AddActivitySuccess: {
        return { ...state, activitiesList: { ...state.activitiesList, ...action.payload } };
    }

    case ActivitiesActionType.DeleteActivity: {
      const foundActivity = state.activitiesList.find(activity => activity.id === action.payload);

      const newList = [...state.activitiesList];
      newList.splice(newList.indexOf(foundActivity), 1);

      return { ...state, activitiesList: newList };
    }

    default: {
      return state;
    }
  }
}

export const getActivities = (state: ActivitiesState) => state.activitiesList;
