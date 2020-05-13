import './index.scss'
import tpl from './index.tpl'

export default class {
    constructor(){
        this.name = 'header'
    }

    tpl(){
        const div = document.createElement('div');
        div.innerHTML=tpl();
        return div;
    }
}