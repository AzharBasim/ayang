(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open');
  
    openB.addEventListener('click', function() {
      card.style.transform = 'rotateY(180deg)';
    });
  })();
  