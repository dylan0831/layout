class Login
  include Mongoid::Document
  field :email, type: String
  field :pass, type: String
end
