let scene;

window.onload = function(){ // when page load up 
    scene = document.querySelector('a-scene')
    for(let i = -18; i <= 18; i += 3){
    let box = document.createElement('a-box')
    box.setAttribute("position",{x:i,y:0,z:-16})
    box.setAttribute("rotation",{x:0,y:45,z:0})
    box.setAttribute("color","pink")
    box.setAttribute("height",3)
    scene.append(box);
    }
    
    
    let dode = document.createElement("a-dodecahedron")
    dode.setAttribute("position",{x:0,y:6,z:-4})
    dode.setAttribute("color","#FF926B")
    dode.setAttribute("radius",1)
    scene.append(dode)
    

    for(let i = -12; i <= -7; i += 5 ){
    let cyl = document.createElement("a-cylinder")
    cyl.setAttribute("position",{x:i,y:0,z:-10})
    cyl.setAttribute("height",7)
    cyl.setAttribute("radius",0.2)
    scene.append(cyl);
    }
    
    let boxe = document.createElement("a-box")
    boxe.setAttribute("position",{x:-9.5,y:2,z:-10})
    boxe.setAttribute("depth",0.5)
    boxe.setAttribute("height",3)
    boxe.setAttribute("width",6)
    scene.append(boxe)
    
    let text = document.createElement("a-text")
    text.setAttribute('value',"M A P")
    text.setAttribute('position',{x:-9.9,y:3.5,z:-9})
    text.setAttribute('color',"black")
    scene.append(text)
    
    let house = document.createElement('a-circle')
    house.setAttribute("position",{x:-7.2,y:2.5,z:-9.6})
    house.setAttribute('color',"pink")
    house.setAttribute('radius',0.7)
    scene.append(house)
    
    let you = document.createElement('a-triangle')
    you.setAttribute("position",{x:-9.2,y:2,z:-9.6})
    you.setAttribute('color','orange')
    scene.append(you)
    
    let text1 = document.createElement("a-text")
    text1.setAttribute('value',"You")
    text1.setAttribute('position',{x:-9.4,y:2,z:-9.4})
    text1.setAttribute('color',"black")
    scene.append(text1)
    
    let text2 = document.createElement("a-text")
    text2.setAttribute('value',"House")
    text2.setAttribute('position',{x:-7.6,y:2.5,z:-9.4})
    text2.setAttribute('color',"black")
    scene.append(text2)
    
    for(var i = 3; i <= 9; i++){
        let coneTree = document.createElement("a-cone")
        coneTree.setAttribute("position",{x:i,y:,z:})
    }
}



