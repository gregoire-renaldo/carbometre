class AddAutreToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :autre, :float
  end
end
