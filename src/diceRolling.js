

/**
 * Generate a random number between 1 and a given size. 
 * @date 26/06/24 - 11:42:29 AM
 * @author ReeceDoyle
 * 
 * @param [diceSize=6] - Number representing the size of the dice you want roll.
 * @returns A random number between 1 and a given size
 */
function rollDice(diceSize = 6){
    let rollResult= Math.floor(Math.random() * diceSize) + 1;

    return rollResult;
}


/**
 * Generate a random number between 1 and a given size twice, and identfifying the highest number.
 * @date 26/06/24 - 11:42:29 AM
 * @author ReeceDoyle
 * 
 * @param [diceSize=6] - Number representing the size of the dice you want roll.
 * @returns A random number between 1 and a given size twice, and indentifying the highest numnber.
 */
function rollDiceWithAdvantage(diceSize =6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];


    result.finalResult = Math.max(...result.rolls);


    return result;
}


/**
 * Generate a random number between 1 and a given size twice, and identfifying the lowest number.
 * @date 26/06/24 - 11:42:29 AM
 * @author ReeceDoyle
 * 
 * @param [diceSize=6] - Number representing the size of the dice you want roll.
 * @returns A random number between 1 and a given size twice, and indentifying the lowest numnber.
 */
function rollDiceWithDisadvantage(diceSize =6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];


    result.finalResult = Math.min(...result.rolls);


    return result;
}


module.exports = {
    rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
}

