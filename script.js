$(function(){
  $.fn.extend({
    countdown: function(props){
      props = jQuery.extend({ //Default props
        until: new Date(),
      }, props);
      const state = {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      };
      let render = (props) => {
        const { dias, horas, minutos, segundos } = props;
        this.empty();
        this.append(`
          <div class="countdownProp" date-count="${dias == 1 ? 'dia' : 'Dias'}">${dias}</div>
          <div class="countdownProp" date-count="${horas == 1 ? 'hora' : 'Horas'}">${horas < 10 ? '0' + horas : horas}</div>
          <div class="countdownProp" date-count="${minutos == 1 ? 'minuto' : 'Minutos'}">${minutos < 10 ? '0' + minutos : minutos}</div>
          <div class="countdownProp" date-count="${segundos == 1 ? 'segundo' : 'Segundos'}">${segundos < 10 ? '0' + segundos : segundos}</div>
         `);
      }
      render(state);
      let update = setInterval(function(){
        let counter = props.until - (new Date().getTime());
        if (counter <= 0) {
          clearInterval(update);
          return false;
        }
        state.dias = Math.floor(counter / (1000 * 60 * 60 * 24));
        state.horas = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        state.minutos = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        state.segundos = Math.floor((counter % (1000 * 60)) / 1000);
        render(state);
      }, 1000);
      return this;
    },
    // ... snow function (unchanged)
  })

  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Calculate the correct New Year's date for your location
  const finalMonth = 1; // January
  const finalDay = 1;
  const counterYear = now.getFullYear() + 1; // Since it's currently December, count down to the next year

  $('.countdown').countdown({
    until: new Date(`${months[finalMonth - 1]}, ${finalDay}, ${counterYear}`) // Set the target date to 4 days from now
  })
  $('.snow').snow({
    amount: 100 // Number of particles
  });
});
