package main
import "fmt"

func main() {
tt := []int{1, 2, 13, 2, 1, 13, 4}
  fmt.Printf("The sum of elements in the array is: %v\n", sum13(tt))
}

func sum13 (arr []int)int {
  sum := 0;
  for a := 0; a < len(arr); a++ {
    if arr[a] == 13{
      return sum
    }
    sum += arr[a]
  }
  return sum
}

/*
Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.


sum13([1, 2, 2, 1]) → 6
sum13([1, 1]) → 2
sum13([1, 2, 2, 1, 13]) → 6

*/
