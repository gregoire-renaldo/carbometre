class FootprintsController < ApplicationController
  def index
    @footprints = Footprint.all
  end

  def show
    @footprint = Footprint.find(params[:id])
  end

  def new
    @footprint = Footprint.new
  end

  def create
    @footprint = Footprint.new(footprint_params)
    @footprint.user = current_user
    unless @footprint.ble == nil
       @footprint.ble * 10
    end
    @footprint.save
    redirect_to footprint_path(@footprint)
  end

  def edit
    @footprint = Footprint.find(params[:id])
  end

  def update
    @footprint = Footprint.find(params[:id])
    @footprint.update(footprint_params)

    # no need for app/views/footprints/update.html.erb
    redirect_to footprint_path(@footprint)
  end

  def destroy
    @footprint = Footprint.find(params[:id])
    @footprint.destroy

    # no need for app/views/footprints/destroy.html.erb
    redirect_to footprints_path
  end

  private

  def footprint_params
    params.require(:footprint).permit(:ble, :carotte, :boeuf)
  end
end
