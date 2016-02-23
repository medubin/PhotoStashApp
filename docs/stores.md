# Flux Stores

### PhotoStore

Holds all persisted Photo data.

##### Actions:
- `receiveAllPhotos`
- `receiveSinglePhoto`
- `removePhoto`

##### Listeners:
- `PhotoIndex` (passes to `PhotoIndexItem` via props)
- `PhotoDetail`

### FollowersStore

Holds all persisted follow data.
<!-- split into two stores!! -->
##### Actions:
- `receiveAllFollowers`
- `addFollower`
- `removeFollower`

##### Listeners:
- `FollowerIndex`




### FolloweesStore

Holds all persisted follow data.
<!-- split into two stores!! -->
##### Actions:

- `receiveAllFollowees`

##### Listeners:
- `FolloweeIndex`



### CommentStore

Holds all persisted Comment data.

##### Actions:
- `receiveAllComments`
- `removeComment`

##### Listeners:
- `CommentIndex` (passes to `CommentIndexItem` via props)

### CommentFormStore

Holds un-persisted Comment data to send to the API.

##### Actions:
- `receiveCommentFormParams`

##### Listeners:
- `CommentForm`




### UserSearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveUserSearchParams`

##### Listeners:
- `UserSearchIndex`

### UserSearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveUserSearchSuggestions`

##### Listeners:
- `UserSearchSuggestions`
