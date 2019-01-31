/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let res = [];
    let len = nums.length;

    for(let i=0;i<k;i++){
        res[i] = nums[len - k + i];
    }
    for( let i=0;i<len-k;i++){
        res[k+i] = nums[i];
    }

    return res;
};

console.log(rotate([1,2,3,4,5,6,7],3));