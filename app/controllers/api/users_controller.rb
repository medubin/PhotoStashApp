class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(username: params[:id]) #includes
    if @user
      render :show
    else
      render json: {username: nil, id: nil}
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end


end
