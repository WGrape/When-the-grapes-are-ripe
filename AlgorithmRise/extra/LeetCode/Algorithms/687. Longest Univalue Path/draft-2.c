/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int max = -1;
void traverseTree(struct TreeNode* pre, struct TreeNode* p, int path){

    if(!p){
        return;
    }

    if(!pre){

        path = 0;
    }else{

        if(pre->val != p->val){
            path = 0;
        }else{
            ++path;
        }
    }

    max = path > max ? path : max;

    if(p->left){
        traverseTree(p, p->left, path);
    }

    if(p->right){
        traverseTree(p, p->right, path);
    }
}

int longestUnivaluePath(struct TreeNode* root){

    max = -1;
    traverseTree(NULL, root, 0);

    return max;
}