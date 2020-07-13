class RenameFootprintNameToTitle < ActiveRecord::Migration[6.0]
  def change
    rename_column :footprints, :name, :title
  end
end
