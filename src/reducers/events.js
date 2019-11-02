import { READ_EVENTS, DELETE_EVENTS, READ_EVENT, UPDATE_EVENTS, CREATE_EVENTS } from "../actions";
import _ from "lodash";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case READ_EVENT:
    case UPDATE_EVENTS:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
