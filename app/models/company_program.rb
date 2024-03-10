class CompanyProgram < ApplicationRecord
  belongs_to :company
  belongs_to :program
  belongs_to :coach
end
