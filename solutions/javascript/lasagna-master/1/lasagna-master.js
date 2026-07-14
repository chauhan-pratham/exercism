/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime)
{
  if(remainingTime === 0)
  {
    return 'Lasagna is done.';
  }

  else if (remainingTime === undefined)
  {
    return 'You forgot to set the timer.';
  }
  else
  {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, avg_preparation_time)
{
	if (avg_preparation_time === undefined)
	{
		return layers.length * 2;
	}
	else
	{
		return layers.length * avg_preparation_time;
	}
}

export function quantities(layers)
{
  let noodlesCount = 0;
  let sauceCount = 0;

  for (let i = 0; i< layers.length; i++)
    {
      let currentLayer = layers[i];
      if(currentLayer === 'noodles')
      {
        noodlesCount++;
      }
      else if (currentLayer === 'sauce')
      {
        sauceCount++;
      }
    }

	return{
		noodles: noodlesCount * 50,
		sauce: sauceCount * 0.2,
	};
}

export function addSecretIngredient(friendsList, myList)
{
  let lastItem = friendsList[friendsList.length - 1];
  myList.push(lastItem);
}

export function scaleRecipe(recipe, portions)
{
  const factor = portions/2;
  const scaledRecipe = {};

  for (const ingredient in recipe){
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return scaledRecipe;
}
