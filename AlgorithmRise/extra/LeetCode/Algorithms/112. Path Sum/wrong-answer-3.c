/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool FLAG = false;
int SUM = 0;
int traverseTree(struct TreeNode* p, int sum, int level){

    if(!p){
        return 0;
    }

    sum += p->val;

    if(p->left){
        traverseTree(p->left, sum, level+1);
    }
    if(p->right){
        traverseTree(p->right, sum, level+1);
    }

    if(!(p->left) || !(p->right)){
        if(level && SUM == sum){
            FLAG = true;
        }
    }

    return sum;
}

bool hasPathSum(struct TreeNode* root, int sum){

    SUM = sum;
    FLAG = false;
    if(!root){
        return false;
    }

    traverseTree(root, 0, 0);
    return FLAG;
}