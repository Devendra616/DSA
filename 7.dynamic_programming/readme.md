**Dynamic Programming (DP)** is a powerful technique used to solve complex problems in Data Structures and Algorithms (DSA).

1.  **Why is Dynamic Programming?**
    - DP breaks down problems into smaller subproblems and efficiently stores and reuses solutions to those subproblems.
    - It avoids redundant computations by solving each subproblem only once.(store result in table or array or matrix which has fast lookup)
2.  **How Does DP Work?**

    - **Identify Subproblems:**
      - Divide the main problem into smaller, independent subproblems.
    - **Store Solutions:**
      - Solve each subproblem and store the solution in a table or array (this is called memoization).
    - **Build Up Solutions:**
      - Use the stored solutions to build up the solution to the main problem.
    - **Avoid Redundancy:**
      - By storing solutions, DP ensures that each subproblem is solved only once.

3.  **Examples of DP:**

    - **Fibonacci Sequence:**
      - Brute Force Approach: Add the (n-1)th and (n-2)th Fibonacci numbers.
      - DP Approach: Create a table to store values and efficiently calculate the sequence.
    - **Longest Common Subsequence:**
      - Finding the longest subsequence common to two strings.
    - **Shortest Path in a Graph:**
      - Finding the shortest path between two nodes.
    - **Knapsack Problem:**
      - Finding the maximum value of items in a knapsack.

4.  **When to Use DP?**

DP is useful for problems with overlapping subproblems and optimal substructure.

Dynamic Programming is not a silver bullet. It is a powerful technique that can be used to solve a wide range of problems. However, it is important to understand the problem and its constraints before applying DP. It’s not a one-size-fits-all solution.

4.  **Limitations of DP:**

    - **Overhead:** DP can introduce additional memory overhead due to storing solutions in tables or arrays.
    - **Complexity:** Some problems have intricate state transitions, making DP challenging to apply.
    - **Not Always Optimal:** DP doesn’t guarantee the optimal solution for every problem.

5.  **When Not to Use DP:**  
     **Small Inputs:** For small input sizes, simpler approaches (greedy, divide and conquer) may suffice.
    **No Overlapping Subproblems:** If subproblems don’t overlap, DP isn’t beneficial.
    **Greedy Approach Works:** Sometimes a greedy approach provides an optimal solution.

6.  Types of Dynamic Programming Approaches :

    1.  **Top-Down Approach (Memoization)**:

    - Also known as memoization, this approach starts with the original problem and recursively breaks it down into smaller subproblems.
    - It stores the solutions to subproblems in a data structure (usually an array or hash table) to avoid redundant computations. It uses recursive approach.
    - Example: Solving the Fibonacci sequence using memoization.

    2.  **Bottom-Up Approach (Tabulation)**:

    - In this approach, we solve subproblems from the bottom (i.e., smallest subproblems) and build up to the main problem.
    - It uses an iterative process, often involving dynamic programming tables or arrays.
    - Example: Dynamic programming for finding the longest common subsequence.

Both approaches aim to optimize computation time by avoiding repeated calculations. The choice between them depends on the problem and personal preference.

## Problems

1.  [Fib Memoization](./1.dfs.js) : Find depth first search traversal of graph.
2.  [Fib Tabulation](./2.bfs.js) : Find breadth first search traversal of graph.
3.  [Coins Sum](./3.coins_sum_memoization.js) : If it is possible to form a specific amount provided using coins of particular denomination. Coins are unlimited.
4.  [Min and Max Coin Sum](./4.min_max_coin_sum.js) : Find minimum and max no of coins required to reach a specific amount using particular denomination.
5.  [Robot Destination](./5.robot_destn.js) : Find no of possible unique paths that can be used to reach from a point to destination point in a grid provided.
