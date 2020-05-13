import Moduleone from '../modules/Moduleone'
;((doc) => {

    const app = doc.getElementById("app");
    const init = () => {
        new Moduleone(app).init();
    };

    init();


})(document);