import Modulesone from '../modules/Modulesone'
;((doc) => {

    const app = doc.getElementById("app");
    const init = () => {
        new Modulesone(app).init();
    }

    init();

})(document);