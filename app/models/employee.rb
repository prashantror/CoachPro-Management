class Employee < User
  has_many :employee_company_programs, dependent: :destroy
  has_many :company_programs, through: :employee_company_programs
end