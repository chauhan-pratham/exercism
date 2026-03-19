//Finding first letter of a sentence
export function frontDoorResponse(line) {
  return line[0];
}

//Making the first letter capital and other letters small
export function frontDoorPassword(word) {
  let first_letter = word[0].toUpperCase();
  let other_letters = word.slice(1).toLowerCase();
  return first_letter+other_letters;
}

//Fiding Last letter of a sentence after removing white spaces.
export function backDoorResponse(line) {
  let modified_line = line.trim();
  return modified_line[modified_line.length-1]
}

// String concatenation
export function backDoorPassword(word) {
  return frontDoorPassword(word) +", please";
}
