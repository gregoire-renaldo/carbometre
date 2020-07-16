class AddPersonToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :person, :float
  end
end
