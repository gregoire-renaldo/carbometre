class RenameFootprintEssencelToLessence < ActiveRecord::Migration[6.0]
  def change
    rename_column :footprints, :Essencel, :lessence
    rename_column :footprints, :Kmessencel, :kmessence
  end
end
