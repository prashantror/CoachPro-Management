class Api::V1::Users::SessionsController < DeviseTokenAuth::SessionsController

  protected

  def render_create_success
    render json: {
      data: resource_data(resource_json: @resource.token_validation_response)
            .merge(type: @resource.type.downcase)
    }
  end
end
