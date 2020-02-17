/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int traverseLeft(int *visit, struct TreeNode* p, int step){

    if(!p){
        return step;
    }
    visit[step] = p->val;
    step = traverseLeft(visit, p->left, step+1);
    step = traverseLeft(visit, p->right, step+1);
    return step;
}

int traverseRight(int *visit, struct TreeNode* p, int step){

    if(!p){
        return step;
    }
    p->val = visit[step];
    step = traverseRight(visit, p->right, step+1);
    step = traverseRight(visit, p->left, step+1);
    return step;
}

struct TreeNode* mirrorTree(struct TreeNode* root){

    int visit[1005] = {0};

    // 先向左前序遍历
    traverseLeft(visit, root, 0);

    // 再向右遍历
    traverseRight(visit, root, 0);

    return root;
}

// 这个解答只适用于满二叉树的情况 ！！！
// 即只适用于节点满的情况