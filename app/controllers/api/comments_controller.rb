class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(photo_id: params[:photo_id], body: comment_params[:body])
    @comment.user_id = current_user.id if signed_in?
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  def destroy
    @comment = Comment.find_by(id: params[:id], user_id: current_user.id)
    if @comment
      @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end
end
