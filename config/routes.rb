Rails.application.routes.draw do
  ## API Routes
  namespace :api do
    namespace :v1 do
      get 'companies/:company_slug/landing_page', to: "landing_pages#show"
      
      resources :companies, only: [:index]
    end
  end
  ## -----------------------------------


  ## React routes
  get '*path', to: 'react#index', constraints: lambda { |req|
    !(req.path.include?('active_storage') ||  req.path.include?('admin') || req.path.include?('api'))
  }
  ## -----------------------------------


  ## Rails routes
  root to: "react#index"
  devise_for :users

  get 'pages/home'
  ## -----------------------------------

  # Admin routes
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  ## ----------------------------------
end
