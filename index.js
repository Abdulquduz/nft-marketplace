$(".resource, .create").on("click", function() {
  alert("Resources and Create pages are currently under development");
});

$(".dropdown-icon").on("click", function() {
  $(".accessories-search, .side-bar-list").slideToggle();
});

import data from "./data/0.json" assert {type: "json"};
import data1 from "./data/1.json" assert {type: "json"};
import data2 from "./data/2.json" assert {type: "json"};
import data3 from "./data/3.json" assert {type: "json"};
import data4 from "./data/4.json" assert {type: "json"};
import data5 from "./data/5.json" assert {type: "json"};
import data6 from "./data/6.json" assert {type: "json"};
import data7 from "./data/7.json" assert {type: "json"};
import data8 from "./data/8.json" assert {type: "json"};
import data9 from "./data/9.json" assert {type: "json"};
import data10 from "./data/10.json" assert {type: "json"};
import data11 from "./data/11.json" assert {type: "json"};
import data12 from "./data/12.json" assert {type: "json"};
import data13 from "./data/13.json" assert {type: "json"};
import data14 from "./data/14.json" assert {type: "json"};
import data15 from "./data/15.json" assert {type: "json"};
import data16 from "./data/16.json" assert {type: "json"};
import data17 from "./data/17.json" assert {type: "json"};
import data18 from "./data/18.json" assert {type: "json"};
import data19 from "./data/19.json" assert {type: "json"};
import data20 from "./data/20.json" assert {type: "json"};
import data21 from "./data/21.json" assert {type: "json"};
import data22 from "./data/22.json" assert {type: "json"};
import data23 from "./data/23.json" assert {type: "json"};
import data24 from "./data/24.json" assert {type: "json"};
import data25 from "./data/25.json" assert {type: "json"};
import data26 from "./data/26.json" assert {type: "json"};
import data27 from "./data/27.json" assert {type: "json"};
import data28 from "./data/28.json" assert {type: "json"};
import data29 from "./data/29.json" assert {type: "json"};
import data30 from "./data/30.json" assert {type: "json"};
import data31 from "./data/31.json" assert {type: "json"};
import data32 from "./data/32.json" assert {type: "json"};
import data33 from "./data/33.json" assert {type: "json"};
import data34 from "./data/34.json" assert {type: "json"};
import data35 from "./data/35.json" assert {type: "json"};
import data36 from "./data/36.json" assert {type: "json"};
import data37 from "./data/37.json" assert {type: "json"};
import data38 from "./data/38.json" assert {type: "json"};
import data39 from "./data/39.json" assert {type: "json"};
import data40 from "./data/40.json" assert {type: "json"};
import data41 from "./data/41.json" assert {type: "json"};
import data42 from "./data/42.json" assert {type: "json"};
import data43 from "./data/43.json" assert {type: "json"};
import data44 from "./data/44.json" assert {type: "json"};
import data45 from "./data/45.json" assert {type: "json"};
import data46 from "./data/46.json" assert {type: "json"};
import data47 from "./data/47.json" assert {type: "json"};
import data48 from "./data/48.json" assert {type: "json"};
import data49 from "./data/49.json" assert {type: "json"};


