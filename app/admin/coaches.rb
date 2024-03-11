ActiveAdmin.register Coach do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :email, :first_name, :last_name, :phone_number, :slug, :password, :password_confirmation
  #
  # or
  #
  # permit_params do
  #   permitted = [:email, :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  config.filters = false

  form do |f|
    f.semantic_errors
    inputs do
      input :email
      input :first_name
      input :last_name
      input :phone_number
      if f.object.new_record?
        input :password
        input :password_confirmation
      end
    end
    f.actions
  end

  show do
    panel "Coach Details" do
      attributes_table_for coach do
        row :email
        row :first_name
        row :last_name
        row :phone_number
        row :programs
      end
    end
  end
end
