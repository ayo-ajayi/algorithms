

#include <stdio.h>

char* has22(int *arr);

int main() {
  int a[] = {1,4,3,2,2};
  printf("Hello, world!, %s", has22(a));
  return 0;
}
char* has22(int *arr){
  int count = 0;
  int i =0;
  while(arr[i-1]!=2 && arr[i-2]!=2){
    if(arr[i]==2 && arr[i+1]==2) count++;
    i++;
  }
   if(count > 0)
     return "true";
   return "false";
 }

/*
Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.


has22([1, 2, 2]) → True
has22([1, 2, 1, 2]) → False
has22([2, 1, 2]) → False

*/

