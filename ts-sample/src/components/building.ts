import * as building from '../services/game';

export class BuildingViewModel {
    public building: building.Building;

    constructor(params: { building: building.Building }){
        this.building = params.building;
    }
}

export const buildingTemplate = `<div><span data-bind="text: building.count"></span> <span data-bind="text: building.name"></span>
<button data-bind="enable: building.canBuy, click: building.buy, text: building.actionLabel"></button>
</div>`;