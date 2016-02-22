# Phase 2: Flux Architecture and Photo CRUD (2 days)

## Rails
### Models
* Photo

### Controllers
* Api::NotesController (create, destroy, index, show, update)

### Views
* photos/index.json.jbuilder
* photos/show.json.jbuilder

## Flux
### Views (React Components)
* PhotosIndex
  - PhotoIndexItem
* PhotosForm

### Stores
* Photos

### Actions
* ApiActions.receiveAllPhotos -> triggered by ApiUtil
* ApiActions.receiveSinglePhoto
* ApiActions.removePhoto
* PhotoActions.fetchAllPhotos -> triggers ApiUtil
* PhotoActions.fetchSinglePhoto
* PhotoActions.createPhoto
* PhotoActions.removePhoto

### ApiUtil
* ApiUtil.fetchAllPhotos
* ApiUtil.fetchSinglePhoto
* ApiUtil.createPhoto
* ApiUtil.removePhoto

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
