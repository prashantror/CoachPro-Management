# class Coach < User
#   has_many :coach_programs, dependent: :destroy
#   has_many :programs, through: :coach_programs

#   accepts_nested_attributes_for :programs, allow_destroy: true
# end

class Coach < User
  has_many :company_programs, dependent: :destroy

  # accepts_nested_attributes_for :company_programs, allow_destroy: true
end