class LandingPage < ApplicationRecord
  belongs_to :company

  def self.ransackable_attributes(auth_object = nil)
    ["company_id", "created_at", "description", "heading", "id", "updated_at"]
  end
end
