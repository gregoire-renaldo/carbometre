class AddFieldsToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voitgaznatkg, :float, default: 0
    add_column :footprints, :voitgaznatkwh, :float, default: 0
    add_column :footprints, :eauusee, :float, default: 0
    add_column :footprints, :dechets, :float, default: 0
    add_column :footprints, :agneau, :float, default: 0
    add_column :footprints, :truite, :float, default: 0
    add_column :footprints, :crevette, :float, default: 0
    add_column :footprints, :poissonpecheeuro, :float, default: 0
    add_column :footprints, :poissonpechetropico, :float, default: 0
    add_column :footprints, :pomme, :float, default: 0
    add_column :footprints, :voitureelecmoins50, :float, default: 0
    add_column :footprints, :voitureelecplus50, :float, default: 0
    add_column :footprints, :trotinette, :float, default: 0
    add_column :footprints, :chemisecoton, :float, default: 0
    add_column :footprints, :chemiseviscose, :float, default: 0
    add_column :footprints, :tshirtcoton, :float, default: 0
    add_column :footprints, :tshirtpoly, :float, default: 0
    add_column :footprints, :polaire, :float, default: 0
    add_column :footprints, :pullacrylique, :float, default: 0
    add_column :footprints, :pullenlaine, :float, default: 0
    add_column :footprints, :sweat, :float, default: 0
    add_column :footprints, :polo, :float, default: 0
    add_column :footprints, :robecoton, :float, default: 0
    add_column :footprints, :robepolyester, :float, default: 0
    add_column :footprints, :chaussuretissu, :float, default: 0
    add_column :footprints, :chaussuresport, :float, default: 0
    add_column :footprints, :anorak, :float, default: 0
  end
end
