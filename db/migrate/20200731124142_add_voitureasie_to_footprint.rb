class AddVoitureasieToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voitureasie, :float
    add_column :footprints, :voitureasieelec, :float
    add_column :footprints, :jeanmonde, :float
    add_column :footprints, :jeanfr, :float
    add_column :footprints, :appartemnentneuf, :float
  end
end
