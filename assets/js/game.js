// user input robots name
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight()

// for loop to show index

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

console.log(enemyNames.length);

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks skip, confirm then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }  
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
  
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }
  
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
  
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};

for(var i = 0; i < enemyNames.length; i++) {
    // check robots health
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // picked new enemy to fight based enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemy health before new fight
        enemyHealth = 50;

        // use debugger to pause script 
         debugger;

        // call fight function with enemies using pickedEnemyName variable 
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}