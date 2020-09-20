/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int traverseTree(struct TreeNode* p, int level){

    int path = 0, path1 = 0, path2 = 0;

    // 空节点
    if(!p){
        return 0;
    }

    // 遍历左子树
    if(p->left){
        path1 = 1 + traverseTree(p->left, level+1);
    }else{
        path1 = 0;
    }
    
    // 遍历右子树
    if(p->right){
        path2 = 1 + traverseTree(p->right, level+1);
    }else{
        path2 = 0;
    }
    
    if(level){
        path = path1 >= path2 ? path1 : path2;
    }else{
        path = path1 + path2;
    }
    return path;
}

int diameterOfBinaryTree(struct TreeNode* root){

    if(!root){
        return 0;
    }

    return traverseTree(root, 0);
}