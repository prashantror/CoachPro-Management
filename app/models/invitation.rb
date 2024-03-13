class Invitation < ApplicationRecord
  has_one :coach, dependent: :destroy

  after_create :invite_coach

  def invite_coach
    Coach.invite!(email: email, first_name: first_name, last_name: last_name, phone_number: phone_number, invitation_id: id)
  end
end
