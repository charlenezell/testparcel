// import indexCSS from  './index.css';
import "babel-polyfill";
import {sayHello} from "./common";
import img from "./images/a.png";
import fs from "fs";
// console.log(indexCSS);
let w = fs.readFileSync(__dirname + "/index.css", "utf8");
console.log(w);
// console.log(indexCSS);
// console.log(indexCSS.myClassName);
console.log(img);
sayHello();
console.log("worlsfd");
document.querySelectorAll(".d")[0].innerHTML = "ddxxxsdf";


// /**here 1 */
// setTimeout(()=>{
//     import("./async/componenta.js").then((componenta)=>{
//         componenta.init();
//     });
// },1000);

// setTimeout(async function() {
//     let comB=await import("./async/componentb.js");
//     comB.init();
// }, 2000);

// /* here 2*/
// const components={
//     c1:import("./async/componenta.js"),
//     c2:import("./async/componentb.js")
// }

// async function renderComponent(name){
//     const com=await components[name];
//     return com.init();
// }

//hmr
if (module.hot) {
    module.hot.dispose(function (...arg) {
        // module is about to be replaced
        console.log("dispose", arg);
    });

    module.hot.accept(function (...arg) {
        // module or one of its dependencies was just updated
        console.log("accept", arg);
    });
}