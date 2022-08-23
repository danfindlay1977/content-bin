## Description

store videos and other digital content online.

## stack

postgress --> reddis --> expressJS --> reactJS/tailwind css

## functional requirments

| Req No | Req description                                                                       | Priority  |
| ------ | ------------------------------------------------------------------------------------- | --------- |
| 1      | Store videos information in database                                                  | must have |
| 1.1    | users can upload vidoes                                                               | must have |
| 1.2    | store video file in Gcloud storage bucket                                             | must have |
| 1.3    | update videos                                                                         | must have |
| 1.4    | delete videos                                                                         | must have |
| 1.5    | changes made to a video must be kept in sync beetween the storage bucket and database | must have |
| 2      | videos can be streamed                                                                | must have |

## to do list

-- basic CRUD operations for videos with tests
--ensure gcloud bucket is synced with database add in update and delete methods
-- add express error handling in app.js
-- controller for upload needs to handle adding mutiple files to the database
