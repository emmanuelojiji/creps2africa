window.onload = () => {

  console.log("hey");

  /*  const header = document.getElementsByTagName("headser");

    document.body.onscroll = () =>{
        let Yposition = document.body.scrollTop;

        if (Yposition > 100){
            header.style.display = "none";
        }
    } */



  counterContainer = document.getElementById("counter-container");





  var counter = function () {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },

        {

          duration: 8000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });



    });
  }










  








}
