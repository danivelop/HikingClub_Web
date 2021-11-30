/* External Dependencies */
import { combineEpics, Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

/* Internal dependencies */
import ActionTypes from 'stores/ActionTypes';
import * as editAPI from 'stores/apis/editAPI';

export const createRoadEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.REQUEST_CREATE_ROAD),
    mergeMap((action) => {
      return from(editAPI.createRoad(action.payload)).pipe(
        map((result: any) => result.data?.data),
        map((payload) => ({
          type: ActionTypes.REQUEST_CREATE_ROAD_SUCCESS,
          payload,
        })),
        catchError((payload) =>
          of({
            type: ActionTypes.REQUEST_CREATE_ROAD_ERROR,
            payload: payload.response.data,
          })
        )
      );
    })
  );

export const updateRoadEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.REQUEST_UPDATE_ROAD),
    mergeMap((action) => {
      return from(editAPI.updateRoad(action.payload)).pipe(
        map((result: any) => result.data?.data),
        map((payload) => ({
          type: ActionTypes.REQUEST_UPDATE_ROAD_SUCCESS,
          payload,
        })),
        catchError((payload) =>
          of({
            type: ActionTypes.REQUEST_UPDATE_ROAD_ERROR,
            payload: payload.response.data,
          })
        )
      );
    })
  );

export default combineEpics(createRoadEpic, updateRoadEpic);
