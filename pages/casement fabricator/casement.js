// code for casement window fabrication
//helper functions / utility code
function __(Selector) {
    return document.querySelector(Selector) //querySelector
}

function _(ele) {
    return document.createElement(ele) //create element
}

// VAR DECLARATIONS
const fullLength = 5850; // standard aluminium profile length in milimeters
const glassSheet = 2289800; // area of a sheet of glass in milimeters sq

let xWidth, yHeight;  // xwidth || xheight refers to the orginal measurement from input
let rubberLength;
let rubberLengthFixed;
let brushLength;
let brushLengthFixed;
let mullionCal;
let decurveWidthCal /// constant values!!!!! do not alter!!!!
let decurveHeigthCal;/// constant values!!!!! do not alter!!!!
let glassWidth;// xWidth / 2 - 82 +18 -----glass widthformula
let glassHeight;// xHeight - 120 -----glass formula
let glassSize;
let angleCal;



const accesory = {
    jamScrew: 30,
    couplingScrew: 4,
    stopper: 1,//set,
    handle: 1,//set,
    hinges: 1,//set,
    rubber: xWidth * 2 + yHeight * 2,
    brush: xWidth * 2 + yHeight * 2,
    angleQty: 20
    
};
const { stopper, handle, hinges, rubber, brush, jamScrew, couplingScrew, angleQty } = accesory; //
//   ....................................................................................................
//              !!!!   Do no alter any value  in this code   !!!!!!
//   ....................................................................................................

function getWindow() {

    decurveWidthCal = xWidth / 2 - 50; /// constant values!!!!! do not alter!!!!
    decurveHeigthCal = yHeight - 65; /// constant values!!!!! do not alter!!!!
    mullionCal = yHeight - 65; /// constant values!!!!! do not alter!!!!
    glassWidth = decurveWidthCal - 108; /// constant values!!!!! do not alter!!!!
    glassHeight = yHeight - 108 /// constant values!!!!! do not alter!!!!
    glassSize = (glassHeight * glassWidth) * 2;// area of a glass
    rubberLength = Math.ceil(glassHeight + glassWidth) * 4 / 1000
    rubberLengthFixed = rubberLength.toFixed()
    brushLength = Math.ceil((decurveWidthCal + decurveHeigthCal * 4) / 1000)
    brushLengthFixed = brushLength.toFixed()
    angleCal = 720 // appx value for 20pcs of angle at 35mm 
    return {
        Width: `Width:${xWidth}mm (2pcs)\n`,
        Height: `Height:${yHeight}mm (2pcs)\n`,
        decurveWidth: `Decurve width: ${decurveWidthCal}mm (4pcs)\n`,
        decurveHeight: `Decurve Height: ${decurveHeigthCal}mm (4pcs)\n`,
        mullion: `mullion: ${mullionCal}mm (1pcs)\n`,
        Glass: `Glass: ${glassWidth}mm  X ${glassHeight}mm (2pcs)\n`,
        Estimated_accesories_per_window:
        {
            Stopper: `Stopper: ${stopper}(set)\n`,
            Handle: `Handle: ${handle}(set)\n`,
            Hinges: `Hinges: ${hinges}(set)\n`,
            Rubber: `Rubber: ${rubberLengthFixed}M  ~appx.\n`,
            Brush: `Brush: ${brushLengthFixed}M   ~appx.`,
            Coupling_Screw: `Coupling Screws: ${couplingScrew}(pcs)`,
            Jam_Screw: `Jam screws: ${jamScrew}(pcs)`,
            Angle: `Angle: 35mm x ${angleQty}(pcs)   ~appx 720mm`
        }
    };

}

