Rails.application.routes.draw do
  resources :freelance_documents, path: 'documents', as: 'documents'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
