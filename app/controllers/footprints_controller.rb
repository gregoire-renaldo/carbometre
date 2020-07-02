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
    calculations
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

  def calculations
    unless @footprint.ble == nil
       @footprint.ble * 0.439
    end
    unless @footprint.carotte == nil
       @footprint.carotte * 10
    end
    unless @footprint.boeuf == nil
       @footprint.boeuf * 10
    end
    unless @footprint.riz == nil
       @footprint.riz * 10
    end
    unless @footprint.patate == nil
       @footprint.patate * 10
    end
    unless @footprint.saladesaison == nil
       @footprint.saladesaison * 10
    end
    unless @footprint.saladess == nil
       @footprint.saladess * 10
    end
    unless @footprint.tomatesfr == nil
       @footprint.tomatesfr * 10
    end
    unless @footprint.tomatesfrss == nil
       @footprint.tomatesfrss * 10
    end
    unless @footprint.veau == nil
       @footprint.veau * 10
    end
    unless @footprint.laitvache == nil
       @footprint.laitvache * 10
    end
    unless @footprint.poulet == nil
       @footprint.poulet * 10
    end
    unless @footprint.oeufs == nil
       @footprint.oeufs * 10
    end
    unless @footprint.electricite == nil
       @footprint.electricite * 10
    end
    unless @footprint.gazkwh == nil
       @footprint.gazkwh * 10
    end
    unless @footprint.gazm == nil
       @footprint.gazm * 10
    end
    unless @footprint.fioul == nil
       @footprint.fioul * 10
    end
    unless @footprint.granulebois == nil
       @footprint.granulebois * 10
    end
    unless @footprint.buchebois == nil
       @footprint.buchebois * 10
    end
    unless @footprint.eau == nil
       @footprint.eau * 10
    end
    unless @footprint.aspirateur == nil
       @footprint.aspirateur * 10
    end
    unless @footprint.congelateur == nil
       @footprint.congelateur * 10
    end
    unless @footprint.refrigerateur250l == nil
       @footprint.refrigerateur250l * 10
    end
    unless @footprint.fourelectrique == nil
       @footprint.fourelectrique * 10
    end
    unless @footprint.lavelinge == nil
       @footprint.lavelinge * 10
    end
    unless @footprint.microonde == nil
       @footprint.microonde * 10
    end
    unless @footprint.smartphone == nil
       @footprint.smartphone * 10
    end
    unless @footprint.ordinateur == nil
       @footprint.ordinateur * 10
    end
    unless @footprint.tgv == nil
       @footprint.tgv * 10
    end
    unless @footprint.terelectrique == nil
       @footprint.terelectrique * 10
    end
    unless @footprint.terthermique == nil
       @footprint.terthermique * 10
    end
    unless @footprint.intercite == nil
       @footprint.intercite * 10
    end
    unless @footprint.metro == nil
       @footprint.metro * 10
    end
    unless @footprint.bus == nil
       @footprint.bus * 10
    end
    unless @footprint.avion == nil
       @footprint.avion * 10
    end
    unless @footprint.avionregional == nil
       @footprint.avionregional * 10
    end
  end

end
