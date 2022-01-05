/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0

Constraints:

    0 <= haystack.length, needle.length <= 5 * 104
    haystack and needle consist of only lower-case English characters.
*/

var strStr = function(haystack, needle) {
    if (needle.length > haystack.length){
        return -1
    }
    
    if (needle === "" || needle === haystack) {
        return 0
    }
    
    let stop_point = haystack.length-needle.length  
    
    for (i=0; i < stop_point+1; i++) {
        for (j=0; j < needle.length; j++){
           
           if (haystack[i+j] !== needle[j]) {
               break    
           } 
             
          if (j+1 === needle.length){
              return i
          }
        }
    }
    return -1
};
