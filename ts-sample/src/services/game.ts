import * as ko from 'knockout';
import { setIntervalWhen } from 'ts-library';

export interface Building {
    name: string;
    count:() => number;
    visible: () => boolean;
    canBuy: () => boolean;
    buy: () => void;
    actionLabel: string;
}

interface SimpleBuildingPattern {
    price?: { [resource: string]: number };
    effect: { [resource: string]: number };
    name: string;
    count?: number;
    actionLabel: string;
}

class SimpleBuilding implements Building {
    public name: string;
    public actionLabel: string;
    count = ko.observable(0);
    constructor(private civ: Civilisation, private pattern: SimpleBuildingPattern) {
        this.name = pattern.name;
        this.actionLabel = pattern.actionLabel;
        setIntervalWhen(this.updateValues, 1000, this.count);
        
        if (pattern.count) this.count(pattern.count);
        if (this.pattern.price) {
            for (let key in this.pattern.price) {
                if (!this.civ.resources[key]) this.civ.resources[key] = ko.observable(0);
            }
        }

        for (let key in this.pattern.effect) {
            if (!this.civ.resources[key]) this.civ.resources[key] = ko.observable(0);
        }
    }

    visible = ko.pureComputed(() => true);
    canBuy = ko.pureComputed(() => {
        if (!this.pattern.price) return false;
        for (let key in this.pattern.price) {
            if (this.civ.resources[key]() < this.pattern.price[key]) return false;
        }
        return true;
    });

    buy = () => {
        this.count(this.count() + 1);
        for (let key in this.pattern.price) {
            this.civ.resources[key](this.civ.resources[key]() - this.pattern.price[key]);
        }
    }

    updateValues = () => {
        let maxCount = this.count();
        for (let key in this.pattern.effect) {
            if (this.pattern.effect[key] < 0) {
                const thisMaxCount = - this.civ.resources[key]() / this.pattern.effect[key];
                if (maxCount > thisMaxCount) {
                    maxCount = thisMaxCount;
                }
            }
        }

        this.count(maxCount);

        for (let key in this.pattern.effect) {
            var newValue = this.civ.resources[key]() + this.pattern.effect[key] * maxCount;
            this.civ.resources[key](newValue);
        } 
    }
}

const patterns:SimpleBuildingPattern[] = [
    { name: "Forêt", effect: { "bois": 1 }, count: 1, price: { "soldat": 10 }, actionLabel: 'Envahir avec 10 soldats' },
    { name: "Mine", effect: { "fer": 1 }, price: { "soldat": 10 }, actionLabel: 'Envahir avec 10 soldats'},
    { name: "Village", effect: { "habitant": 2, "nourriture": -1 }, price: { "soldat": 50 }, count: 1, actionLabel: 'Envahir avec 50 soldats'},
    { name: "Champ", effect: { "nourriture": 2, "habitant": -1 }, price: { "soldat": 10 }, count: 1, actionLabel: 'Envahir avec 10 soldats'},
    { name: "Armurerie", effect: { "fer": -1, "arme": 1 }, price: { "bois": 10 }, actionLabel: 'Construire avec 10 bois'},
    { name: "Caserne", effect: { "soldat": 1, "habitant": -1 }, price: { "bois": 10 }, actionLabel: 'Construire avec 10 bois'}
]

export class Civilisation {
    name = ko.observable('Typescriptiens');

    resources: { [resource: string]: ko.Observable<number> } = {}
    storages: { name: string, count: ko.Observable<number> }[]

    buildings = ko.observableArray<Building>();
    
    constructor() {
        for (let pattern of patterns) {
            this.buildings.push(new SimpleBuilding(this, pattern));
        }
        this.storages = [];
        for (let key in this.resources) {
            this.storages.push({ name: key, count: this.resources[key] });
        }
        this.resources["soldat"](50);
        this.resources["nourriture"](10);
        this.resources["habitant"](100);
    }
}
