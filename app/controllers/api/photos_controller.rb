class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

end
