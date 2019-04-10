'use strict'
class Animation{
    constructor(context, altas, positionList, size){
        this.context = context;
        this.altas = altas;
        this.positionList = positionList;
        this.size = size;
    }
    
    /**预加载图片
     * 
     */
    async preLoadingImage(){

    }

    async loadingImage(){

    }
    //播放图集
    async changePosition(){

    }

    //改变图片地址
    async changeImage(){

    }

    /**
     * 每一帧动画结束后执行的回调
     * @param {*} callback 
     */
    async enterFrame(callback){

    }

    /**
     * 动画循环的次数
     * @param {*} isForever 
     * @param {*} times 
     */
    async repeat(isForever, times){
        
    }

    /**
     * 每个动画执行后等待的时间
     * @param {*} time 
     */
    async wait(time){

    }

    /**
     * 
     * @param {*} callback 
     */
    async then(callback){

    }

    /**
     * 开始
     * @param {*} interval 
     */
    async start(interval){

    }

    
    async pause(){

    }

    async restart(){

    }

    async dispose(){

    }

    
    repeatForever(){

    }

}