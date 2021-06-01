# REST API Backend Endpoints
## Endpoints
All the following endpoints should be prefixed with /backend

#### Registration
* `/api/registration/` POST: Register new user by asking for email (a validation code will be sent to given email)
* `/api/registration/validate/` POST: Validate the creation of a new user with the code sent by email
* `/api/auth/token/` POST: Get a new JWT by passing username and password
* `/api/auth/token/refresh/` POST: Get a new JWT by passing an old still valid refresh token
* `/api/auth/token/verify/` POST: Verify a token by passing the access token
* `/api/auth/password-reset/` POST: Reset users password by sending a validation code in a email.
* `/api/auth/password-reset/validate/` POST: Validate password reset token and set new password for the user

#### Users
* `/api/users/me/` GET: Get the profile of logged in user
* `/api/users/me/` PATCH: Update the profile of logged in user
* `/api/users/list/` GET: Get all users
* `/api/users/list/<int:id>/` GET: Get a user by id

#### Restaurants
* `/api/restaurants/` GET: Get the list of all the restaurants
* `/api/restaurants/new/` POST: Create a new restaurant
* `/api/restaurants/me/` GET: Get the info of the restaurant of the logged in user
* `/api/restaurants/<int:id>/` GET: Get the details of a restaurant by providing the id of the restaurant
* `/api/restaurants/<int:id>/` PATCH: Update a restaurant by id (only by owner or restaurant admin). 
* `/api/restaurants/<int:id>/` DELETE: Delete a restaurant by id (only by owner or restaurant admin). 
* `/api/restaurants/search/?search=<str:search_string>` POST: Get the invoices with the search_string (shop of invoice, item of article)

#### Invoices
* `/api/invoices/` GET: Get the list of all the invoices
* `/api/invoices/new/` POST: Create a new invoice
* `/api/ invoices /<int:id>/` GET: Get the details of an invoice by providing the id of the invoice
* `/api/ invoices /<int:id>/` PATCH: Update an invoice by id (only by author)
* `/api/ invoices /<int:id>/` DELETE: Delete a invoice by id (only by author)
* `/api/invoices/date/start_date/end_date/` GET: Get the list of invoices in a specific period
* `/api/invoices/highest/<int:number>/` GET: Get the list of invoices with the highest total_amount with the given number
* `/api/invoices/latest/<int:number>/` GET: Get the list of the latest invoices with the given number

#### Articles
* `/api/articles/` GET: Get the list of all articles.
* `/api/articles/new/` POST: Create new article for a invoice
* `/api/article/tag/<int:tag_id>/` GET: Get the list of articles in a specific tag
* `/api/articles/<int:article_id>/` GET: Get a specific article by ID and display all the information
* `/api/articles/<int:article_id>/` PATCH: Update a specific article (only by author)
* `/api/articles/<int:article_id>/` DELETE: Delete a specific article (only by author)
* `/api/invoices/tag/<int:tag_id>/`  GET: Get the list of articles with a specific tag
* `/api/articles/date/start_date/end_date/tag/` GET: Get the list of articles in a specific period
* `/api/invoices/date/start_date/end_date/tag/<int:tag_id>/` GET: Get the list of invoices in a period with a specific tag

#### Revenues
* `/api/revenues/` GET: Get the list of all the revenues
* `/api/revenues/new/` POST: Create a new revenue
* `/api/revenues /<int:revenues_id>/` GET: Get a specific revenue by ID and display all the information
* `/api/revenues /<int:revenues_id>/` PATCH: Update a specific revenue (only by author)
* `/api/revenues /<int:revenues_id>/` DELETE: Delete a specific revenue (only by author)
* `/api/revenues /date/<int:start_date>/<int:end_date>/` GET: Get the list of revenues in a specific period 

#### Tags
* `/api/tags/` GET: Get the list of all the tags
* `/api/tags/new/` POST: Create a new tag
* `/api/tags/<int:tag_id>/` GET: Get a specific tag by ID and display all the information
* `/api/tags/<int:tag_id>/` PATCH: Update a specific tag (only by author)
* `/api/ tags/<int:tag_id>/` DELETE: Delete a specific tag (only by author)

