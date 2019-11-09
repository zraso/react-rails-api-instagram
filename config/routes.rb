Rails.application.routes.draw do
  scope '/api/v1' do
    resources :posts
  end
  # get 'posts/index'
  # get 'posts/create'
  # get 'posts/update'
  # get 'posts/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
