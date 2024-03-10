ActiveAdmin.register Program do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :description, :slug, :enabled, :cover_image, gallery_images: []
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :description]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  config.filters = false

  form do |f|
    f.semantic_errors
    inputs do
      input :name
      input :enabled
      input :description
      input :cover_image, as: :file
      input :gallery_images, as: :file, input_html: { multiple: true }
    end
    f.actions
  end

  show do
    panel "Program Details" do
      attributes_table_for program do
        row :name
        row :enabled
        row :description
        row :cover_image do |program|
          if program.cover_image_url
            image_tag program.cover_image_url, height: 250, width: 250
          end
        end
        row :gallery_images do |program|
          if program.gallery_image_urls.present?
            div :class => "admin-gallery-images" do
              program.gallery_image_urls.each do |url|
                div do
                  image_tag url, height: 150, width: 150
                end
              end
            end
          end
        end
      end
    end
  end
end
