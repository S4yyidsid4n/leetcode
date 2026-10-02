
var convertTemperature = function(celsius) {
    ans=[];
    let fahrenheit=celsius*1.80+32.00;
    ans.push(fahrenheit);
    let kelvin=celsius+273.15;
    ans.unshift(kelvin);
    return ans;
};

























