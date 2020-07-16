class AddLelectriqueKmelectriqueToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :lelectrique, :float
    add_column :footprints, :kmelectrique, :float
  end
end
