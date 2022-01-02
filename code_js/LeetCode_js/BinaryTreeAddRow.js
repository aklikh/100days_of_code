/*
Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at 
the given depth d. The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes 
with value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree
 of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root. 
 If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree,
 and the original tree is the new root's left subtree.
*/



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var addOneRow = function(root, val, depth) {
    if (depth === 1){
        var new_row =  new TreeNode(val) 
        new_row.left = root
        root = new_row
        return root
    }

    function Recursion(root, level, value){
        if (root) {
            if (level!== 1) {
                Recursion(root.left, level - 1, value)
                Recursion(root.right, level-1, value)
            } else {
                if (root.left) {
                    left= root.left
                    root.left = new TreeNode(value) 
                    root.left.left = left
                }
                                                    
                if (root.right) {
                    right= root.right
                    root.right = new TreeNode(value)
                    root.right.right=right  
                }   
                                                    
                if (root.left === null) {
                    root.left = new TreeNode(value)
                }                                   
                                                                
                if (root.right=== null) {
                    root.right = new TreeNode(value)
                }             

            }             
             
        }
                
    }
     
    Recursion(root, depth-1, val)
    return root
};
