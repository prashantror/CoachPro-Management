class EmployeeCompanyProgram < ApplicationRecord
  belongs_to :employee
  belongs_to :company_program
end
