import * as building from '../services/game';

export class CivViewModel {
    public civ: building.Civilisation;

    constructor(params: { civ: building.Civilisation }){
        this.civ = params.civ;
    }
}

export const civTemplate = `<section>
<header>La civilisation des <span data-bind="text: civ.name"></span></header>
<section>
    <header>Mes bâtiments</header>
    <!-- ko foreach: civ.buildings -->
    <building params="building: $data"></building>
    <!-- /ko -->

    <!-- ko foreach: civ.storages -->
    <div><span data-bind="text: name"> </span> <span data-bind="text: count"> </span></div>
    <!-- /ko -->
</section>
</section>`;