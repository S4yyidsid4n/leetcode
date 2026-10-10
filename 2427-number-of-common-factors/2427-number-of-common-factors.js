var commonFactors = function(a, b) {
    let factors=[];
    let small=Math.min(a,b)
    for(let i=1;i<=small;i++){
          if(a%i===0&&b%i===0){
            factors.push(i)
        }
    }

return factors.length
};