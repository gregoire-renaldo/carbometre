class AddFieldsToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voitgaznatkg, :float
    add_column :footprints, :voitgaznatkwh, :float
    add_column :footprints, :eauusee, :float
    add_column :footprints, :dechets, :float
    add_column :footprints, :agneau, :float
    add_column :footprints, :truite, :float
    add_column :footprints, :crevette, :float
    add_column :footprints, :poissonpecheeuro, :float
    add_column :footprints, :poissonpechetropico, :float
    add_column :footprints, :pomme, :float
    add_column :footprints, :voitureelecmoins50, :float
    add_column :footprints, :voitureelecplus50, :float
    add_column :footprints, :trotinette, :float
    add_column :footprints, :chemisecoton, :float
    add_column :footprints, :chemiseviscose, :float
    add_column :footprints, :tshirtcoton, :float
    add_column :footprints, :tshirtpoly, :float
    add_column :footprints, :polaire, :float
    add_column :footprints, :pullacrylique, :float
    add_column :footprints, :pullenlaine, :float
    add_column :footprints, :sweat, :float
    add_column :footprints, :polo, :float
    add_column :footprints, :robecoton, :float
    add_column :footprints, :robepolyester, :float
    add_column :footprints, :chaussuretissu, :float
    add_column :footprints, :chaussuresport, :float
    add_column :footprints, :anorak, :float
  end
end
