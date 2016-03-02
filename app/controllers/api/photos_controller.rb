class Api::PhotosController < ApplicationController
  def index
    # @photos = Photo.all.reverse

    # might not need this 10:24 march 2
    # @user = current_user if signed_in?

    all_user_ids = current_user.followed.pluck(:id) + [current_user.id]
    @all_photos = Photo.where(user_id: all_user_ids).includes(:user_likes, :user, :comments, :commenters).order(created_at: :desc)

    # @user.followed.each do |followed|
    #   @all_photos += followed.photos.includes(:likes)
    # end
    #
    # @all_photos += @user.photos.includes(:likes)
    # @all_photos.sort!{ |x,y| y.created_at <=> x.created_at }


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
