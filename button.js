class Buttons{
    constructor(){
        this.srt=createButton('Switch');
        //this.rst=createButton('Reset');
    }
    display(){
        //this.rst.position(400,25);
        this.srt.position(480,25);
        this.srt.mousePressed(()=>{
            if(type===1){type=0;}else{type=1;}
        })
        /*this.rst.mousePressed(()=>{
        })
    }*/

    }
}