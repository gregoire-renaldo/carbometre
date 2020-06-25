Rails.application.routes.draw do
  resources :footprints
  devise_for :users
  root to: 'pages#home'
  get "/pages/professional_bilan" => "pages#professional_bilan"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
