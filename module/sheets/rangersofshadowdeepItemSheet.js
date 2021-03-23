export default class rangersofshadowdeepItemSheet extends ItemSheet{
    get template(){
        console.log(`rangersofshadowdeep | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/rangersofshadowdeep/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }
}