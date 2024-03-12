require "test_helper"

class Api::V1::CompanyProgramsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_company_programs_index_url
    assert_response :success
  end
end
