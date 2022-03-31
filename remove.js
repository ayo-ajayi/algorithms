/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var res = 0;
    var i = 0;
    var j = 0;

    var k = 0;
  
    for(i = 0; i < nums.length; i++){
      for(j = 0; j < nums.length; j++){
        if (val === nums[j] )res++; 
      }
        for( k = 0; k < res; k+=1){
          const index = nums.indexOf(val);
          if (index > -1)nums.splice(index, 1); 
    }
      res = 0;
    }
};

removeElement([3,543,6,5,7,7], 7);
//remove element
