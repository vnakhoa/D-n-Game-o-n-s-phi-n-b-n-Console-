import {question} from "readline-sync";

console.log('Toi dang giu mot con so bi mat(2 chu so). Bạn hay doan thu xem (chi doan duoc 3 lan thoi nhe!)');
let secret: number; 
secret = Math.floor(Math.random() * 101 );

console.log(secret);  ////////////// Số random

let luotChoi: number;
luotChoi = 1;

let score: number;
let guess: number = Number(question('Moi ban doan so: '));

if(guess == secret) {
    score = 100;
    console.log('You Win!', score, 'diem');
}
else {
    // guest > secret
    if(guess > secret) {
        console.log('So lon qua!');
        luotChoi++;
        if(luotChoi >3) {
            console.log('Game over');
        }
        else {
            guess = Number(question('Ban thu doan lai xem: '));
            if(guess == secret) {
                score = 50;
                console.log('You Win', score, 'diem');
            }
            else {
                if(guess > secret) {
                    console.log('So lon qua!');
                    luotChoi++;
                    if(luotChoi >3) {
                        console.log('Game over');
                    }
                    else {
                        guess = Number(question('Ban thu doan lai lan nua nha: ')); 
                        if(guess == secret) {
                            score = 30;
                            console.log('You Win', score, 'diem');
                        }
                        else {
                            console.log('Game over')                   
                        }        
                    }
                }
                else {
                    console.log('So nho qua!');
                    luotChoi++;
                    if(luotChoi >3) {
                        console.log('Game over');
                    }
                    else {
                        guess = Number(question('Ban thu doan lai lan nua nha: ')); 
                        if(guess == secret) {
                            score = 30;
                            console.log('You Win', score, 'diem');
                        }
                        else {
                            console.log('Game over');                   
                        }        
                    }
                }
            }
        }
        /////////////////////
    }
    else {
        //guesst < secret
        console.log('So nho qua!');
        luotChoi++;
        if(luotChoi >3) {
            console.log('Game over');
        }
        else {
            guess = Number(question('Ban thu doan lai xem: '));
            if(guess == secret) {
                score = 50;
                console.log('You Win', score, 'diem');
            }
            else {
                if(guess > secret) {
                    console.log('So lon qua!');
                    luotChoi++;
                    if(luotChoi >3) {
                        console.log('Game over');
                    }
                    else {
                        guess = Number(question('Ban thu doan lai lan nua nha: ')); 
                        if(guess == secret) {
                            score = 30;
                            console.log('You Win', score, 'diem');
                        }
                        else {
                            console.log('Game over');                   
                        }        
                    }
                }
                else {
                    console.log('So nho qua!');
                    luotChoi++;
                    if(luotChoi >3) {
                        console.log('Game over');
                    }
                    else {
                        guess = Number(question('Ban thu doan lai lan nua nha: ')); 
                        if(guess == secret) {
                            score = 30;
                            console.log('You Win', score, 'diem');
                        }
                        else {
                            console.log('Game over');                   
                        }        
                    }
                }
            }
        }
        //////////////
    }
}
