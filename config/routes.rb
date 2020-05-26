Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:create, :index, :show]
    resources :room_memberships, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'

  root to: 'static_pages#root'
  match '*path', to: 'static_pages#root', via: [:get]
end
