import Par from '../lib/Parentclass'
import dec from '../lib/decorator'

//组件
import ModuleoneCom from '../components/moduleone'

@dec
export default class Moduleone extends Par{
    constructor(el){
        super();
        this.name = "Modulesone"
        this.el = el;
        this.moduleone = new ModuleoneCom();
    };

    init (){
        console.log("我是模块一");
        this.parentMethor();
        this.methodone();

        this.render();
    };

    render(){
        const fr = document.createDocumentFragment();
        fr.appendChild( this.moduleone.tpl() );
        this.el.appendChild(fr);
    }
}