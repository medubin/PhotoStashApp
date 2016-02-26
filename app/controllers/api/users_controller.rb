class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(username: params[:id])
    render :show
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end


end
