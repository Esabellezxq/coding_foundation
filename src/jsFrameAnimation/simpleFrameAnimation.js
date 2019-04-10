function move(ele,imgUrl,pos,size){
    pos = pos || [];
    if(ele){
        ele.style.backgroundImage = `url(${imgUrl})`;
        ele.style.backgroundSize = size;
        let j = 0;
        function walk(){
            ele.style.backgroundPosition = `${pos[j].split(' ')[0]}px ${pos[j].split(' ')[1]}px`
            // ele.style.left = j * 20 + 'px';
            j++;
            if(j>=pos.length){
                j=0;
            }
            //每80m切换一个动作(图)
            setTimeout(walk,80);
        }

    }
    walk();
}
    
    

window.onload = function(){
    let animationNode = document.getElementById('ani');
    let img = 'img/continuous.jpg';
    let size = '800px 150px';
    let pos = [];
    let i = 0;
    while(i < 8){
        pos.push(`-${i*100} 0`);
        i++;
    }
    move(animationNode,img,pos,size);
}