for (let i = 0; i < 50; i++) {

  switch (i) {
    case 0:
      var imageName = "https://s7nspfp.mypinata.cloud/ipfs/" + data.image;
      $(".nft-image").attr("src", imageName);
      $(".card-text").html(data.name);
      var dataTrait = data.attributes[2].value;
      $(".card-trait").html(dataTrait);
      break;
    case 1:
      var imageName1 = "https://s7nspfp.mypinata.cloud/ipfs/" + data1.image;
      $(".nft-image" + i).attr("src", imageName1);
      $(".card-text" + i).html(data1.name);
      var dataTrait1 = data1.attributes[2].value;
      $(".card-trait" + i).html(dataTrait1);
      console.log(i);
      break;
    case 2:
      var imageName2 = "https://s7nspfp.mypinata.cloud/ipfs/" + data2.image;
      $(".nft-image" + i).attr("src", imageName2);
      $(".card-text" + i).html(data2.name);
      var dataTrait2 = data2.attributes[2].value;
      $(".card-trait" + i).html(dataTrait2);
      console.log(i);
      break;
    case 3:
      var imageName3 = "https://s7nspfp.mypinata.cloud/ipfs/" + data3.image;
      $(".nft-image" + i).attr("src", imageName3);
      $(".card-text" + i).html(data3.name);
      var dataTrait3 = data3.attributes[2].value;
      $(".card-trait" + i).html(dataTrait3);
      console.log(i);
      break;
    case 4:
      var imageName4 = "https://s7nspfp.mypinata.cloud/ipfs/" + data4.image;
      $(".nft-image" + i).attr("src", imageName4);
      $(".card-text" + i).html(data4.name);
      var dataTrait4 = data4.attributes[2].value;
      $(".card-trait" + i).html(dataTrait4);
      console.log(i);
      break;
    case 5:
      var imageName5 = "https://s7nspfp.mypinata.cloud/ipfs/" + data5.image;
      $(".nft-image" + i).attr("src", imageName5);
      $(".card-text" + i).html(data5.name);
      var dataTrait5 = data5.attributes[2].value;
      $(".card-trait" + i).html(dataTrait5);
      console.log(i);
      break;
    case 6:
      var imageName6 = "https://s7nspfp.mypinata.cloud/ipfs/" + data6.image;
      $(".nft-image" + i).attr("src", imageName6);
      $(".card-text" + i).html(data6.name);
      var dataTrait6 = data6.attributes[2].value;
      $(".card-trait" + i).html(dataTrait6);
      console.log(i);
      break;
    case 7:
      var imageName7 = "https://s7nspfp.mypinata.cloud/ipfs/" + data7.image;
      $(".nft-image" + i).attr("src", imageName7);
      $(".card-text" + i).html(data7.name);
      var dataTrait7 = data7.attributes[2].value;
      $(".card-trait" + i).html(dataTrait7);
      console.log(i);
      break;
    case 8:
      var imageName8 = "https://s7nspfp.mypinata.cloud/ipfs/" + data8.image;
      $(".nft-image" + i).attr("src", imageName8);
      $(".card-text" + i).html(data8.name);
      var dataTrait8 = data8.attributes[2].value;
      $(".card-trait" + i).html(dataTrait8);
      console.log(i);
      break;
    case 9:
      var imageName9 = "https://s7nspfp.mypinata.cloud/ipfs/" + data9.image;
      $(".nft-image" + i).attr("src", imageName9);
      $(".card-text" + i).html(data9.name);
      var dataTrait9 = data9.attributes[2].value;
      $(".card-trait" + i).html(dataTrait9);
      console.log(i);
      break;
    case 10:
      var imageName10 = "https://s7nspfp.mypinata.cloud/ipfs/" + data10.image;
      $(".nft-image" + i).attr("src", imageName10);
      $(".card-text" + i).html(data10.name);
      var dataTrait10 = data10.attributes[2].value;
      $(".card-trait" + i).html(dataTrait10);
      console.log(i);
      break;
    case 11:
      var imageName11 = "https://s7nspfp.mypinata.cloud/ipfs/" + data11.image;
      $(".nft-image" + i).attr("src", imageName11);
      $(".card-text" + i).html(data11.name);
      var dataTrait11 = data11.attributes[2].value;
      $(".card-trait" + i).html(dataTrait11);
      console.log(i);
      break;
    case 12:
      var imageName12 = "https://s7nspfp.mypinata.cloud/ipfs/" + data12.image;
      $(".nft-image" + i).attr("src", imageName12);
      $(".card-text" + i).html(data12.name);
      var dataTrait12 = data12.attributes[2].value;
      $(".card-trait" + i).html(dataTrait12);
      console.log(i);
      break;
    case 13:
      var imageName13 = "https://s7nspfp.mypinata.cloud/ipfs/" + data13.image;
      $(".nft-image" + i).attr("src", imageName13);
      $(".card-text" + i).html(data13.name);
      var dataTrait13 = data13.attributes[2].value;
      $(".card-trait" + i).html(dataTrait13);
      console.log(i);
      break;
    case 14:
      var imageName14 = "https://s7nspfp.mypinata.cloud/ipfs/" + data14.image;
      $(".nft-image" + i).attr("src", imageName14);
      $(".card-text" + i).html(data14.name);
      var dataTrait14 = data14.attributes[2].value;
      $(".card-trait" + i).html(dataTrait14);
      console.log(i);
      break;
    case 15:
      var imageName15 = "https://s7nspfp.mypinata.cloud/ipfs/" + data15.image;
      $(".nft-image" + i).attr("src", imageName15);
      $(".card-text" + i).html(data15.name);
      var dataTrait15 = data15.attributes[2].value;
      $(".card-trait" + i).html(dataTrait15);
      console.log(i);
      break;
    case 16:
      var imageName16 = "https://s7nspfp.mypinata.cloud/ipfs/" + data16.image;
      $(".nft-image" + i).attr("src", imageName16);
      $(".card-text" + i).html(data16.name);
      var dataTrait16 = data16.attributes[2].value;
      $(".card-trait" + i).html(dataTrait16);
      console.log(i);
      break;
    case 17:
      var imageName17 = "https://s7nspfp.mypinata.cloud/ipfs/" + data17.image;
      $(".nft-image" + i).attr("src", imageName17);
      $(".card-text" + i).html(data17.name);
      var dataTrait17 = data17.attributes[2].value;
      $(".card-trait" + i).html(dataTrait17);
      console.log(i);
      break;
    case 18:
      var imageName18 = "https://s7nspfp.mypinata.cloud/ipfs/" + data18.image;
      $(".nft-image" + i).attr("src", imageName18);
      $(".card-text" + i).html(data18.name);
      var dataTrait18 = data18.attributes[2].value;
      $(".card-trait" + i).html(dataTrait18);
      console.log(i);
      break;
    case 19:
      var imageName19 = "https://s7nspfp.mypinata.cloud/ipfs/" + data19.image;
      $(".nft-image" + i).attr("src", imageName19);
      $(".card-text" + i).html(data19.name);
      var dataTrait19 = data19.attributes[2].value;
      $(".card-trait" + i).html(dataTrait19);
      console.log(i);
      break;
    case 20:
      var imageName20 = "https://s7nspfp.mypinata.cloud/ipfs/" + data20.image;
      $(".nft-image" + i).attr("src", imageName20);
      $(".card-text" + i).html(data20.name);
      var dataTrait20 = data20.attributes[2].value;
      $(".card-trait" + i).html(dataTrait20);
      console.log(i);
      break;
    case 21:
      var imageName21 = "https://s7nspfp.mypinata.cloud/ipfs/" + data21.image;
      $(".nft-image" + i).attr("src", imageName21);
      $(".card-text" + i).html(data21.name);
      var dataTrait21 = data21.attributes[2].value;
      $(".card-trait" + i).html(dataTrait21);
      console.log(i);
      break;
    case 22:
      var imageName22 = "https://s7nspfp.mypinata.cloud/ipfs/" + data22.image;
      $(".nft-image" + i).attr("src", imageName22);
      $(".card-text" + i).html(data22.name);
      var dataTrait22 = data22.attributes[2].value;
      $(".card-trait" + i).html(dataTrait22);
      console.log(i);
      break;
    case 23:
      var imageName23 = "https://s7nspfp.mypinata.cloud/ipfs/" + data23.image;
      $(".nft-image" + i).attr("src", imageName23);
      $(".card-text" + i).html(data23.name);
      var dataTrait23 = data23.attributes[2].value;
      $(".card-trait" + i).html(dataTrait23);
      console.log(i);
      break;
    case 24:
      var imageName24 = "https://s7nspfp.mypinata.cloud/ipfs/" + data24.image;
      $(".nft-image" + i).attr("src", imageName24);
      $(".card-text" + i).html(data24.name);
      var dataTrait24 = data24.attributes[2].value;
      $(".card-trait" + i).html(dataTrait24);
      console.log(i);
      break;
    case 25:
      var imageName25 = "https://s7nspfp.mypinata.cloud/ipfs/" + data25.image;
      $(".nft-image" + i).attr("src", imageName25);
      $(".card-text" + i).html(data25.name);
      var dataTrait25 = data25.attributes[2].value;
      $(".card-trait" + i).html(dataTrait25);
      console.log(i);
      break;
    case 26:
      var imageName26 = "https://s7nspfp.mypinata.cloud/ipfs/" + data26.image;
      $(".nft-image" + i).attr("src", imageName26);
      $(".card-text" + i).html(data26.name);
      var dataTrait26 = data26.attributes[2].value;
      $(".card-trait" + i).html(dataTrait26);
      console.log(i);
      break;
    case 27:
      var imageName27 = "https://s7nspfp.mypinata.cloud/ipfs/" + data27.image;
      $(".nft-image" + i).attr("src", imageName27);
      $(".card-text" + i).html(data27.name);
      var dataTrait27 = data27.attributes[2].value;
      $(".card-trait" + i).html(dataTrait27);
      console.log(i);
      break;
    case 28:
      var imageName28 = "https://s7nspfp.mypinata.cloud/ipfs/" + data28.image;
      $(".nft-image" + i).attr("src", imageName28);
      $(".card-text" + i).html(data28.name);
      var dataTrait28 = data28.attributes[2].value;
      $(".card-trait" + i).html(dataTrait28);
      console.log(i);
      break;
    case 29:
      var imageName29 = "https://s7nspfp.mypinata.cloud/ipfs/" + data29.image;
      $(".nft-image" + i).attr("src", imageName29);
      $(".card-text" + i).html(data29.name);
      var dataTrait29 = data29.attributes[2].value;
      $(".card-trait" + i).html(dataTrait29);
      console.log(i);
      break;
    case 30:
      var imageName30 = "https://s7nspfp.mypinata.cloud/ipfs/" + data30.image;
      $(".nft-image" + i).attr("src", imageName30);
      $(".card-text" + i).html(data30.name);
      var dataTrait30 = data30.attributes[2].value;
      $(".card-trait" + i).html(dataTrait30);
      console.log(i);
      break;
    case 31:
      var imageName31 = "https://s7nspfp.mypinata.cloud/ipfs/" + data31.image;
      $(".nft-image" + i).attr("src", imageName31);
      $(".card-text" + i).html(data31.name);
      var dataTrait31 = data31.attributes[2].value;
      $(".card-trait" + i).html(dataTrait31);
      console.log(i);
      break;
    case 32:
      var imageName32 = "https://s7nspfp.mypinata.cloud/ipfs/" + data32.image;
      $(".nft-image" + i).attr("src", imageName32);
      $(".card-text" + i).html(data32.name);
      var dataTrait32 = data32.attributes[2].value;
      $(".card-trait" + i).html(dataTrait32);
      console.log(i);
      break;
    case 33:
      var imageName33 = "https://s7nspfp.mypinata.cloud/ipfs/" + data33.image;
      $(".nft-image" + i).attr("src", imageName33);
      $(".card-text" + i).html(data33.name);
      var dataTrait33 = data33.attributes[2].value;
      $(".card-trait" + i).html(dataTrait33);
      console.log(i);
      break;
    case 34:
      var imageName34 = "https://s7nspfp.mypinata.cloud/ipfs/" + data34.image;
      $(".nft-image" + i).attr("src", imageName34);
      $(".card-text" + i).html(data34.name);
      var dataTrait34 = data34.attributes[2].value;
      $(".card-trait" + i).html(dataTrait34);
      console.log(i);
      break;
    case 35:
      var imageName35 = "https://s7nspfp.mypinata.cloud/ipfs/" + data35.image;
      $(".nft-image" + i).attr("src", imageName35);
      $(".card-text" + i).html(data35.name);
      var dataTrait35 = data35.attributes[2].value;
      $(".card-trait" + i).html(dataTrait35);
      console.log(i);
      break;
    case 36:
      var imageName36 = "https://s7nspfp.mypinata.cloud/ipfs/" + data36.image;
      $(".nft-image" + i).attr("src", imageName36);
      $(".card-text" + i).html(data36.name);
      var dataTrait36 = data36.attributes[2].value;
      $(".card-trait" + i).html(dataTrait36);
      console.log(i);
      break;
    case 37:
      var imageName37 = "https://s7nspfp.mypinata.cloud/ipfs/" + data37.image;
      $(".nft-image" + i).attr("src", imageName37);
      $(".card-text" + i).html(data37.name);
      var dataTrait37 = data37.attributes[2].value;
      $(".card-trait" + i).html(dataTrait37);
      console.log(i);
      break;
    case 38:
      var imageName38 = "https://s7nspfp.mypinata.cloud/ipfs/" + data38.image;
      $(".nft-image" + i).attr("src", imageName38);
      $(".card-text" + i).html(data38.name);
      var dataTrait38 = data38.attributes[2].value;
      $(".card-trait" + i).html(dataTrait38);
      console.log(i);
      break;
    case 39:
      var imageName39 = "https://s7nspfp.mypinata.cloud/ipfs/" + data39.image;
      $(".nft-image" + i).attr("src", imageName39);
      $(".card-text" + i).html(data39.name);
      var dataTrait39 = data39.attributes[2].value;
      $(".card-trait" + i).html(dataTrait39);
      console.log(i);
      break;
    case 40:
      var imageName40 = "https://s7nspfp.mypinata.cloud/ipfs/" + data40.image;
      $(".nft-image" + i).attr("src", imageName40);
      $(".card-text" + i).html(data40.name);
      var dataTrait40 = data40.attributes[2].value;
      $(".card-trait" + i).html(dataTrait40);
      console.log(i);
      break;
    case 41:
      var imageName41 = "https://s7nspfp.mypinata.cloud/ipfs/" + data41.image;
      $(".nft-image" + i).attr("src", imageName41);
      $(".card-text" + i).html(data41.name);
      var dataTrait41 = data41.attributes[2].value;
      $(".card-trait" + i).html(dataTrait41);
      console.log(i);
      break;
    case 42:
      var imageName42 = "https://s7nspfp.mypinata.cloud/ipfs/" + data42.image;
      $(".nft-image" + i).attr("src", imageName42);
      $(".card-text" + i).html(data42.name);
      var dataTrait42 = data42.attributes[2].value;
      $(".card-trait" + i).html(dataTrait42);
      console.log(i);
      break;
    case 43:
      var imageName43 = "https://s7nspfp.mypinata.cloud/ipfs/" + data43.image;
      $(".nft-image" + i).attr("src", imageName43);
      $(".card-text" + i).html(data43.name);
      var dataTrait43 = data43.attributes[2].value;
      $(".card-trait" + i).html(dataTrait43);
      console.log(i);
      break;
    case 44:
      var imageName44 = "https://s7nspfp.mypinata.cloud/ipfs/" + data44.image;
      $(".nft-image" + i).attr("src", imageName44);
      $(".card-text" + i).html(data44.name);
      var dataTrait44 = data44.attributes[2].value;
      $(".card-trait" + i).html(dataTrait44);
      console.log(i);
      break;
    case 45:
      var imageName45 = "https://s7nspfp.mypinata.cloud/ipfs/" + data45.image;
      $(".nft-image" + i).attr("src", imageName45);
      $(".card-text" + i).html(data45.name);
      var dataTrait45 = data45.attributes[2].value;
      $(".card-trait" + i).html(dataTrait45);
      console.log(i);
      break;
    case 46:
      var imageName46 = "https://s7nspfp.mypinata.cloud/ipfs/" + data46.image;
      $(".nft-image" + i).attr("src", imageName46);
      $(".card-text" + i).html(data46.name);
      var dataTrait46 = data46.attributes[2].value;
      $(".card-trait" + i).html(dataTrait46);
      console.log(i);
      break;
    case 47:
      var imageName47 = "https://s7nspfp.mypinata.cloud/ipfs/" + data47.image;
      $(".nft-image" + i).attr("src", imageName47);
      $(".card-text" + i).html(data47.name);
      var dataTrait47 = data47.attributes[2].value;
      $(".card-trait" + i).html(dataTrait47);
      console.log(i);
      break;
    case 48:
      var imageName48 = "https://s7nspfp.mypinata.cloud/ipfs/" + data48.image;
      $(".nft-image" + i).attr("src", imageName48);
      $(".card-text" + i).html(data48.name);
      var dataTrait48 = data48.attributes[2].value;
      $(".card-trait" + i).html(dataTrait48);
      console.log(i);
      break;
    case 49:
      var imageName49 = "https://s7nspfp.mypinata.cloud/ipfs/" + data49.image;
      $(".nft-image" + i).attr("src", imageName49);
      $(".card-text" + i).html(data49.name);
      var dataTrait49 = data49.attributes[2].value;
      $(".card-trait" + i).html(dataTrait49);
      console.log(i);
      break;
    default:
      console.log("A problem occured in the switch statement");
  }
}

