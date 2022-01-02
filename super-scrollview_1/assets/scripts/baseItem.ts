
const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseItem extends cc.Component {
    @property(cc.Label) label: cc.Label = null
    @property(cc.EditBox) input: cc.EditBox = null
    private index: number
    private clickFunc: Function
    get transform() {
        return this.node
    }
    show(data: any, index: number, callback: Function) {
        this.index = index
        this.label.string = data.message
        this.clickFunc = callback
    }
    onClick() {
        this.clickFunc.call(this, this.index)
    }
    onInput() {

    }
}
