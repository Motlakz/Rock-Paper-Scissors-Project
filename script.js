function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);

    if(randomNumber === 0){
        console.log('Rock');
    }else if(randomNumber === 1){
        console.log('Paper');
    }else if(randomNumber === 2){
        console.log('Scissors');
    }else{
        console.log('Oops, choose again!');
    }
}
getComputerChoice();