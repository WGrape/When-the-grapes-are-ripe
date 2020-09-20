bool traverseTree(struct TreeNode* p, struct TreeNode* q){

    if(p->val != q->val){
        return false;
    }

    if(p->left && !(q->left)){
        return false;
    }else if(!(p->left) && q->left){
        return false;
    }else if(p->right && !(q->right)){
        return false;
    }else if(!(p->right) && q->right){
        return false;
    }

    // 左子树
    bool res = true;
    if(p->left){
        res = traverseTree(p->left, q->left);
    }
    if(!res){
        return false;
    }

    // 右子树
    if(p->right){
        res = traverseTree(p->right, q->right);
    }
    if(!res){
        return false;
    }

    return true;
}

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


bool isSameTree(struct TreeNode* p, struct TreeNode* q){

    if(!p || !q){
        return !p && !q ? true : false;
    }

    return traverseTree(p, q);
}