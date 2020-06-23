class FoodsController < ApplicationController
  def index
    @foods = Food.all
  end

  def show
    @food = Food.find(params[:id])
  end

  def new
    @food = Food.new
  end

  def create
    @food = Food.new(food_params)
    @food.user = current_user
    @food.ble = @food.ble * 10
    @food.save
    redirect_to food_path(@food)
  end

  def edit
    @food = Food.find(params[:id])
  end

  def update
    @food = Food.find(params[:id])
    @food.update(food_params)

    # no need for app/views/foods/update.html.erb
    redirect_to food_path(@food)
  end

  def destroy
    @food = Food.find(params[:id])
    @food.destroy

    # no need for app/views/foods/destroy.html.erb
    redirect_to foods_path
  end

  private

  def food_params
    params.require(:food).permit(:ble, :carotte, :boeuf)
  end
end
