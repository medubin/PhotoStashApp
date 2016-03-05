class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(username: params[:id])
    photo_count = params[:count].to_i == 0 ? 9 : params[:count].to_i * 9
    @photos = @user.photos.limit(photo_count)

    if @user
      render :show
    else
      render json: {username: nil, id: nil}
    end
  end

  def update
    @user = current_user
    @user.update(user_params);
    render :show
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :picture)
  end


end
