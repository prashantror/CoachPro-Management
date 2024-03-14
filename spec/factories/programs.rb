FactoryBot.define do
  factory :program do
    name { Faker::Lorem.words(number: 3).join(' ') }
    description { Faker::Lorem.paragraph }
    enabled { true }
  end
end
