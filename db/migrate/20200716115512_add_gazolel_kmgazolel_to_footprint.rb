class AddGazolelKmgazolelToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :gazolel, :float
    add_column :footprints, :kmgazolel, :float
  end
end
