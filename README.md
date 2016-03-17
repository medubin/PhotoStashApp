#Photostash Web App
*Ruby, Ruby on Rails, Javascript, React, Flux*


[Visit Photostash](https://www.photostash.space)

Photostash is a web application inspired by Instagram and built using Ruby on Rails and React.js.

To get started, log into the demo account and look for the camera icon in the header. Click that to upload a photo. Or search for other users using the search bar in the header to check out their account page.


##Features


Photostash currently allows users to:

 - Account creation
 - Log in / Log out with custom made authentication
 - Create, delete and view photos
 - Follow other users
 - View a feed of photos based on follows
 - Scroll through the feed page with infinite scrolling
 - View another users profile page to see their photos
 - Comment on and like photos
 - Search for other users based on username
 - Add/change your profile photo

##Implementation Details

###Custom made user authentication
I overwrote the password= method using the gem BCrypt  in the user model to implement a password hashing:
```Ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end
```

Incoming passwords can then be compared against the stored password hash to see if the password correct
```Ruby
def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

A users session is then stored as a session token to remember a user is signed in at a specific computer
```Ruby
def reset_token!
  self.session_token = SecureRandom.urlsafe_base64
  self.save
  self.session_token
end
```

###Infinite scroll
Infinite scroll is achieved by placing a listener on the document that checks if the window is being scrolled

```Javascript
this.infiniteScrollToken = window.addEventListener("scroll", this.addNewPhotos);
```

Whenever the window reaches the bottom the addNewPhotos fires an ajax request, passing the number of times the page has been scrolled to the bottom, which retrieves more photos from the Rails Photos controller

```Javascript
addNewPhotos: function() {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight && PhotoStore.all().length <            PhotoStore.photoCount() ) {
 this.state.scrollCount += 1;
 PhotoActions.retrieveAllPhotos(this.state.scrollCount);
}
},
```


###Photo feed based on user follows
The photo feed only serves up photos from users that the viewer is following, in order of most recent first
```Ruby
def index
  all_user_ids = current_user.followed.pluck(:id, :picture) + [current_user.id]
  @photo_count = {count: Photo.where(user_id: all_user_ids).count}
  @all_photos = Photo.where(user_id: all_user_ids).includes(:user_likes, :user, :comments, :commenters).order(created_at: :desc).limit(10 * params[:count].to_i)
end
```

###Search for users
Users can be searched for using a fuzzy search, defined in the User model class
```Ruby
def self.search(query)
  where("username like ?", "%#{query}%").limit(10)
end
```

##Photos

###Login Page
![Login](/readme_photos/login-page.png)

###Photo Feed
![Photo Feed](/readme_photos/photo-feed.png)

###User Page
![User Page](/readme_photos/user-page.png)

###Photo Show Page
![Show Page](/readme_photos/photo-show.png)

###Search
![Search](/readme_photos/user-search.png)

##Todo
- Hashtags
- User tagging
- Search for photos by hashtag
- Integrate GoogleMaps API to add location to photos


##Included Gems and libraries
- BCrypt
- Figaro
- React-Modal
- History
- Linked State
