class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

end


def create
  @photo = Photo.new(photo_params)
  if @photo.save
    render :index
  else
    #throw errors?
  end
end


private

def photo_params
  params.require(:photo).permit(:user_id, :image, :captions)
end
