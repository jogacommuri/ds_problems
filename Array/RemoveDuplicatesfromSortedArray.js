/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count =0;

    for(let i=0;i<nums.length;i++){
        if(nums[count] != nums[i]){
            count++;
            nums[count] = nums[i];
        }
    }

    return count;
};

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr)) ;