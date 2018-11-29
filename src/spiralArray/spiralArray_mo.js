/**
 * Sn = 4k(n+k)
 * @param {{x: number, y: number}} vec2 数组的二维坐标
 * @param {number} n 数组的维度
 */
function sumPerTurn(n) {
    //判断是否为单数。单数需要特殊处理
    let singular = false
    if(n % 2 != 0) {
        singular = true
    }
    let res = []
    
    let cyliderNum = n / 2
    if(singular) {
        cyliderNum - 1
    }
    let index = 1
    while (index <= cyliderNum) {
        let sn = 4 * index * (n - index)
        res.push(sn)
        index++
    }
    if (singular) {
        res.push(res[res.length - 1] + 1)
    }
    console.log(res)
}

function array2spiral(vec2, n) {
    // 安全检查
    if(!vec2 || vec2.x == undefined || vec2.y == undefined) {
        return null
        
    }

    let cylinderNumY = vec2.y
    let cylinderNumX = vec2.x
    // 判断当前坐标在第几圈
    if(vec2.y >= n / 2) {
        cylinderNumY = n - vec2.y
    }
    if(vec2.x >= n / 2) {
        cylinderNumX = n - vec2.x
    }

    let cylinderNum = min(cylinderNumX, cylinderNumY)

    let count = (n - 2 * cylinderNum - 1) * 4

    let paramK = (n / 2 - vec2.y) / (n / 2 - vec2.x)
    
}

function min(...numArray) {
    let mm = numArray[0]
    for(let i = 1, j = numArray.length; i < j; i++) {
        if(mm > numArray[i]) {
            mm = numArray[i]
        }
    }
    return mm
}

module.exports = {
    sumPerTurn, array2spiral
}