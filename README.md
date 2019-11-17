# README

- Ruby version 2.6.3

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

# Instagram Challenge

## Instructions

- Challenge time: one weekend
- Feel free to use Google, your notes, books, etc., but work on your own
- If you refer to the solution of another coach or student, please put a link to that in your README
- If you have a partial solution, **still check in a partial solution**
- You must submit a pull request to this repo with your code by 9am Monday morning

## Task

Build Instagram: Simple huh!

Your challenge is to build Instagram using Rails. You'll need **users** who can post **pictures**, write **comments** on pictures and **like** a picture. Style it like Instagram's website (or more awesome).

Bonus if you can add filters!

## How to start

1. Produce some stories, break them down into tasks, and estimate
2. Fork this repo, clone, etc
3. Initialize a new rails project

Remember to proceed in small steps! Getting confused? Make the steps even smaller.

## Code Quality

For linting, you can use the `.rubocop.yml` in this repository (or your own!).
You'll need these gems:

You can also lint Javascript, CSS, and ERB — feel free to research this. These
will help you to train yourself to produce cleaner code — and will often alert
you to mistakes or mishaps!

### User stories

As a user,
So I can share my life on the internet,
I want to post a caption on a webpage

As a user,
So I can share my images too,
I want to post an image with the caption

As a user,
So I can talk to my friends online,
I want to be able to comment on posts

As a user,
So I can share positivity,
I want to be able to like posts

As a user,
So I can find out about my friends' lives,
I want my friends to be able to post from their own accounts

As a user,
So I can feel secure,
I only want others to be able to view my page if they have signed up

### Set up

```
gem install rails
rails new react-rails-api-instagram --api --database=postgresql
cd react-rails-api-instagram
```

Then added the the below to the Gemfile:

CORS (Cross-Origin Resource Sharing) tells browser to allow web apps running at one origin, to access resources from a different origin:
`gem 'rack-cors', :require => 'rack/cors'`

`gem 'rspec-rails', '~> 3.5'` to the `:test` group

Then `bundle install`

Then `rails g rspec:install`

## Test Suite

Using inbuilt Jest that comes with npm

Install cypress for feature tests

## Resources

https://medium.com/@pamit/todo-list-building-a-react-app-with-rails-api-7a3027907665

### Backend

```
rails generate model Post caption:text
rails generate controller Posts index create update destroy
rails db:migrate
```

### Frontend features

PostsContainer to input posts

`npm install axios --save`

`npm install immutability-helper --save`
