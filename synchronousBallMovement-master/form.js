class Form{
    constructor(){
        this.input = createInput("name")
        this. button = createButton("play")
    }
    display(){
        var title = createElement("h2")
        title.html("carGame")
        title.position(150,20)
        
       this. input.position(130,160)
        
       this. button.position(250,200)
        this.button.mousePressed(()=>{
            this.button.hide()
           this. input.hide()
            player.name = this.input.value()
            playerCount = playerCount+1
            player.index = playerCount
            player.update(playerCount)
            player.updateCount(playerCount)
        })
    }
}