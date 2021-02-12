// /**
//  * @param {number[2,7,11,15]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


// var twoSum = function(nums, target)  {
    
// };

function twoSum(num, target) {

 let comp = new Map();
 let len = nums.length

 for(let i = 0; i < len; i++){
     if(comp[num[i]]>=0){
         return [comp[num[i]], i]
     }
     comp[target - nums[i]] = i
 }
 return []

}

let nums = [2,7,11,15]
console.log(twoSum(nums,9))