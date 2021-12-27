/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

*/

var findDisappearedNumbers = function(nums) {
       
    let empty_arr = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if(empty_arr[nums[i]-1] === 0){
            empty_arr[nums[i]-1] = nums[i]
        }
    }
    

    let dissap_num = []

    for (let i = 0; i < empty_arr.length; i++) {
        if(empty_arr[i] === 0){
            dissap_num.push(i+1)
        }
    }

    return dissap_num
};

//test
nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums))    

