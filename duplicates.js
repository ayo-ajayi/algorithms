/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var res = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    nums.sort(
        function(a, b){
        return a - b;
        });
  console.log(nums)

   for(i = 0; i < nums.length; i++){
      for(j = 0; j < nums.length; j++){
        if (nums[i] === nums[j] && i != j )res++; 
      }
      if(res>=1){
        for( k = 0; k < res; k+=1){
          const index = nums.indexOf(nums[i]);
          if (index > -1)nums.splice(index, 1); 
      }
    }
      res = 0;
    }
};
removeDuplicates([3,543,6,5,7,7])


//Remove Duplicates from Sorted Array
