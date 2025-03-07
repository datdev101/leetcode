// algorithm Sieve of Eratosthenes is
//     input: an integer n > 1.
//     output: all prime numbers from 2 through n.

//     let A be an array of Boolean values, indexed by integers 2 to n,
//     initially all set to true.
    
//     for i = 2, 3, 4, ..., not exceeding √n do
//         if A[i] is true
//             for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
//                 set A[j] := false

//     return all i such that A[i] is true.

function closestPrimes(left: number, right: number): number[] {
  const primes = Array(right + 1).fill(true);
  primes[1] = false;

  for (let i = 2; i <= right; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= right; j += i) {
        primes[j] = false;
      }
    }
  }

  const nums: number[] = [];
  const result = [-1, -1];

  for (let i = left; i <= right; i++) {
    if (primes[i]) nums.push(i);
  }

  if (nums.length < 2) return result;

  for (let i = 1, min = Number.MAX_SAFE_INTEGER; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < min) {
      result[0] = nums[i - 1];
      result[1] = nums[i];
      min = nums[i] - nums[i - 1];
    }
  }

  return result;
}

console.log(closestPrimes(10, 19));
