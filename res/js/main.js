const stone = document.getElementById("stone");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");
const pickUpgrade = document.getElementById("pickUpgrade");

let numberOfStones = 0;
let stoneincreaseNumber = 2;
let cookieAutoclickerincreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;
let autoclickerUpgradePrice = 100;
let pickUpgradePrice = 200;
let pickUpgradeLevel = 1;

stone.onclick = () => {
  numberOfStones += stoneincreaseNumber;

  counter.innerText = "Mined: " + numberOfStones;
};

clickUpgrade.onclick = () => {
  if (numberOfStones >= clickUpgradePrice) {
    numberOfStones -= clickUpgradePrice;
    clickUpgradePrice *= 2;
    clickUpgrade.innerText = "Buy mine upgrade: " + clickUpgradePrice;
    counter.innerText = "Mined: " + numberOfStones;
    stoneincreaseNumber++;
  }
};

autoclickerUpgrade.onclick = () => {
  if (numberOfStones >= autoclickerUpgradePrice) {
    numberOfStones -= autoclickerUpgradePrice;
    autoclickerUpgradePrice *= 2;
    autoclickerUpgrade.innerText = "Buy automine upgrade: " + autoclickerUpgradePrice;
    counter.innerText = "Mined: " + numberOfStones;
    cookieAutoclickerincreaseNumber++;
    clearInterval(autoclickerInterval);
    autoclickerInterval = setInterval(() => {
      numberOfStones += cookieAutoclickerincreaseNumber;
      counter.innerText = "Mined: " + numberOfStones;
    }, 1000);
  }
};

pickUpgrade.onclick = () => {
  if (pickUpgradeLevel >= 6) {
    stone.style.cursor = "url('res/img/cursor6.png'), auto";
    pickUpgrade.innerText = "Max upgrade";
  } else {
    if (numberOfStones >= pickUpgradePrice) {
      numberOfStones -= pickUpgradePrice;
      pickUpgradePrice *= 2;
      pickUpgradeLevel += 1;
      counter.innerText = "Mined: " + numberOfStones;
      if (pickUpgradeLevel == 2) {
        stone.style.cursor = "url('res/img/cursor1.png'), auto";
        pickUpgrade.innerText = "Buy iron pickaxe: " + pickUpgradePrice;
        stoneincreaseNumber += 5;
      }
      if (pickUpgradeLevel == 3) {
        stone.style.cursor = "url('res/img/cursor2.png'), auto";
        pickUpgrade.innerText = "Buy gold pickaxe: " + pickUpgradePrice;
        stoneincreaseNumber += 10;
      }
      if (pickUpgradeLevel == 4) {
        stone.style.cursor = "url('res/img/cursor3.png'), auto";
        pickUpgrade.innerText = "Buy diamond pickaxe: " + pickUpgradePrice;
        stoneincreaseNumber += 15;
      }
      if (pickUpgradeLevel == 5) {
        stone.style.cursor = "url('res/img/cursor4.png'), auto";
        pickUpgrade.innerText = "Buy netherite pickaxe: " + pickUpgradePrice;
        stoneincreaseNumber += 20;
      }
      if (pickUpgradeLevel == 6) {
        stone.style.cursor = "url('res/img/cursor5.png'), auto";
        pickUpgrade.innerText = "Buy enchanted netherite pickaxe: " + pickUpgradePrice;
        stoneincreaseNumber += 25;
      }
    }
  }
};

function cheats() {
  numberOfStones += 99999;
}
