# [733. Flood Fill](https://leetcode.com/problems/flood-fill/description/)

You are given an image represented by an <code>m x n</code> grid of integers <code>image</code>, where <code>image[i][j]</code> represents the pixel value of the image. You are also given three integers <code>sr</code>, <code>sc</code>, and <code>color</code>. Your task is to perform a **flood fill**  on the image starting from the pixel <code>image[sr][sc]</code>.

To perform a **flood fill** :

- Begin with the starting pixel and change its color to <code>color</code>.
- Perform the same process for each pixel that is **directly adjacent**  (pixels that share a side with the original pixel, either horizontally or vertically) and shares the **same color**  as the starting pixel.
- Keep **repeating**  this process by checking neighboring pixels of the updated pixelsand modifying their color if it matches the original color of the starting pixel.
- The process **stops**  when there are **no more**  adjacent pixels of the original color to update.

Return the **modified**  image after performing the flood fill.

**Example 1:** 

<div class="example-block">
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation:

<img alt="" src="https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg" style="width: 613px; height: 253px;">

From the center of the image with position <code>(sr, sc) = (1, 1)</code> (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

Note the bottom corner is **not**  colored 2, because it is not horizontally or vertically connected to the starting pixel.

**Example 2:** 

<div class="example-block">
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

Output: [[0,0,0],[0,0,0]]

Explanation:

The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

**Constraints:** 

- <code>m == image.length</code>
- <code>n == image[i].length</code>
- <code>1 <= m, n <= 50</code>
- <code>0 <= image[i][j], color < 2^16</code>
- <code>0 <= sr < m</code>
- <code>0 <= sc < n</code>