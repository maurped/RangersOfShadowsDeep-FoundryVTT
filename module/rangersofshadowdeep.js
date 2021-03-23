import rangersofshadowdeepItemSheet from "./sheets/rangersofshadowdeepItemSheet.js";
import rangersofshadowdeepActorSheet from "./sheets/rangersofshadowdeepActorSheet.js";

Hooks.once("init", () => {
    console.log("rangersofshadowdeep | Initialisation du système rangersofshadowdeep");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("rangersofshadowdeep", rangersofshadowdeepItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("rangersofshadowdeep", rangersofshadowdeepActorSheet, { makeDefault: true });
})