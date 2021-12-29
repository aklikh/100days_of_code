/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
 
Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

*/

var sortArrayByParity = function(nums) {
    let left = 0
    let right = nums.length - 1

    while(left < right){

        if (nums[left]%2 != 0){
            
            let val_l = nums[left]

            while(nums[right]%2 != 0 && right > left){
                right -=1
            }

            nums[left] = nums[right]
            nums[right] = val_l
            left += 1
            right -=1
        } else {
            left +=1
        }          
        
    }

    return nums
};

//test
A = [2,5,8,8,0,1,3]
console.log(sortArrayByParity(A))    