//handlers function
function getPrice() {

    let
        widthPrice = parseInt(__("#item1").value),
        heightPrice = parseInt(__("#item2").value),
        decurveWidthPrice = parseInt(__("#item3").value),
        decurveHeightPrice = parseInt(__("#item4").value),
        mullionPrice = parseInt(__("#item5").value),
        stopperPrice = parseInt(__("#item6").value),
        glassSheetPrice = parseInt(__("#item7").value),
        hingesPrice = parseInt(__("#item8").value),
        rubberPrice = parseInt(__("#item9").value),
        handlePrice = parseInt(__("#item10").value),
        couplingScrewPrice = parseInt(__("#item11").value),
        jamScrewPrice = parseInt(__("#item12").value),
        brushPrice = parseInt(__("#item13").value),
        anglePrice = parseInt(__("#item14").value);
    //


    // aluminium length size calculator
    function lengthCal(size, fullPrice) {
        return (size / fullLength * fullPrice) * 2;
    };

    //glass area calculator
    function glassCal(size, sheetPrice) {
        return (size / glassSheet * sheetPrice) * 2;
    };

    //set prices
    const widthCost = __("#width-cost");
    widthCost.innerText = 'N' + Math.ceil(lengthCal(xWidth, widthPrice).toFixed(3));
    const heightCost = __("#height-cost");
    heightCost.innerText = 'N' + Math.ceil(lengthCal(yHeight, heightPrice).toFixed(3));
    const decurveWidthCost = __("#decurve-width-cost");
    decurveWidthCost.innerText = 'N' + Math.ceil(lengthCal(decurveWidthCal, decurveWidthPrice).toFixed(3));
    const decurveHeightCost = __("#decurve-height-cost");
    decurveHeightCost.innerText = 'N' + Math.ceil(lengthCal(decurveHeigthCal, decurveHeightPrice).toFixed(3));
    const mullionCost = __("#mullion-cost");
    mullionCost.innerText = 'N' + Math.ceil(lengthCal(mullionCal, mullionPrice).toFixed(3));

    const glassCost = __("#glass-cost");
    glassCost.innerText = 'N' + Math.ceil(glassCal(glassSize, glassSheetPrice).toFixed(3));
    // console.log(glassCal(glassSize, glassSheetPrice)) //fix glass to return a number
    const stopperCost = __("#stopper-cost");
    stopperCost.innerText = 'N' + stopperPrice;
    const hingesCost = __("#hinges-cost");
    hingesCost.innerText = 'N' + hingesPrice;
    const rubberCost = __("#rubber-cost");
    rubberCost.innerText = 'N' + rubberPrice + " (per_roll)";

    const handleCost = __("#handle-cost");
    handleCost.innerText = 'N' + handlePrice;
    const couplingScrewCost = __("#coupling-screw-cost");
    couplingScrewCost.innerText = 'N' + couplingScrewPrice * couplingScrew;
    const jamScrewCost = __("#jam-screw-cost");
    jamScrewCost.innerText = 'N' + jamScrewPrice * jamScrew;

    const brushCost = __("#brush-cost");
    brushCost.innerText = 'N' + brushPrice * brushLengthFixed;

    const angleCost = __("#angle-cost");
    angleCost.innerText = 'N' + Math.ceil(lengthCal(angleCal, anglePrice).toFixed(3));

    return {
        widthPrice, heightPrice,
        decurveWidthPrice, decurveHeightPrice, mullionPrice, glassSheetPrice,
        stopperPrice, rubberPrice, handlePrice,
        couplingScrewPrice, jamScrewPrice,
        brushPrice, anglePrice
    };

};

function saveNewPrice() {
    for (var i = 100; i <= 112; i++) {
        var inputIds = 'item' + i;
        let inputValueForCasement = document.getElementById(inputIds).value;
        localStorage.setItem(inputIds, JSON.stringify(inputValueForCasement))
        
    };
    __('#updatePriceBtn').style.color = 'green';

};


////////////////////////////////////////////////////////////////////////////
function makeWindow() {                                                           //mother function

    let {                                                                              //get variables from getwindow()
        Width,
        Height, decurveWidth, decurveHeight, mullion, Glass,
        Estimated_accesories_per_window: {
            Stopper,
            Handle,
            Hinges,
            Rubber,
            Brush,
            Coupling_Screw,
            Jam_Screw,
            Angle }
    } = getWindow();

    // set profilesFieldset innertext

    const widthSize = __("#width-size");
    widthSize.innerText = Width;

    const heightSize = __("#height-size");
    heightSize.innerText = Height;

    const decurveWidthSize = __("#decurve-width-size");
    decurveWidthSize.innerText = decurveWidth;

    const decurveheightSize = __("#decurve-height-size");
    decurveheightSize.innerText = decurveHeight;

    const mullionSize = __("#mullion-size");
    mullionSize.innerText = mullion;
    const glassSize = __("#glass-size");
    glassSize.innerText = Glass;

    // set accessoriesFieldset innertext
    const stopper = __("#stopper-set");
    stopper.innerText = Stopper;
    const handle = __("#handle-set");
    handle.innerText = Handle;
    const hinges = __("#hinges-set");
    hinges.innerText = Hinges;
    const rubber = __("#rubber-qty");
    rubber.innerText = Rubber;
    const brush = __("#brush-qty");
    brush.innerText = Brush;
    const couplingScrew = __("#coupling-screw-qty");
    couplingScrew.innerText = Coupling_Screw;
    const jamScrew = __("#jam-screw-qty");
    jamScrew.innerText = Jam_Screw;
    const angle = __("#angle-qty");
    angle.innerText = Angle;
};


////////////////////////////////////////////////////////////////////////////


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
    try {
        xWidth = parseInt(__("#width").value);
        yHeight = parseInt(__("#height").value);
        console.log(xWidth, yHeight)
        if (isNaN(xWidth) || isNaN(yHeight)) {
            console.log(xWidth, yHeight)
            alert('Enter valid measurements')
            return false

        }
        if (xWidth > 1200 || yHeight > 1200){
            console.log(xWidth, yHeight)
            alert('measurements is above (1200mm)4ft')
            makeWindow();

        }
        if (xWidth < 600 || yHeight < 600){
            console.log(xWidth, yHeight)
            alert('measurements is below (600mm)2ft')
            makeWindow();

        }
        makeWindow();
        __('#output').style.display = "block"
        fabricateBtn.style.display = 'none'
    } catch (error) {
        // Display error message
        alert(error.message);
    }

})



// simple method to remove div at btn click
function removeDiv(e) {
    __(`#${e}`).style.display = 'none'
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
    for (var i = 100; i <= 114; i++) {
        var inputIds = 'item' + i;
        let storedValueForCasement = localStorage.getItem(inputIds);
        storedValueForCasement  = JSON.parse(storedValueForCasement)
        if (storedValueForCasement) {
            document.getElementById(inputIds).value = storedValueForCasement;
        } else (null)
    }
}