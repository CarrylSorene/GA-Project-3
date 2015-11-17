# WeSport

## GA WDI London: Project 3 (Group)

A site for people to find a tennis partner.

<!-- ![](https://CarrylSorene/GA-Project-3/blob/development/public/img/wesport.tiff) -->

### Approach

Planning and prioritising of features was recorded using Trello.

User stories and wireframes were created once the initial site setup was done and the scope of the project was clearer than immediately after deciding which idea to use.

Trello was updated daily to keep track of work planned for the day, final update at the end of the project to clarify what was achieved and which ideas could be implemented in the future.

Tasks were divided between the team members with some paired coding.

### The Build

* HTML
* CSS
* Node
* Express
* MongoDB
* Mongoose
* JavaScript
* jQuery
* Passport
* Moment
* BCrypt
* EJS
* Materialize

### How It Works

Use of the site depends on a user being registered and logged in so the login form is prominent on the index page with a clear link to the registration form for new users. The heading above the login form succinctly clarifies the site's purpose and invites a user to join, setting their skill level in tennis.

Once registered and logged in, users are taken straight to the calendar page where they can select the days they're free to play tennis. The calendar then shows them an orange marker for the days they've selected and a green one for days other users of a similar skill level have also selected. The green marker also shows the number of potential tennis partners available.

### Problems & Challenges

The original seed data's functions for multiple users and their availibility clashed, leading to the dates being reset to the UTC default of 01/01/1970.  Promises or callbacks should resolve this. To get the calendar working first, we instead created two user accounts and set their availibility using the calendar directly.

### Future Plans

* Use Modal in Materialize to show information about other users when the active user clicks on a date in the calendar.
* A fuller introduction to the site so new users have a clear idea what they'd be signing up for if they register.
* Email feature possibly using NodeMailer so users can contact a potential tennis partner.
* More than one venue for users to choose from.
* Deploy to Heroku so the working app can be used.

### Our Team

* [Denis Doan](http://github.com/denis89)
* [Gary Siu](http://github.com/garysiu)
* [Carryl Sorene](http://github.com/carrylsorene)