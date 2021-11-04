    //Left DICE Image Change
     
    var randomNoDice_1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImg = "dice" + randomNoDice_1 + ".png";

    var randomImgSrc = "images/" + randomDiceImg;

    var image_1 = document.querySelectorAll("img")[0];

    image_1.setAttribute("src" , randomImgSrc);

    //Right DICE Image Change

    var randomNoDice_2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImg2 = "dice" + randomNoDice_2 + ".png";

    var randomImgSrc2 = "images/" + randomDiceImg2;

    var image_2 = document.querySelectorAll("img")[1];

    image_2.setAttribute("src" , randomImgSrc2);

    //Player Wins

    if (randomNoDice_1 > randomNoDice_2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }
      else if (randomNoDice_2 > randomNoDice_1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
      else {
        document.querySelector("h1").innerHTML = "Draw!";
      }
      