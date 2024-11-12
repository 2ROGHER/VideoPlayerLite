/**
 * This file controls the (types) of the DataSource implemented by
 * the application.
  */

import { Action } from "@ngrx/store";

// Video types
export interface Video {

};
// One method to declare an data type
export type CustomActionType =  {
  payload: any;
}
// Or this one method to declare a custom dat type
// We need to extends to Action by (@ngrx/store)
export interface CustomAction extends Action {
  type: string;
  payload: any;
}
