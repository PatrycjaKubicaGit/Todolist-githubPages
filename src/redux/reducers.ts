import { combineReducers } from 'redux';
import { Item } from '../components/interfaces/Item';
import { ActivityListProps } from '../components/interfaces/ActivityListProps';
import { AddActivityProps } from '../components/interfaces/AddActivityProps';
import {FilterProps } from '../components/interfaces/FilterProps'; 


interface ActivityListState {
  items: (string | Item)[];
}

interface AddActivityState {
  newItem: string;
  isDaily: boolean;
}

interface FilterState {
  filter: string;
}

const initialActivityListState: ActivityListState = {
  items: [],
};

const initialAddActivityState: AddActivityState = {
  newItem: '',
  isDaily: false,
};

const initialFilterState: FilterState = {
  filter: '',
};

const activityListReducer = (
  state: ActivityListState = initialActivityListState,
  action: any
): ActivityListState => {
  return state;
};

const addActivityReducer = (
  state: AddActivityState = initialAddActivityState,
  action: any
): AddActivityState => {
  return state;
};

const filterReducer = (
  state: FilterState = initialFilterState,
  action: any
): FilterState => {
  return state;
};

// Kombinacja wszystkich reducerów
const rootReducer = combineReducers({
  activityList: activityListReducer,
  addActivity: addActivityReducer,
  filter: filterReducer,
});

export default rootReducer;