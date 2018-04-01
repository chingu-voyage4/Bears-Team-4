const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_HOUR = 1000 * 60 * 60;
const _MS_PER_MIN = 1000 * 60;

// Calculate difference between days
export function dateDiff(a, b = new Date()) {
  a = new Date(a); // Converting Server date to local date

  let timeDifference = b-a;

  if (timeDifference > _MS_PER_DAY) {
    return Math.floor(timeDifference / _MS_PER_DAY) + " days";
  } else if (timeDifference > _MS_PER_HOUR) {
    return Math.floor(timeDifference / _MS_PER_HOUR) + " hours";
  } else {
    return Math.floor(timeDifference / _MS_PER_MIN) + " miniutes";
  }
}

// Limit the output characters of given string and if exceed also add "..." to the end.
export function limitCharacters(sentence, limit = 100) {
  if (sentence.length > 100) {
    return sentence.substr(0, limit) + " ...";
  } else {
    return sentence;
  }
}
