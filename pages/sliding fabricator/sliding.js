

// HELPER FUNCTIONS TO CREATE AND QUERTY ELEMENTS
function _(type) {
  return document.createElement(type);
}
function __(type) {
  return document.querySelector(type);
}

// VAR DECLARATIONS
const fullLength = 5850; // standard aluminium profile length in milimeters
const glassSheet = 2289800; // area of a sheet of glass in milimeters sq
let xWidth, yHeight;
let rubberLength;
let rubberLengthFixed;
let brushLength;
let brushLengthFixed;
let tbCal; // xWidth / 2 - 82 -----topbottom formula
let ilCal;  // yHeight - 40 -----interlock formula
let glassWidth;// xWidth / 2 - 82 +18 -----glass widthformula
let glassHeight;// xHeight - 120 -----glass formula
let glassSize;



const accesory = {
  jamScrew: 10,
  couplingScrew: 8,
  roller: 1,//set,
  key: 1,//set,
  rubber: xWidth * 2 + yHeight * 2,
  brush: xWidth * 2,
};
const { roller, key, rubber, brush, jamScrew, couplingScrew } = accesory;
//   ....................................................................................................
//              !!!!   Do no alter any value  in this code   !!!!!!
//   ....................................................................................................

function getWindow() {

  tbCal = xWidth / 2 - 82 /// constant values!!!!! do not alter!!!!
  ilCal = yHeight - 40 /// constant values!!!!! do not alter!!!!
  glassWidth = tbCal + 18 /// constant values!!!!! do not alter!!!!
  glassHeight = yHeight - 120 /// constant values!!!!! do not alter!!!!
  glassSize = (glassHeight * glassWidth) * 2;// area of a glass
  rubberLength = Math.ceil(glassHeight + glassWidth) * 4 / 1000
  rubberLengthFixed = rubberLength.toFixed()
  brushLength = Math.ceil((tbCal * 4) / 1000)
  brushLengthFixed = brushLength.toFixed()
  return {
    Track: `Track:${xWidth}mm (2pcs)\n`,
    Jam: `Jam:${yHeight - 12}mm (2pcs)\n`,
    Top: `Top: ${tbCal}mm (2pcs)\n`,
    bottom: `bottom: ${tbCal}mm (2pcs)\n`,
    Interlock: `Interlock: ${ilCal}mm (2pcs)\n`,
    Lockstyle: `Lockstyle: ${ilCal}mm (2pcs)\n`,
    Glass: `Glass: ${glassWidth}mm  X ${glassHeight}mm (2pcs)\n`,
    Estimated_accesories_per_window:
    {
      Roller: `Roller: ${roller}(set)\n`,
      Key: `Key: ${key}(set)\n`,
      Rubber: `Rubber: ${rubberLengthFixed}M appx.\n`,
      Brush: `Brush: ${brushLengthFixed}M appx.`,
      Coupling_Screw: `Coupling Screws: ${couplingScrew}(pcs)`,
      Jam_Screw: `Jam screws: ${jamScrew}(pcs)`
    }
  };

}


//   ....................................................................................................

function getPrice() {

  let
    trackPrice = parseInt(__("#item1").value),
    jamPrice = parseInt(__("#item2").value),
    topPrice = parseInt(__("#item3").value),
    bottomPrice = parseInt(__("#item4").value),
    interLockPrice = parseInt(__("#item5").value),
    lockStylePrice = parseInt(__("#item6").value),
    glassSheetPrice = parseInt(__("#item7").value),
    rollerPrice = parseInt(__("#item8").value),
    rubberPrice = parseInt(__("#item9").value),
    keyPrice = parseInt(__("#item10").value),
    couplingScrewPrice = parseInt(__("#item11").value),
    jamScrewPrice = parseInt(__("#item12").value),
    brushPrice = parseInt(__("#item13").value);


  // aluminium length size calculator
  function lengthCal(size, fullPrice) {
    return (size / fullLength * fullPrice) * 2;
  };

  //glass area calculator
  function glassCal(size, sheetPrice) {
    return (size / glassSheet * sheetPrice) * 2;
  };

  //set prices
  const trackCost = __("#track-cost");
  trackCost.innerText = 'N' + Math.ceil(lengthCal(xWidth, trackPrice).toFixed(3));
  const jamCost = __("#jam-cost");
  jamCost.innerText = 'N' + Math.ceil(lengthCal(yHeight, jamPrice).toFixed(3));
  const topCost = __("#top-cost");
  topCost.innerText = 'N' + Math.ceil(lengthCal(tbCal, topPrice).toFixed(3));
  const bottomCost = __("#bottom-cost");
  bottomCost.innerText = 'N' + Math.ceil(lengthCal(tbCal, bottomPrice).toFixed(3));
  const interLockCost = __("#interlock-cost");
  interLockCost.innerText = 'N' + Math.ceil(lengthCal(ilCal, interLockPrice).toFixed(3));
  const lockStyleCost = __("#lockstyle-cost");
  lockStyleCost.innerText = 'N' + Math.ceil(lengthCal(ilCal, lockStylePrice).toFixed(3));

  const glassCost = __("#glass-cost");
  glassCost.innerText = 'N' + Math.ceil(glassCal(glassSize, glassSheetPrice).toFixed(3));
  console.log(glassCal(glassSize, glassSheetPrice)) //fix glass to return a number
  const rollerCost = __("#roller-cost");
  rollerCost.innerText = 'N' + rollerPrice;
  const rubberCost = __("#rubber-cost");
  rubberCost.innerText = 'N' + rubberPrice + " (per_roll)";

  const keyCost = __("#key-cost");
  keyCost.innerText = 'N' + keyPrice;

  const brushCost = __("#brush-cost");
  brushCost.innerText = 'N' + brushPrice * brushLengthFixed;
  const couplingScrewCost = __("#coupling-screw-cost");
  couplingScrewCost.innerText = 'N' + couplingScrewPrice * couplingScrew;
  const jamScrewCost = __("#jam-screw-cost");
  jamScrewCost.innerText = 'N' + jamScrewPrice * jamScrew;

  return {
    trackPrice, jamPrice,
    topPrice, bottomPrice, interLockPrice,
    lockStylePrice, glassSheetPrice,
    rollerPrice, rubberPrice, keyPrice,
    couplingScrewPrice, jamScrewPrice,
    brushPrice
  };

};

