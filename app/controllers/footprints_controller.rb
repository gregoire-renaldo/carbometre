class FootprintsController < ApplicationController
  def index
    @footprints = Footprint.all
  end

  def show

    @footprint = Footprint.find(params[:id])

    respond_to do |format|
    format.html
    format.pdf do
      render pdf:"Your_filename bilan",
      template:"footprints/show.html.erb",
      layout:"pdf.html"
      end
    end
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
    params.require(:footprint).permit(:ble, :carotte, :boeuf, :riz, :saladesaison, :saladess, :tomatesfr, :tomatesfrss, :veau, :laitvache, :poulet, :oeufs, :electricite, :gazkwh, :gazm, :fioul, :granulebois, :buchebois, :eau, :aspirateur, :congelateur, :refrigerateur250l, :fourelectrique, :lavelinge, :microonde, :smartphone, :ordinateur, :tgv, :terelectrique, :terthermique, :intercite, :metro, :bus, :avion, :avionregional, :essence, :gazole, :gpl, :e85, :electrique )
  end

  def calculations
    unless @footprint.ble == nil
       @footprint.ble * 0.439
    end
    unless @footprint.carotte == nil
       @footprint.carotte * 0.0706
    end
    unless @footprint.boeuf == nil
       @footprint.boeuf * 15
    end
    unless @footprint.riz == nil
       @footprint.riz * 3.59
    end
    unless @footprint.patate == nil
       @footprint.patate * 0.0861
    end
    unless @footprint.saladesaison == nil
       @footprint.saladesaison * 0.326
    end
    unless @footprint.saladess == nil
       @footprint.saladess * 11.05
    end
    unless @footprint.tomatesfr == nil
       @footprint.tomatesfr * 0.177
    end
    unless @footprint.tomatesfrss == nil
       @footprint.tomatesfrss * 2.23
    end
    unless @footprint.veau == nil
       @footprint.veau * 6.5
    end
    unless @footprint.laitvache == nil
       @footprint.laitvache * 0.9
    end
    unless @footprint.poulet == nil
       @footprint.poulet * 2.14
    end
    unless @footprint.oeufs == nil
       @footprint.oeufs * 1.72
    end
    unless @footprint.electricite == nil
       @footprint.electricite * 0.0571
    end
    unless @footprint.gazkwh == nil
       @footprint.gazkwh * 0.205
    end
    unless @footprint.gazm == nil
       @footprint.gazm * 2.2
    end
    unless @footprint.fioul == nil
       @footprint.fioul * 3.25
    end
    unless @footprint.granulebois == nil
       @footprint.granulebois * 0.111
    end
    unless @footprint.buchebois == nil
       @footprint.buchebois * 0.114
    end
    unless @footprint.eau == nil
       @footprint.eau * 0.132
    end
    unless @footprint.aspirateur == nil
       @footprint.aspirateur * 52
    end
    unless @footprint.congelateur == nil
       @footprint.congelateur * 415
    end
    unless @footprint.refrigerateur250l == nil
       @footprint.refrigerateur250l * 300
    end
    unless @footprint.fourelectrique == nil
       @footprint.fourelectrique * 217
    end
    unless @footprint.lavelinge == nil
       @footprint.lavelinge * 305
    end
    unless @footprint.microonde == nil
       @footprint.microonde * 100
    end
    unless @footprint.smartphone == nil
       @footprint.smartphone * 15
    end
    unless @footprint.ordinateur == nil
       @footprint.ordinateur * 150
    end
    unless @footprint.tgv == nil
       @footprint.tgv * 0.00369
    end
    unless @footprint.terelectrique == nil
       @footprint.terelectrique * 0.00891
    end
    unless @footprint.terthermique == nil
       @footprint.terthermique * 0.0798
    end
    unless @footprint.intercite == nil
       @footprint.intercite * 0.0056
    end
    unless @footprint.metro == nil
       @footprint.metro * 0.0057
    end
    unless @footprint.bus == nil
       @footprint.bus * 0.09216
    end
    unless @footprint.avion == nil
       @footprint.avion * 0.258
    end
    unless @footprint.avionregional == nil
       @footprint.avionregional * 0.453
    end
    unless @footprint.essence == nil
       @footprint.essence * 2.8
    end
    unless @footprint.gazole == nil
       @footprint.gazole * 3.16
    end
    unless @footprint.gpl == nil
       @footprint.gpl * 1.86
    end
    unless @footprint.e85 == nil
       @footprint.e85 * 1.68
    end
    unless @footprint.electrique == nil
       @footprint.electrique * 0.0571
    end
  end

end
