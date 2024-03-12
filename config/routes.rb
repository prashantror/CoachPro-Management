Rails.application.routes.draw do
  ## API Routes
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'users', :controllers => {
        :registrations => "api/v1/users/registrations"
      }
      get 'companies/:company_slug/landing_page', to: "landing_pages#show"
      get '/dashboard', to: "users#dashboard"
      
      resources :companies, only: [:index] do
        resources :company_programs, only: [:index, :show]
      end
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
  # devise_for :users

  get 'pages/home'
  ## -----------------------------------

  # Admin routes
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  ## ----------------------------------
end
