class AddValeur2ToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :valeur2, :float
  end
end
