json.company_programs do
  json.array! @company_programs do |company_program|
    json.id company_program.id
    json.name company_program.program.name
    json.cover_image company_program.program.cover_image_url
    json.slug company_program.program.slug
    json.number_of_enrolled_employees company_program.employees.count if current_user.class.to_s == 'Coach'
  end
end
json.metadata @metadata
