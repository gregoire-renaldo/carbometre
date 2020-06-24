class CreateFootprints < ActiveRecord::Migration[6.0]
  def change
    create_table :footprints do |t|
      t.float :ble
      t.float :carotte
      t.float :boeuf

      t.timestamps
    end
  end
end
