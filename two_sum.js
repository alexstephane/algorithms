// /**
//  * @param {number[2,7,11,15]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


// var twoSum = function(nums, target)  {
    
// };

// function twoSum(num, target) {

//  let comp = new Map();
//  let len = nums.length

//  for(let i = 0; i < len; i++){
//      if(comp[num[i]]>=0){
//          return [comp[num[i]], i]
//      }
//      comp[target - nums[i]] = i
//  }
//  return []

// }

// let nums = [2,7,11,15]
// console.log(twoSum(nums,9))



// solution 2



//sudo code
//[2,7,11,15] target =9

//if 2 is in Map
//push the diff of target - curr = 9 -2 =7
//if 7 is in Map = yes
//push the diff of target - curr = 9 -7 =2
// 7 + 2 = 9
// map = {7:0}
// return [1,0]

var twoSum = function(nums, target){

    let map = new Map()

    for(let i = 0; i < nums.length; i++){
        let currVal = nums[i]
       
        if(map.has(currVal)){
            return [map.get(currVal), i]
        }

        let diff = target - currVal
        map.set(diff, i)
    }



}

