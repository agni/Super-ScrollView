
import BaseMain from './baseMain';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Simple extends BaseMain {
    async onLoad() {
        for (let i = 0; i < 200; i++) {
            this.datas.push({ message: i })
        }
        await this.layout.total(this.datas.length)
    }
}
