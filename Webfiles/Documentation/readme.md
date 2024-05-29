baseURL: someblogagain.co.uk/

<h1> someblogagain.co.uk API Documentation </h1>

This is documentation what contains the API behind someblogagain.co.uk what I made with request headers you need to be able to send a request and retrieve data succesfully.

<h2>Authentication</h2>

When accessing restricted pages such as /home /profile and others you'll need to pass a Authorization cookie. You can get this via inspect element go to application, cookies then look at site cookes for Authorization.

<h3>/api</h3>

The /api URI contains access to numerous routes to login, create and so on all headers needed will be provided and the return values

<hr>

/api/login

Return Value

Success 200

COOKIES RESPONSE
{
    "cookie": "Authorization=[Token]"
}

JSON RESPONSE
{
    "status": true
}

<hr>

Errors

Unauthorised 403
error: Incorrect Account Number
error: Account Number is empty
error: Account number contains forbidden characters
error: Incorrect Account Number
