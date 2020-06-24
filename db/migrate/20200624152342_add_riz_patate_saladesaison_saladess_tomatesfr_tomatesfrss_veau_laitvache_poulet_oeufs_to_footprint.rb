class AddRizPatateSaladesaisonSaladessTomatesfrTomatesfrssVeauLaitvachePouletOeufsToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :riz, :float
    add_column :footprints, :patate, :float
    add_column :footprints, :saladesaison, :float
    add_column :footprints, :saladess, :float
    add_column :footprints, :tomatesfr, :float
    add_column :footprints, :tomatesfrss, :float
    add_column :footprints, :veau, :float
    add_column :footprints, :laitvache, :float
    add_column :footprints, :poulet, :float
    add_column :footprints, :oeufs, :float
    add_column :footprints, :electricite, :float
    add_column :footprints, :gazkwh, :float
    add_column :footprints, :gazm, :float
    add_column :footprints, :fioul, :float
    add_column :footprints, :granulebois, :float
    add_column :footprints, :buchebois, :float
    add_column :footprints, :eau, :float
    add_column :footprints, :aspirateur, :float
    add_column :footprints, :congelateur, :float
    add_column :footprints, :refrigerateur250l, :float
    add_column :footprints, :fourelectrique, :float
    add_column :footprints, :lavelinge, :float
    add_column :footprints, :microonde, :float
    add_column :footprints, :smartphone, :float
    add_column :footprints, :ordinateur, :float
    add_column :footprints, :tgv, :float
    add_column :footprints, :terelectrique, :float
    add_column :footprints, :terthermique, :float
    add_column :footprints, :intercite, :float
    add_column :footprints, :metro, :float
    add_column :footprints, :bus, :float
    add_column :footprints, :avion, :float
    add_column :footprints, :avionregional, :float
  end
end
