baseURL: someblogagain.co.uk/

<h1> someblogagain.co.uk API Documentation </h1>

This is documentation what contains the API behind someblogagain.co.uk what I made with request headers you need to be able to send a request and retrieve data succesfully.

<h2>Authentication</h2>

When accessing restricted pages such as /home /profile and others you'll need to pass a Authorization cookie. You can get this via inspect element go to application, cookies then look at site cookes for Authorization.

<h3>/api</h3>

The /api URI contains access to numerous routes to login, create and so on all headers needed will be provided and the return values

<hr>

<b>/api/login</b>

Content-Type: application/json
JSON FORMAT
<br>
{
    <br>
    "accountNumber": [IntValue.AccountNumber]
    <br>
}
<br>
<b>Return Value</b>

Success 200

COOKIES RESPONSE<br>
{<br>
    "cookie": "Authorization=[Token]"
    <br>
}
<br>
JSON RESPONSE
{
    "status": true
}

<hr>

<b>Errors</b>

Unauthorised 403<br>
error: Incorrect Account Number<br>
error: Account Number is empty<br>
error: Account number contains forbidden characters<br>
error: Incorrect Account Number<br>

<hr>

<b>/api/create</b>

Content-Type: application/json
JSON FORMAT
<br>
{
    <br>
    "username": "String.Username"
    <br>
}
<br>

<b>Return Value</b>

Success 200

<br>
JSON RESPONSE
{
    "accountNumber": [IntValue.AccountNumber]
}

<hr>

<b>Errors</b>

Unauthorised 403<br>
error: You have not provided a username.<br>
error: User already exists<br>
error: You cannot use special characters

<hr>

<b>/api/logout</b>

Content-Type: application/json

<b>Return Value</b>

Success 200

<br>
JSON RESPONSE
<br>
{
    <br>
    "status": true
    <br>
}

<hr>

<b>/api/profile/userID</b>

Required Cookie: Authorization

<b>Return Value</b>

Success 200

<br>
JSON RESPONSE
{
    <br>
    "posts": [Array.Posts],
    <br>
}

<hr>

<b>Errors</b>

Unauthorised 403<br>
error: User does not exist.<br>
error: You're not authorized to this page.<br>

<hr>

<b>/api/getposts</b>

Required Cookie: Authorization
Content-Type: application/json

<b>JSON FORMAT</b>
<br>
{
    <br>
    "limit": [IntValue]
    <br>
}

<b>Return Value</b>
<br>
Success 200

JSON RESPONSE
{
    <br>
    "posts": [Array.Posts]
    <br>
}

<br>

<hr>

<b>Errors</b>

Unauthorised 403<br>
error: You're not authorized to this page.<br>