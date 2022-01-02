
const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
   
    toScene(event:any,args:string){
        cc.director.loadScene(args)
    }
}
