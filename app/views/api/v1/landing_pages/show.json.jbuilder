# app/views/landing_pages/show.json.jbuilder
json.content do
  json.id @landing_page.id
  json.heading @landing_page.heading
  json.company_id @landing_page.company_id
  json.logo @landing_page.company.logo_url
  json.description @landing_page.description
  # Add other attributes as needed
end
