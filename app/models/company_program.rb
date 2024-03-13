class CompanyProgram < ApplicationRecord
  include PgSearch::Model

  belongs_to :company
  belongs_to :program
  belongs_to :coach

  has_many :employee_company_programs, dependent: :destroy
  has_many :employees, through: :employee_company_programs

  scope :enabled_programs, -> { joins(:program).where(program: {enabled: true}) }

  pg_search_scope :search_by_program_name, associated_against: {
    program: :name
  }
end
