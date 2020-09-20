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
int traverseTree(struct TreeNode* p, int sum){

    if(!p){
        return 0;
    }

    sum += p->val;

    if(p->left){
        traverseTree(p->left, sum);
    }
    if(p->right){
        traverseTree(p->right, sum);
    }

    if(SUM == sum){
        FLAG = true;
    }

    return sum;
}

bool hasPathSum(struct TreeNode* root, int sum){

    SUM = sum;
    FLAG = false;
    if(!root){
        return 0 == sum;
    }

    traverseTree(root, 0);
    return FLAG;
}