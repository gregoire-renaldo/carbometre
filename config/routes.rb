Rails.application.routes.draw do
  root to: 'pages#home'
  get "/empreinte-personnelle", to: "footprints#new"
  # post "/empreinte-personnelle", to: "footprints#create"
  # get "/empreinte-personnelle/:id", to: "footprints#show", as: :footprint
  # get "/empreinte-personnelle/:id/edit", to: "footprints#edit", as: :edit_footprint
  # patch "/empreinte-personnelle/:id", to: "footprints#update"
  resources :footprints, except: [:new]
  get "/empreinte-professionnelle", to: "pages#professional_bilan"
end
