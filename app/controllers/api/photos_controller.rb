class Api::PhotosController < ApplicationController
  def index
    all_user_ids = current_user.followed.pluck(:id, :picture) + [current_user.id]
    @photo_count = {count: Photo.where(user_id: all_user_ids).count}
    @all_photos = Photo.where(user_id: all_user_ids).includes(:user_likes, :user, :comments, :commenters).order(created_at: :desc).limit(10 * params[:count].to_i)
    render :index
  end


  def show
    @photo = Photo.find_by(id: params[:id])
    render :show
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id if signed_in?
    if @photo.save
      render :show
    else
      render json: ["can't create photo"], status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])

    if @photo && @photo.user_id == current_user.id
      @photo.destroy
      render :show
    else
      render json: ["can't delete photo"], status: 422
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:image, :caption)
  end

end
