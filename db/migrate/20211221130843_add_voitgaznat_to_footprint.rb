class AddVoitgaznatToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :voitgaznat, :float
  end
end
