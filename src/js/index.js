import Modulesone from '../modules/Modulesone'
;((doc) => {

    const app = doc.getElementById("app");
    const init = () => {
        new Modulesone().init();
    }

    init();

})(document);