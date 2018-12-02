/**
 * 简单的快速排序法，需要占用额外的空间
 * @param {*} arr
 * return sorted array 
 */
function simpleQuickSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let leftList = [], rightList = [];
    let pivotIndex = Math.floor(arr.length/2);
    //去掉自己
    let pivot = arr.splice(pivotIndex,1)[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            leftList.push(arr[i]);
        }else{
            rightList.push(arr[i]);
        }
    }

    return simpleQuickSort(leftList).concat([pivot], simpleQuickSort(rightList));
}

export default simpleQuickSort;