/// <reference path="../typings/browser.d.ts" />
import * as ko from 'knockout';
import { BuildingViewModel, buildingTemplate } from './components/building';
import { CivViewModel, civTemplate } from './components/civilization';
import * as game from './services/game';

ko.components.register('building', { viewModel: BuildingViewModel, template: buildingTemplate });
ko.components.register('civilization', { viewModel: CivViewModel, template: civTemplate });

if (document.readyState === "loading") {
    document.onreadystatechange = () => { if (document.readyState === "interactive") initApplication(); }
}
else{
    initApplication();
}

function initApplication(){
    const myCiv = new game.Civilisation();
    ko.applyBindings({ civ: myCiv });
}

