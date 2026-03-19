import { noDeprecation } from "node:process";

export const format = (name, ordinalNumber) => {
  return `${name}, you are the ${ordinalNumber}${getOrdinalSuffix(ordinalNumber)} customer we serve today. Thank you!`
};

function getOrdinalSuffix(ordinalNumber)
{
  const value = ordinalNumber % 100;

  if(value == 11 || value == 12|| value == 13)
  {
    return "th";
  }

  if(ordinalNumber % 10 == 1)
  {
    return "st";
  }

  else if(ordinalNumber % 10 == 2)
  {
    return "nd";
  }

  else if(ordinalNumber % 10 == 3)
  {
    return "rd";
  }

  return "th";
};