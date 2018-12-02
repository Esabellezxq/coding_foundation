function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function partition(arr,left,right,pivotIndex){

    //保存基准
    let pivot = arr[pivotIndex];
    
    //游标
    let storeIndex = left;

    //把基准与最后的元素交换
    // swap(arr, pivotIndex, right);
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    //比较元素，把比基准小的放在第一位，游标右移
    for(let i = left; i < right; i++){
        if(arr[i] <= pivot){
            [arr[i],arr[storeIndex]] = [arr[storeIndex], arr[i]];
            storeIndex++;
        }
    }

    //把基准放在与比它大的第一个值交换
    [arr[right],arr[storeIndex]] = [arr[storeIndex],arr[right]];

    return storeIndex;
}
function inPlaceQuickSort(arr, left, right){
    if(right > left){
        //！！易错
        //选择基准 right和left中间
        let pivotIndex = left + Math.floor((right - left)/2);
        //一次基准排序
        let newIndex = partition(arr,left,right,pivotIndex);

        //以原基准的左右为基准
        inPlaceQuickSort(arr,left,newIndex - 1);
        inPlaceQuickSort(arr,newIndex + 1,right);
    }
}

export default inPlaceQuickSort;
