
var defangIPaddr = function(address) {
    
    let data=address.replaceAll(".","[.]")
    let answer=String(data)
    return answer

};