$(".home").on("click", function() {
  $("main").css("display", "block");
  $("#detail").css("display", "none");
});

$(".card").on("click", function() {
  var imageSrc = event.target.getAttribute("src");
  $("main").css("display", "none");
  $("#detail").css("display", "block");
  location.href = "#detail";
  $(".detail-nft-image").attr("src", imageSrc);
  $(".imageDownload").attr("download", imageSrc).attr("href", imageSrc);

  var cardNumber = event.target.getAttribute("class").slice(19, 21);

  if (cardNumber == 0) {
    $(".detail-card-title").html(data.name);
    for (let i = 0; i < 13; i++) {
    $(".detail-card-title" + i).html(data.attributes[i].trait_type);
    $(".detail-card-subtitle" + i).html(data.attributes[i].value);
    }
  } else if (cardNumber == 1) {
   $(".detail-card-title").html(data1.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data1.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data1.attributes[i].value);
   }
 } else if (cardNumber == 2) {
   $(".detail-card-title").html(data2.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data2.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data2.attributes[i].value);
   }
 } else if (cardNumber == 3) {
   $(".detail-card-title").html(data3.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data3.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data3.attributes[i].value);
   }
 } else if (cardNumber == 4) {
   $(".detail-card-title").html(data4.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data4.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data4.attributes[i].value);
   }
 } else if (cardNumber == 5) {
   $(".detail-card-title").html(data5.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data5.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data5.attributes[i].value);
   }
 } else if (cardNumber == 6) {
   $(".detail-card-title").html(data6.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data6.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data6.attributes[i].value);
   }
 } else if (cardNumber == 7) {
   $(".detail-card-title").html(data7.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data7.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data7.attributes[i].value);
   }
 } else if (cardNumber == 8) {
   $(".detail-card-title").html(data8.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data8.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data8.attributes[i].value);
   }
 } else if (cardNumber == 9) {
   $(".detail-card-title").html(data9.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data9.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data9.attributes[i].value);
   }
 } else if (cardNumber == 10) {
   $(".detail-card-title").html(data10.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data10.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data10.attributes[i].value);
   }
 } else if (cardNumber == 11) {
   $(".detail-card-title").html(data11.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data11.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data11.attributes[i].value);
   }
 } else if (cardNumber == 12) {
   $(".detail-card-title").html(data12.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data12.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data12.attributes[i].value);
   }
 } else if (cardNumber == 13) {
   $(".detail-card-title").html(data13.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data13.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data13.attributes[i].value);
   }
 } else if (cardNumber == 14) {
   $(".detail-card-title").html(data14.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data14.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data14.attributes[i].value);
   }
 } else if (cardNumber == 15) {
   $(".detail-card-title").html(data15.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data15.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data15.attributes[i].value);
   }
 } else if (cardNumber == 16) {
   $(".detail-card-title").html(data16.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data16.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data16.attributes[i].value);
   }
 } else if (cardNumber == 17) {
   $(".detail-card-title").html(data17.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data17.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data17.attributes[i].value);
   }
 } else if (cardNumber == 18) {
   $(".detail-card-title").html(data18.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data18.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data18.attributes[i].value);
   }
 } else if (cardNumber == 19) {
   $(".detail-card-title").html(data19.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data19.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data19.attributes[i].value);
   }
 } else if (cardNumber == 20) {
   $(".detail-card-title").html(data20.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data20.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data20.attributes[i].value);
   }
 } else if (cardNumber == 21) {
   $(".detail-card-title").html(data21.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data21.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data21.attributes[i].value);
   }
 } else if (cardNumber == 22) {
   $(".detail-card-title").html(data22.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data22.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data22.attributes[i].value);
   }
 } else if (cardNumber == 23) {
   $(".detail-card-title").html(data23.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data23.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data23.attributes[i].value);
   }
 } else if (cardNumber == 24) {
   $(".detail-card-title").html(data24.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data24.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data24.attributes[i].value);
   }
 } else if (cardNumber == 25) {
   $(".detail-card-title").html(data25.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data25.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data25.attributes[i].value);
   }
 } else if (cardNumber == 26) {
   $(".detail-card-title").html(data26.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data26.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data26.attributes[i].value);
   }
 } else if (cardNumber == 27) {
   $(".detail-card-title").html(data27.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data27.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data27.attributes[i].value);
   }
 } else if (cardNumber == 28) {
   $(".detail-card-title").html(data28.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data28.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data28.attributes[i].value);
   }
 } else if (cardNumber == 29) {
   $(".detail-card-title").html(data29.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data29.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data29.attributes[i].value);
   }
 } else if (cardNumber == 30) {
   $(".detail-card-title").html(data30.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data30.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data30.attributes[i].value);
   }
 } else if (cardNumber == 31) {
   $(".detail-card-title").html(data31.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data31.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data31.attributes[i].value);
   }
 } else if (cardNumber == 32) {
   $(".detail-card-title").html(data32.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data32.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data32.attributes[i].value);
   }
 } else if (cardNumber == 33) {
   $(".detail-card-title").html(data33.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data33.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data33.attributes[i].value);
   }
 } else if (cardNumber == 34) {
   $(".detail-card-title").html(data34.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data34.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data34.attributes[i].value);
   }
 } else if (cardNumber == 35) {
   $(".detail-card-title").html(data35.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data35.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data35.attributes[i].value);
   }
 } else if (cardNumber == 36) {
   $(".detail-card-title").html(data36.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data36.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data36.attributes[i].value);
   }
 } else if (cardNumber == 37) {
   $(".detail-card-title").html(data37.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data37.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data37.attributes[i].value);
   }
 } else if (cardNumber == 38) {
   $(".detail-card-title").html(data38.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data38.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data38.attributes[i].value);
   }
 } else if (cardNumber == 39) {
   $(".detail-card-title").html(data39.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data39.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data39.attributes[i].value);
   }
 } else if (cardNumber == 40) {
   $(".detail-card-title").html(data40.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data40.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data40.attributes[i].value);
   }
 } else if (cardNumber == 41) {
   $(".detail-card-title").html(data41.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data41.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data41.attributes[i].value);
   }
 } else if (cardNumber == 42) {
   $(".detail-card-title").html(data42.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data42.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data42.attributes[i].value);
   }
 } else if (cardNumber == 43) {
   $(".detail-card-title").html(data43.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data43.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data43.attributes[i].value);
   }
 } else if (cardNumber == 44) {
   $(".detail-card-title").html(data44.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data44.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data44.attributes[i].value);
   }
 } else if (cardNumber == 45) {
   $(".detail-card-title").html(data45.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data45.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data45.attributes[i].value);
   }
 } else if (cardNumber == 46) {
   $(".detail-card-title").html(data46.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data46.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data46.attributes[i].value);
   }
 } else if (cardNumber == 47) {
   $(".detail-card-title").html(data47.name);
   for (let i = 0; i < 13; i++) {
   $(".detail-card-title" + i).html(data47.attributes[i].trait_type);
   $(".detail-card-subtitle" + i).html(data47.attributes[i].value);
   }
 } else if (cardNumber == 48) {
    $(".detail-card-title").html(data48.name);
    for (let i = 0; i < 13; i++) {
    $(".detail-card-title" + i).html(data48.attributes[i].trait_type);
    $(".detail-card-subtitle" + i).html(data48.attributes[i].value);
    }
  } else if (cardNumber == 49) {
      $(".detail-card-title").html(data49.name);
      for (let i = 0; i < 13; i++) {
      $(".detail-card-title" + i).html(data49.attributes[i].trait_type);
      $(".detail-card-subtitle" + i).html(data49.attributes[i].value);
   }
 }
});
