/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0;i < nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    // console.log(obj);
    for (let key in obj) {
        if (obj[key] > nums.length / 2) {
            // console.log(key);
            return key;
        }
    }
};
nums = [2,2,1,1,1,2,2]
// majorityElement(nums);
console.log(majorityElement([2,2,1,1,1,2,2]));
