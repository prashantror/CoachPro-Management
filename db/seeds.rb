# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company_attributes = [
  {
    name: "Company A",
    email: "company-a@example.com",
    address: "123 Main Street",
    city: "City A",
    state: "State A",
    country: "Country A",
    phone_number: "123-456-7890"
  },
  {
    name: "Company B",
    email: "company-b@example.com",
    address: "456 Elm Street",
    city: "City B",
    state: "State B",
    country: "Country B",
    phone_number: "987-654-3210"
  },
]

# Create companies using the attributes defined above
company_attributes.each do |attributes|
  company = Company.create(attributes)

  logo_file_path = Rails.root.join('app', 'assets', 'images', 'default-company-logo.png')
  if File.exist?(logo_file_path)
    company.logo.attach(io: File.open(logo_file_path), filename: 'default-company-logo.png', content_type: 'image/png')
  else
    puts "Error: Logo file not found at #{logo_file_path}"
  end
end
puts "Seed data for companies created successfully."


# Define an array of landing page attributes
landing_page_attributes = [
  {
    heading: "Welcome to Company A",
    description: "This is the landing page for Company A.",
    company_id: Company.first.id
  },
  {
    heading: "Welcome to Company B",
    description: "This is the landing page for Company B.",
    company_id: Company.second.id
  }
  # Add more landing page attributes as needed
]

# Create landing pages using the attributes defined above
# Create companies using the attributes defined above
landing_page_attributes.each do |attributes|
  LandingPage.create!(attributes)
end
puts "Seed data for landing page created successfully."
