json.array! @company_programs do |company_program|
  json.id company_program.id
  json.name company_program.program.name
  json.cover_image company_program.program.cover_image_url
  json.slug company_program.program.slug
end