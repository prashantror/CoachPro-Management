class Api::V1::CompaniesController < Api::V1::ApiController

  def index
    @companies = Company.all
  end
end
