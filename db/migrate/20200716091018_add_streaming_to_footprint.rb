class AddStreamingToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :streaming, :float
  end
end
