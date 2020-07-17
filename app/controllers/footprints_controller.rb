class FootprintsController < ApplicationController
  def index
    @footprints = Footprint.all.order("created_at DESC")
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

    @footprint.save
    redirect_to footprint_path(@footprint)
  end

  def edit
    @footprint = Footprint.find(params[:id])
  end

  def update
    @footprint = Footprint.find(params[:id])
    @footprint.update(footprint_params)


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
    params.require(:footprint).permit(:voiture, :voitureelec, :velo, :veloelec, :mail, :tweet, :person, :lelectrique, :kmelectrique, :le85, :kme85, :lgpl, :kmgpl, :gazolel, :kmgazolel, :lessence, :kmessence, :streaming, :valeur2, :autre, :title, :patate, :ble, :carotte, :boeuf, :riz, :saladesaison, :saladess, :tomatesfr, :tomatesfrss, :veau, :laitvache, :poulet, :oeufs, :electricite, :gazkwh, :gazm, :fioul, :granulebois, :buchebois, :eau, :aspirateur, :congelateur, :refrigerateur250l, :fourelectrique, :lavelinge, :microonde, :smartphone, :ordinateur, :tgv, :terelectrique, :terthermique, :intercite, :metro, :bus, :avion, :avionregional, :essence, :gazole, :gpl, :e85, :electrique )
  end

end
