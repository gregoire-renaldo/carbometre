class AddVoitureelecToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voitureelec, :float
  end
end
