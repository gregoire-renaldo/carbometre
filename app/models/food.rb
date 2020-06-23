class Food < ApplicationRecord
  belongs_to :user
  before_save :default_values

  def default_values
    self.ble = 0 if self.ble.nil?
    self.carotte = 0 if self.carotte.nil?
    self.boeuf = 0 if self.boeuf.nil?
  end

  def total_score
    (self.ble + self.boeuf + self.carotte).round(2)
  end
end
