class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end



  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id if signed_in?
    puts 'this was created'
    if @photo.save
      render :show
    else
      #throw errors?
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:image, :captions)
  end

end
