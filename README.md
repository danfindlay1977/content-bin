## Description

store videos and other digital content online.

## stack

postgress --> reddis --> expressJS --> reactJS/tailwind css

## functional requirments

| Req No | Req description          | Priority  |
| ------ | ------------------------ | --------- |
| 1      | Store videos in database | must have |
| 1.1    | users can upload vidoes  | must have |
| 2      | videos can be streamed   | must have |

## to do list

-- basic CRUD operations for videos with tests
--ensure gcloud bucket is synced with database add in update and delete methods
-- add express error handling in app.js
-- controller for upload needs to handle adding mutiple files to the database
