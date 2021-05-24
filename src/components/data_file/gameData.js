import env from "../../images/env.svg";
import bird from "../../images/bird.svg";
import recycling01 from "../../images/recycling01.svg";
import recycling02 from "../../images/recycling02.svg";
import recycling03 from "../../images/recycling03.svg";
import recycling04 from "../../images/recycling04.svg";
import recycling05 from "../../images/recycling05.svg";
import recycling06 from "../../images/recycling06.svg";
import filteringWater from "../../images/filteringWater.svg";
import greenEnergy from "../../images/greenEnergy.svg";
import cleanEnergy from "../../images/cleanEnergy.svg";
import solarPanel from "../../images/solarPanel.svg";
import greenCar from "../../images/greenCar.svg"

export let gameData = [
  { id: 1, clicked: false, text: "Eco Friendly World", svgUrl: env },
  { id: 2, clicked: false, text: "Electrocar We Love", svgUrl: greenCar },
  { id: 3, clicked: false, text: "Recycle Recycling Waste", svgUrl: recycling01 },
  { id: 4, clicked: false, text: "Bin Recycle Recycling", svgUrl: recycling02 },
  { id: 5, clicked: false, text: "Recycling Sorting Waste", svgUrl: recycling03 },
  { id: 6, clicked: false, text: "Glass Bottle Recycle", svgUrl: recycling04 },
  { id: 7, clicked: false, text: "Plastic Bottle Recycle", svgUrl: recycling05 },
  { id: 8, clicked: false, text: "Metal Can Recycling", svgUrl: recycling06 },
  { id: 9, clicked: false, text: "Drink Filtered Water", svgUrl: filteringWater },
  { id: 10, clicked: false, text: "Renewable Green Energy", svgUrl: greenEnergy },
  { id: 11, clicked: false, text: "Green Wind Turbine", svgUrl: cleanEnergy },
  { id: 12, clicked: false, text: "Green Solar Panel", svgUrl: solarPanel },
];
