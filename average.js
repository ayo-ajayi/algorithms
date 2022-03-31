

var centered_average = function(arr){
  var sum = 0, max = 0, min = 0;
  for(let i = 0;i < arr.length; i++){
    if (arr[i]> max) max = arr[i];
    if(arr[i]<min)min = arr[i];
  }
  for(let i = 0; i < 1; i++){
    const index = arr.indexOf(max);
    if (index > -1) arr.splice(index, 1);
     const index_ = arr.indexOf(min);
    if (index_ > -1) arr.splice(index_, 1); 
  }
  for(let a of arr) sum +=a  
  if(sum < 0) return Math.ceil(sum/(arr.length));
  return Math.floor(sum/(arr.length));
}

console.log(centered_average ([-10, -4, -2, -4, -2, 0]))


/*
Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.


centered_average([1, 2, 3, 4, 100]) → 3
centered_average([1, 1, 5, 5, 10, 8, 7]) → 5
centered_average([-10, -4, -2, -4, -2, 0]) → -3

*/
  
