
import BaseItem from './baseItem';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Horizontal extends BaseItem {
    onLoad() {
        this.input.placeholder = this.transform.width.toString()
    }
    onInput() {
        let width = Number(this.input.string)
        if (isNaN(width)) return
        if (width < 100) {
            return
        }
        this.transform.setContentSize(new cc.Size(Number(this.input.string), this.transform.height))
    }
}
