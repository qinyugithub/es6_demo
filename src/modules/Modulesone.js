import Par from '../lib/Parentclass'
import dec from '../lib/decorator'

@dec
export default class Modulesone extends Par{
    constructor(){
        super();
        this.name = "Modulesone"
    };

    init (){
        console.log("我是模块一");
        this.parentMethor();
        this.methodone();
    };
}