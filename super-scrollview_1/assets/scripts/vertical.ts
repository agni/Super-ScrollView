
import BaseItem from './baseItem';
const { ccclass, property } = cc._decorator;
@ccclass
export default class Vertical extends BaseItem {
    onLoad() {
        this.input.placeholder = this.transform.height.toString()
    }
    onInput() {
        let height = Number(this.input.string)
        if (isNaN(height)) return
        if (height < 100) {
            return
        }

        this.transform.setContentSize(new cc.Size(this.transform.width, height))
    }
}
 