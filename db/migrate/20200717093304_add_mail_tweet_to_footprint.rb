class AddMailTweetToFootprint < ActiveRecord::Migration[6.0]
  def change
    add_column :footprints, :mail, :float
    add_column :footprints, :tweet, :float
  end
end
