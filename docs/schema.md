# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
image       | string    | not null
caption     | text      |
location_id | integer   | foreign key (references locations), indexed
filter      | string    |

##follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed



##comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed
body        | text      | not null



##likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed




##hash_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag         | string    | not null, indexed

##hash_tags_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
hash_tag_id | integer   | not null, foreign key (references hash_tags), indexed


##tagged_users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
x_pos       | integer   | not null
y_pos       | integer   | not null
photo_id    | integer   | not null, foreign key (references photos), indexed

##locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
lat         | float     | not null
lng         | float     | not null
name        | string    | not null, indexed
