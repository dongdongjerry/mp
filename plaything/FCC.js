
//反转字符串
let reverseString = str =>{
  return str.split('').reverse().join('');
};
console.log(reverseString("hello"));

//阶乘
let factorialize = num =>{
    if(num === 1 || num === 0) return 1;
    return num * factorialize(num-1);
};
//阶乘尾递归写法
let _factorialize = (num,total=1) => {
    if (num === 1 || num === 0) return total;
    return _factorialize(num-1,num*total)
};

//判断回文数
let palindrome = str =>{
    let str_rev = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split('');
    return str_rev.join('') === str_rev.reverse().join('');
};
console.log(palindrome('e ye'));

//找出最大的数
let findLongestWord = str =>{
  str = str.split(' ');
  str.sort(function (a,b) {
      return b.length - a.length;
  });
  return str[0].length;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//首字母大写
let titleCase = str =>{
    str = str.toLowerCase().split(" ");
    for (let i=0;i<str.length;i++){
        let char = str[i].charAt(0);
        str[i] = str[i].replace(char,char.toUpperCase());
    }
    return str.join(' ');
};
console.log(titleCase("I'm a little tea pot"));

//
let largestOfFour = arr =>{
    let arr2 = [];
    arr.map(function (array) {
        array.sort(function (a,b) {
            return b-a;
        });
        arr2.push(array[0]);
    });
    return arr2;
};
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//匹配最后一个字符
let confirmEnding = (str,target) =>{
  let reg = new RegExp(target+"$");
  return str.search(reg)>-1;
};
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

//重复
let repeat = (str,num) =>{
  let restr = '';
  for (let i=0;i<num;i++){
      restr += str;
  }
  return restr;
};
console.log(repeat("abc",1));

let truncate = (str,num) =>{
    //两个三目运算符
  return str.length<=num ?  str : (num>3 ? str.slice(0,num-3)+"..." : str.slice(0,num)+"...");
};
console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));

//将数组分割为小的数组
let chunk = (arr,size) =>{
    let arr2 = [];
    for (let i=0;i<arr.length/size;i++){
        arr2.push(arr.slice(size*i,size*(i+1)));
    }
    return arr2;
};
console.log(chunk(["a", "b", "c", "d"], 2));

//返回截断后的数组
let slasher = (arr,howMany) =>{
  return arr.slice(howMany,arr.length);
};
console.log(slasher([1, 2, 3], 9));

//匹配字符
let mutation = arr =>{
    let testStr = arr[1].toLowerCase();
    let targetStr = arr[0].toLowerCase();
    for (let i = 0; i < testStr.length; i++) {
        if (targetStr.indexOf(testStr[i])<0) {
            return false;
        }

    }
    return true;
};
console.log(mutation(["hello", "Hello"]));

//sum all numbers in a range
let sumAll = arr =>{
    let sum = 0;
    for (let i=Math.min(arr[0],arr[1]);i<=Math.max(arr[0],arr[1]);i++){
        sum += i;
    }
    return sum;
};
console.log(sumAll([4, 1]));

//Diff Two Arrays
let diff = (arr1,arr2) =>{
    let filter1 = arr1.filter(function (x) {
        return arr2.indexOf(x) === -1;
    });
    let filter2 = arr2.filter(function (x) {
        return arr1.indexOf(x) === -1;
    });
    return filter1.concat(filter2);
};
console.log(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//Where art thou
let where = (collection, source) =>{
    let arr =[];
    let keys = Object.keys(source);
    arr = collection.filter(function (item) {
        for (let i=0;i<keys.length;i++){
            if ( !item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]) {
                return false;
            }
        }
        return true;
    });
    return arr;
};
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Search and Replace
let myReplace = (str,before,after) =>{

    console.log(!before[0].match(/^.*[A-Z]+.*$/));
    !before[0].match(/^.*[A-Z]+.*$/) ? after[0]=after[0] : after = after[0].toUpperCase() + after.slice(1) ;
    console.log(after[0].toUpperCase());
    return str.replace(before,after);
};
console.log(myReplace("His name is Tom", "Tom", "john"));

//DNA Pairing
let pair = str =>{
    let arr = [];
    arr = str.split('').map(function (item) {
        switch (item){
            case "A" : return ["A","T"];break;
            case "T" : return ["T","A"];break;
            case "C" : return ["C","G"];break;
            case "G" : return ["G","C"];break;
        }
    });
    return arr;
};
console.log(pair("GCG"));
