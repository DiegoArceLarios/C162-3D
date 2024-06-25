AFRAME.registerComponent('places-helicopter', {
    schema:{

    },init: function(){
        this.createPlacesBackground()
    },tick: function(){
        const placeContainer = document.querySelector("#places-container")
        const {state} = placeContainer.getAttribute("tour-action")

        if(state === "view" || state === "change-view"){
            this.el.setAttribute('visible', true)
        }else{
            this.el.setAttribute('visible', false)
        }
    },createPlacesBackground: function(){
        const sideViewContainer = document.querySelector('#vistas')
        var x = -150
        var y =  30



        for(var i = 1; i <= 4; i++){
            x += 50
            y += 2
            const position = {
                x: x,
                y: y,
                z: -40
            }
            const entityEl = this.createPlaces(position, i)
            sideViewContainer.appendChild(entityEl)
        }
    },createPlaces: function(position, id){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible', true)
        entityEl.setAttribute('id', `place-${id}`)

        entityEl.setAttribute('geometry', {
            primitive: 'circle',
            radius: 2.5
        })
        entityEl.setAttribute('material', {
            src: "./assets/helicopter.png",
            opacity: 0.9
        })

        entityEl.setAttribute('position', position)
        entityEl.setAttribute('cursor-detected', {})
        return entityEl
    }
})