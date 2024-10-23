---
title: "Unexpected TLE on Leetcode 2641. Cousins in Binary Tree II"
description: "In Leetcode 2641. Cousins in Binary Tree II, I got a TLE on a O(n) solution. This is not expected. Turns out it is due to my overlook of the push_back operation in C++."
date: 2024-10-23T12:00:51+08:00
image: 
hidden: false
comments: true
categories:
    - leetcode
    - Algorithm
tags:  
    - leetcode
---

Today I was solving [Leetcode 2641. Cousins in Binary Tree II](https://leetcode.com/problems/cousins-in-binary-tree-ii/), a medium level problem. 

The problem is about finding the cousins of a node in a binary tree. The cousins of a node are the nodes that are at the same level as the node but have different parents.

The first solution that came to my mind was a 2-pass DFS solution, which is `O(n)` in time complexity. Pretty fast right?

Well, I got a TLE.

I calculate the time each dfs function took:

```cpp
vector<int> levels;
TreeNode* replaceValueInTree(TreeNode* root) {
    // Measure dfsadd time
    auto start_dfsadd = std::chrono::high_resolution_clock::now();
    dfsadd(root, 0);
    auto end_dfsadd = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> elapsed_dfsadd = end_dfsadd - start_dfsadd;
    std::cout << "dfsadd call took: " << elapsed_dfsadd.count() << " ms\n";

    // Measure dfs time
    auto start_dfs = std::chrono::high_resolution_clock::now();
    dfs(root, 0, 0);
    auto end_dfs = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> elapsed_dfs = end_dfs - start_dfs;
    std::cout << "dfs call took: " << elapsed_dfs.count() << " ms\n";

    return root;
}

void dfs(TreeNode* root, int level, int sibling) {
    if (!root) return;
    int sibr = 0, sibl = 0;
    if (root->right) sibr = root->right->val;
    if (root->left) sibl = root->left->val;
    dfs(root->left, level+1, sibr);
    dfs(root->right, level+1, sibl);
    root->val = levels[level] - root->val - sibling;
}

void dfsadd(TreeNode* root, int level) {
    if (!root) return;
    if (levels.size() < level+1)
        levels.push_back(0);
    levels[level] += root->val;
    dfsadd(root->left, level+1);
    dfsadd(root->right, level+1);
}
```

And get:

```
dfsadd call took: 1252.54 ms
dfs call took: 2.32722 ms
```

Running some profiling, I found out that the TLE is due to the `push_back` operation in C++. We often overlook its cost, but it is actually `O(n)` in the worst case, while we expect it to be `O(logn)` in average.

Initialize a vector in the first place
```diff
+   levels.assign(1e5+1, 0);
```

and delete the `push_back` operation(don't try to save memory in this case) solve the problem. 
```diff
-    if (levels.size() < level+1)
-       levels.push_back(0);
```
Now it runs blazingly fast with only 4ms.

That is why we should absolutely care about the time complexity of each operation in our code. More importantly, we should be aware that some operations that we deem to be `O(logn)` might not be. It varies from each scenario.