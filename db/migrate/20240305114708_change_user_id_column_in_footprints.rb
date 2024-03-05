class ChangeUserIdColumnInFootprints < ActiveRecord::Migration[7.0]
  def change
    change_column_null :footprints, :user_id, true
  end
end
