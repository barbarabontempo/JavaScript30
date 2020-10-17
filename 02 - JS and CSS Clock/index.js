const secHand = document.querySelector(".second-hand");
      const minHand = document.querySelector(".min-hand");
      const hourHand = document.querySelector(".hour-hand");

      function setDate() {
        const timeNow = new Date();

        const seconds = timeNow.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = timeNow.getMinutes();
        const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = timeNow.getHours();
        const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      }

      setInterval(setDate, 1000);
      setDate();