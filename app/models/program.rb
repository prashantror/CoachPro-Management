class Program < ApplicationRecord
  has_one_attached :cover_image
  has_many_attached :gallery_images

  has_many :companies, through: :program_companies
  has_many :program_companies, dependent: :destroy
end
