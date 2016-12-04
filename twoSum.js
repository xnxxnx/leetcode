/**Question 1 Two Sum
*
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution.
* https://leetcode.com/problems/two-sum/
* Example:
* Given nums = [2, 7, 11, 15], target = 9,
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(var i = 0; i < nums.length; ++i){
        for(var j = 0; j < nums.length; ++j){
            if(i == j) continue;
            
            if(nums[i] + nums[j] == target){
                if(i < j) return [i+1, j+1];
                else return [j+1, i+1];
            }
        }
    }
};