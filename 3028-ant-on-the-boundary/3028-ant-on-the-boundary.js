var returnToBoundaryCount = function(nums){
    let position=0;
    let count=0;
    for(let i in nums){
        position+=nums[i];
        if(position===0){
            count++;
        }
    }
    let result=count;
    return count;
};