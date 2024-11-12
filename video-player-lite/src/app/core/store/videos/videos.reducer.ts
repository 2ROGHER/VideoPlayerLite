/**
 * This is the main (reducer) pure function that take the previous state and creates a new state
 * by the given old state without mutating the old state

 */

import { Action } from '@ngrx/store';
import { Video } from '../../../models/interfaces';
import { VideosAction } from './videos.actions';

// The state is a array of videos
const initialState: Video[] = [];

export const reducer = (
  state = initialState,
  // We need to use the destructuting feature
  {
    type,
    payload,
  }: {
    type: string; // define the data type for the (type & payload)
    payload: any;
  }
) => {
  switch (type) {
    case VideosAction.ADD:
      return
  }
};
