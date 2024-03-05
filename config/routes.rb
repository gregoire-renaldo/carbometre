Rails.application.routes.draw do
  resources :footprints
  root to: 'pages#home'
  get "/pages/professional_bilan" => "pages#professional_bilan"
end
