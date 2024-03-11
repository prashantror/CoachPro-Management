Rails.application.routes.draw do
  ## API Routes
  namespace :api do
    namespace :v1 do
      get 'companies/:company_slug/landing_page', to: "landing_pages#show"
    end
  end
  ## -----------------------------------


  ## React routes
  get '*path', to: 'react#index', constraints: lambda { |req|
    !(req.path.include?('active_storage') ||  req.path.include?('admin'))
  }
  ## -----------------------------------


  ## Rails routes
  devise_for :users

  get 'pages/home'
  get '/', to: "pages#home"
  ## -----------------------------------

  # Admin routes
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  ## ----------------------------------
end
