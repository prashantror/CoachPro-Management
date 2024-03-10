class ReactController < ApplicationController
  def index
    # Render your React application's entry point

    render file: Rails.root.join('public', 'index.html')
  end
end