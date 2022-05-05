let scene;
let a = 0;
window.onload = function(){ // when page load up 
    scene = document.querySelector('a-scene')
    for(let i = -9; i <= 9; i += 3){
    let box = document.createElement('a-box')
    box.setAttribute("position",{x:i,y:0,z:4})
    box.setAttribute("rotation",{x:0,y:45,z:0})
    box.setAttribute("color","pink")
    box.setAttribute("height",3)
    scene.append(box);
    }
    
    function loop(){
        a +=3
    }
    
    
    let dode = document.createElement("a-dodecahedron")
    dode.setAttribute("position",{x:0,y:6,z:-4})
    dode.setAttribute("color","#FF926B")
    dode.setAttribute("radius",1)
    dode.setAttribute("rotation",{x:0,y:a,z:0})
    scene.append(dode)
    
    
}



