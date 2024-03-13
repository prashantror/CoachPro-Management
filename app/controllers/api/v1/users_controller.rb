class Api::V1::UsersController < Api::V1::ApiController
  before_action :authenticate_api_v1_user!
  before_action :set_company_programs, only: [:dashboard]
  before_action :apply_company_programs_search, only: [:dashboard]
  before_action :apply_company_programs_pagination, only: [:index]

  def dashboard
  end

  private

  def set_company_programs
    @company_programs = current_api_v1_user.company_programs
  end
end