function saveNewPrice() {
  for (var i = 1; i <= 13; i++) {
    var inputId = 'item' + i;
    var inputValueForSlide = document.getElementById(inputId).value;
    localStorage.setItem(inputId, inputValueForSlide)
  };
  __('#updatePriceBtn').style.color = 'green';

};
// //   ....................................................................................................


function makeWindow() {                                                           //mother function

  let {                                                                              //get variables from getwindow()
    Track,
    Jam, Top, bottom, Interlock, Lockstyle, Glass,
    Estimated_accesories_per_window: {
      Roller,
      Key,
      Rubber,
      Brush,
      Coupling_Screw,
      Jam_Screw }
  } = getWindow();

  // set profilesFieldset innertext

  const trackSize = __("#track-size");
  trackSize.innerText = Track
  const jamSize = __("#jam-size");
  jamSize.innerText = Jam;
  const TopSize = __("#top-size");
  TopSize.innerText = Top;
  const bottomSize = __("#bottom-size");
  bottomSize.innerText = bottom;
  const interLockSize = __("#interlock-size");
  interLockSize.innerText = Interlock;
  const lockstyle = __("#lockstyle-size");
  lockstyle.innerText = Lockstyle;
  const glassSize = __("#glass-size");
  glassSize.innerText = Glass;

  // set accessoriesFieldset innertext
  const roller = __("#roller-set");
  roller.innerText = Roller;
  const key = __("#key-set");
  key.innerText = Key;
  const rubber = __("#rubber-size");
  rubber.innerText = Rubber;
  const brush = __("#brush-size");
  brush.innerText = Brush;
  const couplingScrew = __("#coupling-screw-qty");
  couplingScrew.innerText = Coupling_Screw;
  const jamScrew = __("#jam-screw-qty");
  jamScrew.innerText = Jam_Screw;
};

const seePriceBtn = __('#getPriceBtn')
seePriceBtn.addEventListener("click", () => {
  getPrice();
  const showPrice = document.querySelectorAll('.show');
  showPrice.forEach(span => {
    span.style.display = 'block'
  });

});

const fabricateBtn = __('#fabricateBtn')
fabricateBtn.addEventListener('click', () => {
  xWidth = parseInt(__("#width").value);
  yHeight = parseInt(__("#height").value);
  console.log(xWidth, yHeight)
  if (isNaN(xWidth) || isNaN(yHeight)) {
    console.log(xWidth, yHeight)
    alert('Enter valid measurements')
    return false

  }
  if (xWidth > 1200 || yHeight > 1200) {
    console.log(xWidth, yHeight)
    alert('measurements is above (1200mm)4ft')
    makeWindow();

  }
  if (xWidth < 600 || yHeight < 600) {
    console.log(xWidth, yHeight)
    alert('measurements is below (600mm)2ft')
    makeWindow();

  }
  makeWindow();
  __('#output').style.display = "block"
  fabricateBtn.style.display = 'none'

})

// simple method to remove div at btn click
function removeDiv(e) {
  return __(`#${e}`).style.display = 'none'
}

function updateSellingPriceBtn() {
  __('#price-UI').style.display = 'flex';
  __('#price-UI').style.transition = 'all 0.6s ease-in-out'
}
function UpdateBtn() {
  // save prices to local storage
  saveNewPrice()

  __('#price-UI').style.display = 'none';
}


// populate prices input with previous values stored on  local storage
window.onload = function () {
  for (var i = 1; i <= 14; i++) {
    var inputId = 'item' + i;
    var storedValForSlide = localStorage.getItem(inputId);
    if (storedValForSlide) {
      document.getElementById(inputId).value = storedValForSlide;
    } else (null)
  }
}