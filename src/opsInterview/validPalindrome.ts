export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (!leftChar || !isAlphaNumeric(leftChar)) {
      left++;
      continue;
    }

    if (!rightChar || !isAlphaNumeric(rightChar)) {
      right--;
      continue;
    }

    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;

  // let reversed = s.split("").reverse().join("");

  // return s === reversed;
}

function isAlphaNumeric(char: string): boolean {
  return /^[a-z0-9]$/i.test(char);
}
