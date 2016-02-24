class Api::SessionsController < ApplicationController
  def show
    @user = current_user
    # render json: @user.username
    render :show
  end
end
