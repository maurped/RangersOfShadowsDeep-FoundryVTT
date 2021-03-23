export default class rangersofshadowdeepActorSheet extends ActorSheet{
    get template(){
        console.log(`rangersofshadowdeep | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/rangersofshadowdeep/templates/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }

    activateListeners(html){
        super.activateListeners(html);
        html.find('.jetdedes').click(this._onRoll.bind(this));
        html.find('.item-edit').click(this._onItemEdit.bind(this));
        html.find('.item-delete').click(this._onItemDelete.bind(this));
        
    }

    getItemFromEvent = (ev) => {
        const parent = $(ev.currentTarget).parents(".item");
        return this.actor.getOwnedItem(parent.data("itemId"));
    }


_onItemEdit(event){
    const item = this.getItemFromEvent(event);
    item.sheet.render(true);
}

_onItemDelete(event){
    const item = this.getItemFromEvent(event);
    let d = Dialog.confirm({
        title: "Suppression d'élément",
        content: "<p>Confirmer la suppression de '" + item.name + "'.</p>",
        yes: () => this.actor.deleteOwnedItem(item._id),
        no: () => { },
        defaultYes: false
    });
}


    _onRoll(event){
        const des = "1d20";
        console.log(event);
        const monJetDeDes = event.target.dataset["dice"];
        console.log(monJetDeDes);
        const jetdedesFormule = des+'+'+monJetDeDes;
        console.log(jetdedesFormule);

        const texte = "jet de " + event.target.dataset["nom"] + " : " + jetdedesFormule;
        let roll = new Roll(jetdedesFormule);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor : this.actor}),
            
            flavor : texte

        })
        
    }
}