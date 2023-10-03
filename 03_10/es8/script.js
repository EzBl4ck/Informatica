const image = document.querySelector('#img');
let imgCounter = 0;
const imgList = [ 'landscape.jpg', 'megatron.jpg', 'hole.jpg' ];

function change() { 
    image.src = imgList[imgCounter];
    imgCounter = (imgCounter + 1) % 3;
}
