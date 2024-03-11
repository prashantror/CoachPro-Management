class CompanyProgram < ApplicationRecord
  belongs_to :company
  belongs_to :program
  belongs_to :coach

  has_many :employee_company_programs, dependent: :destroy
  has_many :employees, through: :employee_company_programs
end
