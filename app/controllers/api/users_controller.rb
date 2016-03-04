class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(username: params[:id]) #includes
    if @user
      render :show
    else
      render json: {username: nil, id: nil}
    end
  end

  def update
    currentUser.update(user_params);
    render :show
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :picture)
  end


end
