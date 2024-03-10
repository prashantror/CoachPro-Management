require "test_helper"

class Api::V1::LandingPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_v1_landing_pages_show_url
    assert_response :success
  end
end
