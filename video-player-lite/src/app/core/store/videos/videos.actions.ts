/**
 * This module contains the actions class used to register actions types and
 * the actions to dispatched anywhere in the entire application.
 */
import { Injectable } from '@angular/core';
import { CustomAction, Video } from '../../../models/interfaces';

@Injectable()
export class VideosAction {
  // We need to define static attributes
  public static ADD = '[Video Add] ADD VIDEO';
  public static REMOVE = '[Video Remove] REMOVE VIDEO';
  public static UPDATE = '[Video Update] UPDATE VIDEO';
  public static ADD_TO_FAVORITES =
    '[Video Add Favorites] ADD VIDEO TO FAVORITES';
  public static CREATE_NEW_VIDEO = '[Video Create] CREATE VIDEO';

  public addVideoAction(video: Video): CustomAction {
    return {
      type: VideosAction.ADD,
      payload: video,
    };
  }

  removeVideoAction(id: string): CustomAction {
    return {
      type: VideosAction.REMOVE,
      payload: id,
    };
  }

  updateVideoAction(id: string, video: Video): CustomAction {
    return {
      type: VideosAction.UPDATE,
      payload: {
        id, // ID needed for search the video udpated
        video, // video with fields to update },
      },
    };
  }

  addToFavoritesAction(id: string): CustomAction {
    return {
      type: VideosAction.ADD_TO_FAVORITES,
      payload: id, // ID needed for search the video to add to favorites list
    };
  }

  createNewVideoAction(video: Video): CustomAction {
    return {
      type: VideosAction.CREATE_NEW_VIDEO,
      payload: video, // A new Video Object to create a new video to list
    };
  }
}
