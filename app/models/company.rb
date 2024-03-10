class Company < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_one_attached :logo
  has_one :landing_page, dependent: :destroy

  has_many :company_programs, dependent: :destroy
  has_many :programs, through: :company_programs


  validates :name, :email, :address, :city, :state, :country, :phone_number, presence: true

  def logo_url
    if logo.attached?
      Rails.application.routes.url_helpers.rails_blob_url(logo, only_path: true)
    else
      ActionController::Base.helpers.asset_url('default-company-logo.png')
    end
  end
end
