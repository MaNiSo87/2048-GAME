let score = 0;
arr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
board=[
    [1,0,0],
    [2,0,1],
    [3,0,2],
    [4,0,3],
    [5,1,0],
    [6,1,1],
    [7,1,2],
    [8,1,3],
    [9,2,0],
    [10,2,1],
    [11,2,2],
    [12,2,3],
    [13,3,0],
    [14,3,1],
    [15,3,2],
    [16,3,3]
]
let r1 = Math.floor(Math.random()*4);
let r2 = Math.floor(Math.random()*4);
let r3 = Math.floor(Math.random()*4);
let r4 = Math.floor(Math.random()*4);

arr[r1][r2] = 2;
arr[r3][r4] = 2;

render_numbers();

function update_score(){
    document.getElementById(17).innerHTML = "SCORE: ";
    document.getElementById(17).innerHTML += score;
}
function render_numbers(){
    for(let i=0;i<17;i++){
        if(arr[board[i][1]][board[i][2]] != 0){
            document.getElementById(board[i][0]).innerHTML = String(arr[board[i][1]][board[i][2]])
            if(document.getElementById(board[i][0]).innerHTML == "2")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(57, 42, 26)";

                if(document.getElementById(board[i][0]).innerHTML == "4")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(71, 54, 22)";
                if(document.getElementById(board[i][0]).innerHTML == "8")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(127, 65, 11)";
                if(document.getElementById(board[i][0]).innerHTML == "16")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(141, 54, 8)";
                if(document.getElementById(board[i][0]).innerHTML == "32")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(145, 33, 7)";
                if(document.getElementById(board[i][0]).innerHTML == "64")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(167, 37, 7)";
                if(document.getElementById(board[i][0]).innerHTML == "128")
                document.getElementById(board[i][0]).style.backgroundColor = "rgb(97, 77, 12)";
        }
        else{
            document.getElementById(board[i][0]).innerHTML = "";
            document.getElementById(board[i][0]).style.backgroundColor = "rgb(77, 63, 49)";
        }
    }
}
function au(){
    for(let c=1;c<=4;c++){
        for(let j=0;j<4;j++){
            for(let i=1;i<4;i++){
                if(arr[i-1][j] == 0){
                    arr[i-1][j] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    for(let j=0;j<4;j++){
        for(let i=1;i<4;i++){
            if(arr[i-1][j] == arr[i][j]){
                arr[i-1][j] += arr[i][j];
                score +=arr[i][j]*2;
                update_score();
                arr[i][j] = 0;
                break;
            }
        }
    }
    for(let c=1;c<=4;c++){
        for(let j=0;j<4;j++){
            for(let i=1;i<4;i++){
                if(arr[i-1][j] == 0){
                    arr[i-1][j] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    make_rnumber();
    render_numbers();
}
function ad(){
    for(let c=1;c<=4;c++){
        for(let j=0;j<4;j++){
            for(let i=2;i>=0;i--){
                if(arr[i+1][j] == 0){
                    arr[i+1][j] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    for(let j=0;j<4;j++){
        for(let i=2;i>=0;i--){
            if(arr[i+1][j] == arr[i][j]){
                arr[i+1][j] += arr[i][j];
                score +=arr[i][j]*2;
                update_score();
                arr[i][j] = 0;
                break;
            }
        }
    }
    for(let c=1;c<=4;c++){
        for(let j=0;j<4;j++){
            for(let i=2;i>=0;i--){
                if(arr[i+1][j] == 0){
                    arr[i+1][j] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    make_rnumber();
    render_numbers();
}
function ar(){
    for(let c=1;c<=4;c++){
        for(let i=0;i<4;i++){
            for(let j=1;j<4;j++){
                if(arr[i][j-1] == 0){
                    arr[i][j-1] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    for(let i=0;i<4;i++){
        for(let j=1;j<4;j++){
            if(arr[i][j-1] == arr[i][j]){
                arr[i][j-1] += arr[i][j];
                score +=arr[i][j]*2;
                update_score();
                arr[i][j] = 0;
                break;
            }
        }
    }
    for(let c=1;c<=4;c++){
        for(let i=0;i<4;i++){
            for(let j=1;j<4;j++){
                if(arr[i][j-1] == 0){
                    arr[i][j-1] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    make_rnumber();
    render_numbers();
}
function al(){
    for(let c=1;c<=4;c++){
        for(let i=0;i<4;i++){
            for(let j=2;j>=0;j--){
                if(arr[i][j+1] == 0){
                    arr[i][j+1] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    for(let i=0;i<4;i++){
        for(let j=2;j>=0;j--){
            if(arr[i][j+1] == arr[i][j]){
                arr[i][j+1] += arr[i][j];
                score +=arr[i][j]*2;
                update_score();
                arr[i][j] = 0;
                break;
            }
        }
    }
    for(let c=1;c<=4;c++){
        for(let i=0;i<4;i++){
            for(let j=2;j>=0;j--){
                if(arr[i][j+1] == 0){
                    arr[i][j+1] = arr[i][j];
                    arr[i][j] = 0;
                }
            }
        }
    }
    make_rnumber();
    render_numbers();
}
function make_rnumber(){
    let a=-1;
    let b=-1;
    for(;;){
        let r5 = Math.floor(Math.random()*4);
        let r6 = Math.floor(Math.random()*4);
        if(arr[r5][r6] == 0 && a !=r5 && b !=r6){
            let r7 = Math.random();
            if(r7<0.63)
                arr[r5][r6] = 2;
            else
                arr[r5][r6] = 4;

            a=r5;
            b=r6;
            break;
        }
    }
}
function keyboard_event(e){
    if(e.code == "KeyW"){
        au();
    }
    else  if(e.code == "KeyD"){
        al();
    }
    else  if(e.code == "KeyA"){
        ar();
    }
    else  if(e.code == "KeyS"){
        ad();
    }
}
