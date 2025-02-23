# LeetCode Daily Solver

This repository provides a simple setup for my solving daily LeetCode problems using TypeScript. It includes scripts to locate the solution directory based on a problem ID and execute the solution script.

## Setup

Ensure you have Node.js installed, then install dependencies:

```sh
npm install
```

## Folder Structure

Your solutions should be placed inside the `src` directory, with each problem having its own folder named with the problem ID.

Example:

```
.
├── src/
│   ├── 2698. Find the Punishment Number of an Integer/
│   │   ├── solve.ts  # Your solution file
│   │   ├── description.md  # Optional explanation
│   ├── 1234. Example Problem/
│   │   ├── solve.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

### Running a Solution

To run a solution for a specific problem, use:

```sh
ID=1234 npm start
```

This will:

- Locate the folder in `src` that contains the problem ID (`1234` in this case)
- Run the `solve.ts` script inside that folder using `ts-node`

## Scripts

- `npm run solution:path` - Finds the path of the solution directory matching the problem ID.
- `npm start` - Runs the solution script for the given problem ID.

## Requirements

- Node.js
- TypeScript
- `ts-node`

## Notes

- Ensure that each problem's folder contains a `solve.ts` file.
- The problem ID should be part of the folder name to enable correct detection.
- The `ID` environment variable must be set before running `npm start`.

## Tips

- You can use this extension to get the markdown of the problem: [Clip LeetCode](https://chromewebstore.google.com/detail/clip-leetcode/cnghimckckgcmhbdokjielmhkmnagdcp?hl=en).

Happy coding!
