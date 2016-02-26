class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id if signed_in?
    if @follow.save
      render :show
    else
      #throw errors?
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
    end
  end


  def show
  end


  private
  def follow_params
    params.require(:follow).permit(:followed_id)
  end




end