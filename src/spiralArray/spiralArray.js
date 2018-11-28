function coordinate(n, superArr){
    let x = 0, y = 0 , value = 1;

    //第一行
    while(x < n){

    }
    while(y < n){
        superArr[x][y] = value;
        y++;
    }
}

let state = 1,x = 0,y = 0,value = 1;
function straight(){
    switch(state){
        case 1: y++;
        case 2: x++;
        case 3: y--;
        case 4: x--;
    } 
}

function turnRight(n){
    if(state < n){
        state ++;
    }else{
        state = 1;
    }
}

function walk(n, superArr){

    while(x < n &&  y < n){
        while(!superArr[x][y]){
            straight(superArr);
            superArr[x][y] = value;
            value++;
        }
        turnRight();
    }

}

//单数：里面1个 n-1/2圈 
//双数：里面4个 n / 2圈
//x:y轴 y:x轴 value:坐标上的值 round:圈数 i:第i圈 n-1:每个方向赋少一个值
/**
 * 
 * @param {*} n 
 * @param {*} superArr 
 */
function recursion(n, superArr){
    
    let x = 0, y= 0, value = 1, round = n / 2, i = 0 ,last = n % 2;
        //第一圈n-1
    while(i<round){
        for(; y < n - 1; y++){
            superArr[x][y] = value;
            value++;
        }
        for(; x < n - 1; x++){
            superArr[x][y] = value;
            value++;
        }
        for(; y > i; y--){
            superArr[x][y] = value;
            value++;
        }
        for(; x > i; x--){
            superArr[x][y] = value;
            value++;
        }
        
        n=n-1;
        x++;
        y++;
        i++;
    }     
    if(last !== 0){
        superArr[--x][--y] = value;
    }    
    return superArr;
}
/**
 * 
 * @param {*} n 
 * return [
 * [1, 2, 3, 4],
 * [12,13,14,5]
 * [11,16,15,6]
 * [10, 9, 8, 7]
 * ]
 */
function spiralArray(n){
    let superArr = [];
    for(let i = 0; i < n; i++){
        superArr.push(new Array(n));
    }
    return recursion(n, superArr);
}

export default spiralArray;