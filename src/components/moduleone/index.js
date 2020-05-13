
import tpl from './index.tpl'

// 子组件
import Header from './header'
import Usericon from './usericon'

export default class {
    constructor(){
        this.name = 'moduleone',
        this.headerComponent = new Header();
        this.usericonComponent = new Usericon();
    }

    tpl(){
        const div = document.createElement('div');
        div.appendChild(this.headerComponent.tpl());
        div.appendChild(this.usericonComponent.tpl());
        return div;
    }
}