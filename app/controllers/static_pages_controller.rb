class StaticPagesController < ApplicationController
  before_filter :require_sign_in
  def root
  end
end
