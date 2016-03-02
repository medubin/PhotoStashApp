class Api::PhotosController < ApplicationController
  def index
    # @photos = Photo.all.reverse
    @user = current_user if signed_in?

    @all_photos = []
    @user.followed.each do |followed|
      @all_photos += followed.photos.includes(:likes)
    end

    @all_photos += @user.photos
    @all_photos.sort!{ |x,y| y.created_at <=> x.created_at }


    render :index
  end



  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id if signed_in?
    if @photo.save
      render :show
    else
      #throw errors?
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:image, :caption)
  end

end
