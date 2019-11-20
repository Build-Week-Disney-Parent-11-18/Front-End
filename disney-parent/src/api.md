ENDPOINTS -

BASE URL: https://disneyparentdb.herokuapp.com
AUTHORIZATION
Register (POST): /api/auth/register
Login (POST): /api/auth/login

USERS
Get all users (GET): /api/users


REQUESTS
Get all requests (GET): /api/requests
Get specific request by request id (GET): /api/requests/:request_id
Post new request by user id (POST): /api/users/:user_id/requests
Update request by request id (PUT): /api/requests/:request_id
Delete request by request id (DELETE): /api/requests/:request_id

COMMENTS
Get all comments (GET): /api/comments
Get all comments made by user by user id (GET): /api/users/:user_id/comments
Get all comments on specific request by request id (GET): /api/requests/request:_id/comments
https://disneyparentdb.herokuapp.com/api/requests/request:_id/comments

Get specific comment by comment id (GET): /api/comments/:comment_id

Post new comment (POST): /api/users/:user_id/requests/:request_id/comments
 - This one is subject to change. It currently will take the user that is POSTING the comment. Input would be appreciated.
Update a comment by comment id (PUT): /api/comments/:comment_id
Delete a comment (DELETE): /api/comments/:comment_id

DATA MODEL -
USER
{
"id":1,
"username":"LCoffelt",
"last_name":"Coffelt",
"first_name":"Lorraine",
"password":"$2y$10$zJK0mcAuGXVRQJupICZtm.4iFdbycMVHehNbby6sJ/t8mKtW6koYK",
"role":"volunteer",
"created_at":"2019-11-18T21:23:42.168Z",
"updated_at":"2019-11-18T21:23:42.168Z"
}

REQUEST
{
id":1,
"user_id":3,
"meeting_place":"Mad Tea Party",
"meeting_time":"10:45:00",
"number_of_kids":2,
"description":"childcare switch anyone?",
"created_at":"2019-11-18T21:23:42.175Z",
"updated_at":"2019-11-18T21:23:42.175Z"
}

COMMENT
{
"id":1,
"user_id":1,
"request_id":1,
"comment":"I'll be there!",
"created_at":"2019-11-18T21:23:42.182Z",
"updated_at":"2019-11-18T21:23:42.182Z"
}

{
    username: "lambda", // user_id: 3
    last_name: "Lambda",
    first_name: "Lambda",
    password: "$2b$10$OsR7Ui2ccJGldqdpOyF1BOCdqdwA6HEZWSRbKM2ojfATUe43DRPkq", // decrypted password: L4mbd4
    role: "volunteer"
 },
 {
    username: "AReinhardt", // user_id: 4
    last_name:  "Reinhardt",
    first_name: "Amie",
    password: "$2b$10$.lVS3YIWkrotmrOklD1fcOy0HcX0q.67kHmtLhgi0BeDsuaV5HbJq", // decrypted password: Daisei9ugoo
    role: "parent"
 },
 {
    username: "RMartin", // user_id: 5
    last_name:  "Martin",
    first_name: "Roy",
    password: "$2b$10$5RGHC1tSC2FWAS0Q5w0LIuGTvA5gW1VqqTELyLVeUtWk6Qn0eoIA2", // decrypted password: Aen4xaeyo6m
    role: "parent"
 }