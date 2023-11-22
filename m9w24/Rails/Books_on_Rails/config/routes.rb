Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get 'profile', to:'users#show'
  resources :authors, only: [:index]
  resources :books, only: [:index]
end
