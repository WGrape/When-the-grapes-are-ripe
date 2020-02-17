/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

// 前序遍历
void preOrderTraverse(struct TreeNode* node){

    if(!node){
        return;
    }

    struct TreeNode* _node = node->left;
    node->left = node->right;
    node->right = _node;

    preOrderTraverse(node->left);
    preOrderTraverse(node->right);
}

struct TreeNode* invertTree(struct TreeNode* root){
    
    preOrderTraverse(root);
    
    return root;
}