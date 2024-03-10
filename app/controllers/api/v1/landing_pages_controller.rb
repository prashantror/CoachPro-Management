class Api::V1::LandingPagesController < Api::V1::ApiController
  before_action :set_company

  def show
    @landing_page = @company.landing_page
  end

  private

  def set_company
    @company = Company.find_by(slug: params[:company_slug])
  end
end
