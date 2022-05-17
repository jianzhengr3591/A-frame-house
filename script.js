let scene;

window.onload = function(){ // when page load up 
    scene = document.querySelector('a-scene')
    for(let i = -18; i <= 18; i += 3){
    let boxf = document.createElement('a-box')
    boxf.setAttribute("position",{x:i,y:0,z:19})
    boxf.setAttribute("rotation",{x:0,y:45,z:0})
    boxf.setAttribute("color","pink")
    boxf.setAttribute("height",3)
    scene.append(boxf);
    }
    
    for(let i = -18; i <= 18; i += 3){
    let boxb = document.createElement('a-box')
    boxb.setAttribute("position",{x:i,y:0,z:-19})
    boxb.setAttribute("rotation",{x:0,y:45,z:0})
    boxb.setAttribute("color","pink")
    boxb.setAttribute("height",3)
    scene.append(boxb);
    }
    
    for(let i = -18; i <= 18; i += 3){
    let boxr = document.createElement('a-box')
    boxr.setAttribute("position",{x:-18,y:0,z:i})
    boxr.setAttribute("rotation",{x:0,y:45,z:0})
    boxr.setAttribute("color","pink")
    boxr.setAttribute("height",3)
    scene.append(boxr);
    }

    for(let i = -18; i <= 18; i += 3){
    let boxr = document.createElement('a-box')
    boxr.setAttribute("position",{x:18,y:0,z:i})
    boxr.setAttribute("rotation",{x:0,y:45,z:0})
    boxr.setAttribute("color","pink")
    boxr.setAttribute("height",3)
    scene.append(boxr);
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
    house.setAttribute("position",{x:-8.8,y:2.5,z:-9.6})
    house.setAttribute('color',"pink")
    house.setAttribute('radius',0.7)
    scene.append(house)
    
    let you = document.createElement('a-triangle')
    you.setAttribute("position",{x:-9.7,y:2,z:-9.6})
    you.setAttribute('color','orange')
    scene.append(you)
    
    let text1 = document.createElement("a-text")
    text1.setAttribute('value',"You")
    text1.setAttribute('position',{x:-9.9,y:2,z:-9.4})
    text1.setAttribute('color',"black")
    scene.append(text1)
    
    let text2 = document.createElement("a-text")
    text2.setAttribute('value',"House")
    text2.setAttribute('position',{x:-9.2,y:2.5,z:-9.4})
    text2.setAttribute('color',"black")
    scene.append(text2)
    
    let house1 = document.createElement('a-circle')
    house1.setAttribute("position",{x:-11.2,y:1.5,z:-9.6})
    house1.setAttribute('color',"pink")
    house1.setAttribute('radius',1)
    scene.append(house1)
    
    let text3 = document.createElement("a-text")
    text3.setAttribute('value',"For sale property")
    text3.setAttribute('position',{x:-11.9,y:1.5,z:-9.4})
    text3.setAttribute('color',"black")
    scene.append(text3)
    
    
    let boxe1 = document.createElement("a-box")
    boxe1.setAttribute("position",{x:-8,y:1,z:-9.5})
    boxe1.setAttribute("depth",0.5)
    boxe1.setAttribute("height",0.8)
    boxe1.setAttribute("width",3)
    boxe1.setAttribute("color","red")
    scene.append(boxe1)
    
    let text4 = document.createElement("a-text")
    text4.setAttribute('value',"Food Court")
    text4.setAttribute('position',{x:-8.5,y:1,z:-9})
    text4.setAttribute('color',"black")
    scene.append(text4) 
    
    let carp = document.createElement("a-box")
    carp.setAttribute("position",{x:-7,y:2.4,z:-9.5})
    carp.setAttribute("depth",0.5)
    carp.setAttribute("height",1.5)
    carp.setAttribute("width",0.8)
    carp.setAttribute("color","red")
    scene.append(carp)
   
    
}



