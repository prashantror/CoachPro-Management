class Company < ApplicationRecord
  has_one :landing_page, dependent: :destroy
  has_many :programs, through: :program_companies
  has_many :program_companies, dependent: :destroy


  has_one_attached :logo

  def logo_url
    if logo.attached?
      Rails.application.routes.url_helpers.rails_blob_url(logo, only_path: true)
    else
      ActionController::Base.helpers.asset_url('default-logo.png')
    end
  end
end
