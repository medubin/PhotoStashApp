class Api::SearchesController < ApplicationController
  def show
    @users = User.search(params[:searchTerm])
    render :show
  end

end
