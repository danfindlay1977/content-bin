## Introduction

This is an early-stage prototype of an application to store and stream digital assets (currently videos ). This is the chain part of a future web3 project in the Defi space, which aims to change the way content creators own and distribute their assets online. Allowing them to keep ownership of their content whiles it can appreciate in value and still be shared with the world.

The project is still in the early stages of development and I am still looking for the correct name. Please contact me if you are interested in learning more or potentially collaborating with me

## Stack (off-chain)

postgress --> reddis --> expressJS --> reactJS/tailwind css

## Functional Requirments

| Req No | Req description                                                                      | Priority     |
| ------ | ------------------------------------------------------------------------------------ | ------------ |
| 1      | Store videos information in database                                                 | must have    |
| 1.1    | users can upload videos                                                              | must have    |
| 1.2    | store video file in Gcloud storage bucket                                            | must have    |
| 1.3    | update videos                                                                        | must have    |
| 1.4    | delete videos                                                                        | must have    |
| 1.5    | changes made to a video must be kept in sync between the storage bucket and database | must have    |
| 2      | videos can be streamed directly from the cloud bucket to the user interface          | must have    |
| 3      | Users can search for videos via name and description                                 | must have    |
| 3.1    | users can filter videos via length and viewer numbers                                | like to have |
