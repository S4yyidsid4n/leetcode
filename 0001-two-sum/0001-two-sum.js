var twoSum = function(nums, target) {
 let  diary=new Map();

 for(let i=0;i<nums.length;i++){
    const partner=target-nums[i];

    if(diary.has(partner)){
        return [diary.get(partner),i]
    }
    diary.set(nums[i],i)
 }
};