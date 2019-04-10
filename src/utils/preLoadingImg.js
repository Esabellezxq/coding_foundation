function preLoadingImg(url){
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        //缓存
        if(img.complete){
            resolve(img);
        }
        else{
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                reject()
            }
        }
    })
}

var __id = 0;
function getId(){
    return ++__id;
}

const LOADING = 0;
const LOADED = 1;
const FAILED = 2;
//多图预加载
function preLoadingImgs(images){
    if(!images.length){
        return images;
    }

    let count = 0;
    let success = true;
    let failList = [];

    function doLoad(item){
        //定义回调
        //每张照片的状态
        //是否全部加载成功

        item.status = LOADING;

        let node = item.imgNode
        

        if(node.complete){
            item.status = LOADED;
            count--;
        }else{
            node.onload = () => {
                item.status = LOADED;
                count--;
                success = success & true;
                done();
            }
            node.onerror = () => {
                item.status = FAILED;
                failList.push(item);
                success = false;
                done();
            }
        }

        //http请求
        node.src = item.src;

        function done(){
            node.onload = node.onerror = null;
            try{
                delete window[item.id];
            }catch(e){

            }
        }

    }


    //遍历构造传入的图片地址
    for(let key in images){
        //构造为{id: xxx, src: xxx: imgNode: xxx, status: xxx}
        if(!images.hasOwnProperty(key))
            continue;

        let item = images[key];
        if(typeof item === 'string'){
            item = images[key] = { src: images[key] };  
            item.id = '_img_' +  getId();
            item.imgNode = window[item.id] = new Image();
            count++;

            doLoad(item);
            // console.log(item,count);
        }
        
    }

    if(success){
        return images;
    }else{
        failList.forEach(element => {
            // doLoad(element);
        });
    }
}
export {preLoadingImg, preLoadingImgs};