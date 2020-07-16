class AddLe85Kme85ToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :le85, :float
    add_column :footprints, :kme85, :float
  end
end
