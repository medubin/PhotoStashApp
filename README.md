# PhotoStash

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PhotoStash is a web application inspired by Instagram built using Ruby on Rails
and React.js. PhotoStash allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Post photos
- [ ] Follow other users
- [ ] Add captions and hash tags to photos


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days / 0.5 days total)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Photo Model, API, and basic APIUtil (1.5 days / 2.0 days total)

**Objective:** Photos can be created and read and destroyed through
the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
- [ ] jBuilder views for photos
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days / 3.5 days total)

**Objective:** Photos can be created, read and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm`
  - [ ] `PhotoDetail`


### Phase 4: Start Styling (0.5 days / 4.0 days total)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Follows (1.5 day / 6.5 days total)

**Objective:** A user can follow another user

- [ ] create `Follow` model
- build out API, Flux loop, and components for:
  - [ ] Follow CRUD
  - [ ] A user follow other users
    - [ ] `FollowsIndex`
    - [ ] `FollowIndexItem`
  - [ ] A user can search for other users
    - [ ] `UserIndex`
    - [ ] `UserIndexItem`
  - [ ] A users photo index page shows only users that they have followed
- [ ] Use CSS to style new views

## Phase 6: Comments (1.5 days/ 8.0 days total)
- [ ] create `Comment` model and table
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] fetching comments for photo
  - [ ] adding comments to photog
- [ ] Style new elements



### Phase 7: Styling Cleanup and Seeding (0.5 day / 8.5 days total)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
<!--  bonus -->

### Phase 8: Hash Tags (1.5 days / 10.0 days total)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

- [ ] create `HashTag` model and join table
- build out API, Flux loop, and components for:
  - [ ] automatically detecting and pulling out hash tags from photo
  - [ ] searching photos by hash_tag
- [ ] Style new elements


### Bonus Features (TBD)
  - [ ] Like other users photos
  - [ ] Tag users in a photo
  - [ ] Add locations to photos
  - [ ] Search photos by location
  - [ ] Apply a filter to a photo.
  - [ ] Infinite scroll for Photos Index
  - [ ] Multiple sessions
  - [ ] Tag other users in photos
  - [ ] Comments on a photo
  - [ ] Search for a photo by hash tag



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
