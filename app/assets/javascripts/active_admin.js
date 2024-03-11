//= require active_admin/base
//= require ckeditor

$(document).ready(function () {
  ClassicEditor
    .create(document.querySelector('textarea'))
    .catch(error => {
      console.error(error);
    });
})
