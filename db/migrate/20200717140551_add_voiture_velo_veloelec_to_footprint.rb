class AddVoitureVeloVeloelecToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voiture, :float
    add_column :footprints, :velo, :float
    add_column :footprints, :veloelec, :float
  end
end
