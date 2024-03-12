class Api::V1::LandingPagesController < Api::V1::ApiController
  before_action :set_company

  def show
    @landing_page = @company.landing_page
  end

  private

  def set_company
    @company = Company.find_by(slug: params[:company_slug])

    unless @company.present?
      render json: { message: "#{params[:company_slug]} is not found", status: :not_found }, status: :not_found
    end
  end
end
