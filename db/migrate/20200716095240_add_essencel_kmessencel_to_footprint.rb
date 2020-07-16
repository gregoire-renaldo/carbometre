class AddEssencelKmessencelToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :Essencel, :float
    add_column :footprints, :Kmessencel, :float
  end
end
