// https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr
// Given array, find average of all contiguous subarrays of size ‘K’ in it.

function find_averages_of_subarrays(K, arr) {
  const result = []
  let currentSum = 0
  let start = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]
    if (i >= K - 1) {
      result.push(currentSum / K)
      currentSum -= arr[start]
      start++
    }
  }

  return result
}

// 1. define start/end of sliding window
// 2. increase i by 1
// 3. add arr[i] to currentSum
// 4. if i >= K-1, currentSum -= arr[start], then start++

describe("Find the average of all contiguous subarrays of size K", () => {
  it("K = 5 and array = [1, 3, 2, 6, -1, 4, 1, 8, 2]", () => {
    expect(
      find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
    ).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
  })

  it("K = 4 and array = [3, 1, -2, 8, 9, -10, -3, 8, 9]", () => {
    expect(
      find_averages_of_subarrays(4, [3, 1, -2, 8, 9, -10, -3, 8, 9])
    ).toEqual([2.5, 4, 1.25, 1, 1, 1])
  })
})
// ______________
// OUTPUT:
// i: 0, currentSum: 1
// i: 1, currentSum: 4
// i: 2, currentSum: 6
// i: 3, currentSum: 12
// i: 4, currentSum: 11
// i: 4, arr[i]: -1, arr[start]: 3
// new currentSum: 10
// result: 2.2
// i: 5, currentSum: 14
// i: 5, arr[i]: 4, arr[start]: 2
// new currentSum: 11
// result: 2.2,2.8
// i: 6, currentSum: 12
// i: 6, arr[i]: 1, arr[start]: 6
// new currentSum: 10
// result: 2.2,2.8,2.4
// i: 7, currentSum: 18
// i: 7, arr[i]: 8, arr[start]: -1
// new currentSum: 12
// result: 2.2,2.8,2.4,3.6
// i: 8, currentSum: 14
// i: 8, arr[i]: 2, arr[start]: 4
// new currentSum: 15
// result: 2.2,2.8,2.4,3.6,2.8
// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8
