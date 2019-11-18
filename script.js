"use strict";

var owo = [
  "https://cdn.discordapp.com/attachments/644348008422703106/645808696349294612/SHS7ej668ouxUJZ4hqJR77eezZ7XTb14w58XcGgzLyn67lmKNQzyijrOoBlCWwg1ZSkOfcrOOQ589ffvBP7H0ZKJ4JlrSk9AAAAA.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747136712933398/-rainbow-unicorn-costume-for-adults-alt-1.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747164378824714/hqdefault.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747204929355826/my_name_captainbarbosa_i_ride_pink_unicorn_man_5.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747261996793876/2014-10-05-unicorn-thumb.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747304678162474/b1eb22909a536f3bab569cefcc72376e.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747351662886912/river.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747707851309106/Cg_hIKBWkAAzrGw.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645747810939043881/il_340x270.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645748284274507840/Rainbow-Unicorn-Inflatable-Costume-Cosplay-Pony-Halloween-Costumes-for-Women-Men-Cosplay-Fantasia-Pa.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645748601447907384/unicorn-male-costume.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645748919220830266/humoristic-unicorn-costume-for-men.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645749090554216458/unicorn-ma8726.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645749361325637673/inflatable-unicorn-halloween-costume-3.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645749534420500480/4144qInBV8L.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645749931193401347/vjVIgl.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645750312648572938/tumblr_n0thav2SYW1toynh2o1_500.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645750499823321099/obese_unicorn__xd_by_majesticnarwhalicorn-d5cbeb0.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645750870952378372/FatUnicorn_screenshot3-1920x1080-4918240df85e89343ac6766ca720b809.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645751449619398656/wlKYIU.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645751625880829953/flat800x800070f.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645752025413320745/th.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645752221559947275/bc3bdd91ff4b400db1fe9a2fd31e1286.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645753192155447307/unicorn.png",
  "https://cdn.discordapp.com/attachments/644348008422703106/645758780386312193/dragon.png"
];

owo.sort(() => Math.random() - 0.5);

function manageClicks(e) {
  if(document.getElementById("shade").style.display != "flex") {
    document.getElementById("viewing").src = e.path[0].src;
    document.getElementById("shade").style.display = "flex";
  } else {
    document.getElementById("viewing").src = "";
    document.getElementById("shade").style.display = "none";
  }
}

for(var i = 0, img, div; i < owo.length; i++) {
  div = document.createElement("div");
  img = document.createElement("img");
  img.src = owo[i]; img.class += "imgs";
  div.appendChild(img);
  document.getElementById("gridboy").appendChild(div);
  img.addEventListener("click", manageClicks);
}

shade.addEventListener("click", manageClicks);
