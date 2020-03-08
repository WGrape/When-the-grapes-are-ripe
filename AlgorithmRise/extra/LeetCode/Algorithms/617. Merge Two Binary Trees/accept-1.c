/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

void traverseTree(struct TreeNode* t1, struct TreeNode* t2){

    // 先访问当前节点
    if(t1 && t2){
        t1->val = t1->val + t2->val;
    }

    // 访问左孩子
    if( t1->left && t2->left ){
        traverseTree(t1->left, t2->left);
    }else if( t1->left && !(t2->left)){
        // do nothing
    }else if( !(t1->left) && t2->left ){
        t1->left = t2->left;
    }

    // 访问右孩子
    if( t1->right && t2->right ){
        traverseTree(t1->right, t2->right);
    }else if( t1->right && !(t2->right)){
        // do nothing
    }else if( !(t1->right) && t2->right ){
        t1->right = t2->right;
    }
}

struct TreeNode* mergeTrees(struct TreeNode* t1, struct TreeNode* t2){

    if(!t1 || !t2){
        return !t1 ? t2 : t1;
    }

    traverseTree(t1, t2);

    return t1;
}