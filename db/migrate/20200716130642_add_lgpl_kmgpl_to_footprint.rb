class AddLgplKmgplToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :lgpl, :float
    add_column :footprints, :kmgpl, :float
  end
end
