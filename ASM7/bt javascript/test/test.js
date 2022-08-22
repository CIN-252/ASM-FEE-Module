// 1: Write a JavaScript program to check whether a string starts with 'Java' and false otherwise:
console.log("1.");

function start_spec_str(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));

// 2. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive:
console.log("2.");

function numbers_ranges(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(numbers_ranges(44, 56));
console.log(numbers_ranges(70, 95));
console.log(numbers_ranges(50, 89));

// 3. Write a JavaScript program to find the largest of three given integers:
console.log("3.");

function max_of_three(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 510, 440));

// 4. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11:
console.log("4.");

function valCheck(a, b) {
  if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
  } else return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));

// 5. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string:
console.log("5.");

function ab_Check(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

// 6. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1:
console.log("6.");

function swap(array) {
  if (array.length > 1) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
  } else return "Error: The array length should be at least 1!";
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));

// 7. Write a JavaScript to find the longest string from a given array of strings:
console.log("7.");

function longest_str_in_array(array) {
  let max_str = array[0].length;
  let ans = array[0];
  for (let i = 1; i < array.length; i++) {
    const maxi = array[i].length;
    if (maxi > max_str) {
      ans = array[i];
      max_str = maxi;
    }
  }
  return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "abc"]));

// 8. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers:
console.log("8.");

function check_common_element(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) return true;
  }
  return false;
}
console.log(check_common_element([1, 2, 3], [3, 4, 5]));
console.log(check_common_element([1, 2, 3], [5, 6, 7]));

// 9. Write a JavaScript program to get the sum of a given array:
console.log("9.");

const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let i;
for (i = 0; i < array.length; i += 1) {
  sum += array[i];
}
console.log(`Sum : ${sum}`);

// 10. Write a JavaScript program to sort a given array in descending order:
console.log("10.");

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let arr2 = [];
let min = arr1[0];
let pos;
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = "x";
  min = max;
}
arr2 = arr2.reverse();

console.log(arr2);

// 11. Write a JavaScript program to check whether all elements in a given array are equal or not:
console.log("11.");

const allEqual = (arr) => arr.every((val) => val === arr[0]);
console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));

// 12. Write a JavaScript program to return the difference between two arrays:
console.log("12.");

var first = [1, 2, 3, 4, 5];
var second = [4, 5, 6];

var difference = first.filter((x) => second.indexOf(x) === -1);
console.log(difference);

// 13. Write a JavaScript program to move the specified amount of elements to the end of the array:
console.log("13.");

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
console.log(offset([1, 2, 3, 4, 5], 2));
console.log(offset([1, 2, 3, 4, 5], -2));

// 14. Write a JavaScript program to convert a given string into an array of words:
console.log("14.");

string_to_array = function (str) {
  return str.trim().split(" ");
};
console.log(string_to_array("Hello Everyone!"));

// 15. Write a JavaScript program to get all unique values (form the right side of the array) of an array:
console.log("15.");

const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(
  uniqueElementsByRight(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);

// 16. Write a JavaScript program to convert a 2D array to a comma-separated values (CSV) string:
console.log("16.");

let array2D = [
  ["a", "2"],
  ["c", "d"],
];

let csv = array2D
  .map((item) => {
    let row = item;

    return row.join(",");
  })
  .join("\n");

console.log(csv);

// 17. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs:
console.log("17.");

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
console.log(parseCookie("foo=bar; equation=E%3Dmc%5E2"));

// 18. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one:
console.log("18.");

let obj1 = {
  name: "John",
  age: 23,
  degree: "CS",
};

let obj2 = {
  age: 23,
  degree: "CS",
};

function check(obj1, obj2) {
  for (key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(check(obj1, obj2));

// 19. Write a JavaScript program to create a new object from the specified object, where all the keys are in lowercase:
console.log("19.");

const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
const myObj = { Name: "Cin", lAsTnAME: "Ngaow" };
const myObjLower = lowercaseKeys(myObj);
console.log(myObjLower);

// 20. Write a JavaScript program to flatten an object with the paths for keys:
console.log("20.");

let ob = {
  Company: "AZTECH",
  Address: "123 TX25",
  contact: +113 - 113113113,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

const flattenObj = (ob) => {
  let result = {};

  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

console.log(flattenObj(ob));
