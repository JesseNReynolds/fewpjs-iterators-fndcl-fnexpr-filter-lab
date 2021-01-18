// Code your solution here
function findMatching(arr, string){
    return arr.filter(function(driver){
        return driver.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(arr, string){
    return arr.filter(function(driver){
        return driver[0].toUpperCase() === string[0].toUpperCase();
    })
}

function matchName(arr, string){
    return arr.filter(function(driver){
        return driver.name.toUpperCase() === string.toUpperCase();
    })
}