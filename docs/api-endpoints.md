# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photos

- `GET /api/photos`
  - Photos index/search
  - accepts `hash_tag_name` query param to list photos by hash tag
  - accepts pagination params (if I get there)
- `POST /api/photos`
- `GET /api/photo/:id`
<!-- maybe -->
- `DELETE /api/notes/:id`

### Comments

- `GET /api/photos/:id/comments`
  - index of all comments for a photo
- `POST /api/photos/:id/comments`
- `DELETE /api/photos/:id/comments/:id`

### Follows

- `GET /api/users/:id/followers`
  - index of all followers for a user
- `GET /api/users/:id/followees`
  - index of all followees for a user
- `POST /api/users/:id/follow`
- `DELETE /api/users/:id/follow/`

### Hash Tags

- `GET /api/photos/:id/hash_tags`
- `GET /api/hash_tags/:id`
  - index of all photos for a hash tag
