# yardsale-client
Yard Sale is a website that provides users a destination to buy/sell/trade used winter sports equipment.

## Link to yardsale-client deployed site
https://nickwilkerson.github.io/yardsale-client/

## Link to yardsale-api site
https://gentle-retreat-52942.herokuapp.com/

## Link to yardsale-client repository
https://github.com/nickwilkerson/yardsale-client

## Technology Used
The back-end is built with Mongoose and Express.
The front-end is built with React.

## Unsolved Problems
- User can't upload a photo at this point.
- User can't message another user.
- Click counter is not working properly.

## ERD
https://imgur.com/jSMBwoI

## Expected Routes
/sign-up
Used for signing up a user
Method: POST
Expects: Email, Password, Password Confirmation

/sign-in
Used for signing in a user
Method: POST
Expects:
Email, Password

/sign-out
Used for signing out a user
Method: DELETE
Expects: User Token

/change-password
Used for changing a users password
Expects: User Token, Old Password, New Password

/listings
Used for show all list
Method: GET
Expects: User Token

/post
Used to create a listing
Method: POST
Expects: User Token, Title, Description, Price, Category

/listing/:id
Used for getting a single listing
Method: GET
Expects: User Token

/listing/edit/:id
Used to update a list
Method: PATCH
Expects: User Token, Title, Description, Price, Category

/listing/:id
Used for deleting a list
Method: DELETE
Expects: User Token

# Planning
Day 1:
Plan for project
Download api template
Set up api template
Download front-end template
Set up front-end template

Day2:
Start back-end routes and test with postman
Start front end

Day3:
Keep working on front-end and back-end

Day 4:
Continue working on front end.

## Set Up Instructions
1. Fork and Clone this repository
2. `npm install` dependencies 
3. Checkout to a new branch