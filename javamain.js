var $form = $('#main'),
    url = 'https://script.google.com/macros/s/AKfycbwlD47AJ3RWo0S5RuUJLxREY_n09ISeE0O5HXmw1oGt2JGW_k3U/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
  );
})