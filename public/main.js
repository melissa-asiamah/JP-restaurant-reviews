var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var button = document.getElementsByClassName("remove");
// var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const restaurant = this.parentNode.parentNode.childNodes[5].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'restaurant': restaurant,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(button).forEach(function(element) {
      element.addEventListener('click', function(){
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          window.location.reload()
        })
      });
    });
