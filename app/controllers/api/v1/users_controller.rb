class Api::V1::UsersController < Api::V1::ApiController
  before_action :authenticate_api_v1_user!

  def dashboard
    @company_programs = current_api_v1_user.company_programs
  end  
end
