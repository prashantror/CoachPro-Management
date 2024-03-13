class Api::V1::CompanyProgramsController < Api::V1::ApiController
  before_action :set_company, only: [:index, :show]
  before_action :set_company_programs, only: [:index, :show]
  before_action :set_company_programs, only: [:index, :show]
  before_action :authenticate_api_v1_user!, except: [:index]

  def index
  end

  def show
    @company_program = @company_programs.find_by(id: params[:id])

    if @company_program.present?
      current_api_v1_user.join_program(@company_program)
    else
      render json: { message: "Company Program with ID:#{params[:id]} is not found." }, status: :not_found
    end
  end

  private

  def set_company
    @company = Company.find_by(id: params[:company_id])

    unless @company.present?
      render json: { message: "Company with ID:#{params[:company_id]} is not found." }, status: :not_found
    end
  end

  def set_company_programs
    @company_programs = @company.company_programs.enabled_programs
  end
end