ActiveAdmin.register Company do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :email, :address, :city, :state, :country, :phone_number, :logo
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :email, :address, :city, :state, :country, :phone_number, :slug]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  config.filters = false

  form do |f|
    f.semantic_errors
    inputs do
      input :name
      input :email
      input :address
      input :city
      input :state
      input :country
      input :phone_number
      input :logo, as: :file, input_html: { required: true }
    end
    f.actions
  end

  show do
    panel "Company Details" do
      attributes_table_for company do
        row :name
        row :email
        row :address
        row :city
        row :state
        row :country
        row :phone_number
        row :slug
        row :logo do |c|
          if c.logo_url
            image_tag c.logo_url, height: 250, width: 250
          end
        end
      end
    end
  end
end
