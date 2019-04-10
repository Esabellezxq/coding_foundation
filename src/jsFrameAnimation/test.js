//图片预加载实现
import { preLoadingImg, preLoadingImgs } from '../utils/preLoadingImg';
import continuous from './img/continuous.jpg';
async function test(){
    let node = await preLoadingImg(continuous);
    console.log(node)
    if(node){
        document.body.appendChild(node);
    }
}
// test();
console.log(preLoadingImgs([continuous,continuous,continuous,continuous,continuous,'hhh']));
//链式调用实现
