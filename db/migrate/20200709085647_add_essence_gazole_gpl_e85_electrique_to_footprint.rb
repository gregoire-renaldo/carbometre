class AddEssenceGazoleGplE85ElectriqueToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :essence, :float
    add_column :footprints, :gazole, :float
    add_column :footprints, :gpl, :float
    add_column :footprints, :e85, :float
    add_column :footprints, :electrique, :float
  end
end
