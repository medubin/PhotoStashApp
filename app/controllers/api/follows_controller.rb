class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followed_id: params[:user_id])
    @follow.follower_id = current_user.id if signed_in?

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @user = User.find_by(username: params[:selectedUser])
    if @user
      if params[:subAction] == 'followed'
        @followed = current_user
        render :followed
      elsif params[:subAction] == 'followers'
        render :followers
      end
    else
      render json: {followed: [username: nil]}
    end
  end


  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, followed_id: params[:user_id])
    if @follow
      @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:followed_id)
  end




end
