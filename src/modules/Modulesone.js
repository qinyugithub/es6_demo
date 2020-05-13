import Par from '../lib/Parentclass'
import dec from '../lib/decorator'

import header from '../components/header'

@dec
export default class Modulesone extends Par{
    constructor(el){
        super();
        this.name = "Modulesone"
        this.el = el;

        this.headerComponent = new header();
    };

    init (){
        console.log("我是模块一");
        this.parentMethor();
        this.methodone();

        this.render();
    };

    render(){
        const fr = document.createDocumentFragment();
        fr.appendChild( this.headerComponent.tpl() );
        this.el.appendChild(fr);
    }
}