class UsersController < ApplicationController
  attr_accessor :skip_password_validation  # virtual attribute to skip password validation while saving

  def set_user
    @user = User.find(params[:id])
  end




end
