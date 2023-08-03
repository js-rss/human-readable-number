module.exports = function toReadable (number) {
   const lowNums = ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine',' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen',' seventeen', ' eighteen', ' nineteen'];
    const hightNums = ['','',' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty',' ninety']; 
    const hundred = ' hundred';

     if(number === 0){
        return 'zero'
    } else if ( number < 20 ){
        return lowNums[number].substring(1) 
    } else if ( number < 100) {
        return hightNums[parseInt(number.toString()[0])].substring(1)  + lowNums[parseInt(number.toString()[1])]
    } else if(number > 100 && parseInt(number.toString().substring(1)) < 20) {
        return  lowNums[parseInt(number.toString()[0])].substring(1) + hundred+ lowNums[parseInt(number.toString().substring(1))]
    } else {
        return  lowNums[parseInt(number.toString()[0])].substring(1) + hundred + hightNums[parseInt(number.toString()[1])] + lowNums[parseInt(number.toString()[2])]
    }
}
