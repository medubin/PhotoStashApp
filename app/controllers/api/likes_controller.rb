class Api::LikesController < ApplicationController
  def create
    @like = Like.new(photo_id: params[:photo_id])
    @like.user_id = current_user.id if signed_in?

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def destroy
    @like = Like.find_by(photo_id: params[:photo_id], user_id: current_user.id)
    if @like
      @like.destroy
      render :show
    else
      render json: ["can't unlike"], status: 422
    end
  end

end
