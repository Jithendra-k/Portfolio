// document.getElementById("modify").innerHTML = document.lastModified

$(function() {
    $('.showSingle').click(function() {
      $('.bibtex_box').not('#div' + $(this).attr('target')).hide();
      $('#div' + $(this).attr('target')).toggle();
      var s = $(this);
      // return false;
      
    });
  });
  
  $(function() {
    $('.showSinglePubs').click(function() {
      $('.bibtex_box').not('#div' + $(this).attr('target')).hide();
      $('#div' + $(this).attr('target')).toggle();
  
      var s = $(this);
      setTimeout(function() {
        s.html(s.text() == 'More Publications' ? 'Show Less' : 'More Publications');
      }, 0);
      
      $('#extra').slideToggle('fast');
      // return false;
    });
  });
  
  
  
  
  $(function (){
      $(".open").click(function (){
          $(".pop-outer").fadeIn("slow");
      });
      $(".close").click(function (){
          $(".pop-outer").fadeOut("slow");
      });
  });
  
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
  $(function() {
    $('.toggle-button-js').click(function() {
        var icon = $(this).find('.toggle-icon');
        if (icon.hasClass('fa-caret-down')) {
            icon.removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            icon.removeClass('fa-caret-up').addClass('fa-caret-down');
        }
        $(this).next('.toggle-content-js').toggle();
    });
  });
  
  
  function updateLastUpdatedDate() {
    var lastModified = new Date(document.lastModified);
    var dateString = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('last-updated').textContent = dateString;
  }
  
  window.onload = function() {
    updateLastUpdatedDate();
    // Other actions you want to perform on page load
  };
  
  // $('#toggle_text').click(function() {
  //     var s = $(this);
  //     $('#extra').slideToggle('fast', function(){
  //         s.html(s.text() == 'More Publications' ? 'Show Less' : 'More Publications');
  //     });
  //     return false;
  // });