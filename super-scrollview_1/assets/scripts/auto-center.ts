
import Simple from './simple';
const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoCenter extends Simple {
    @property(cc.Label) label: cc.Label = null
    @property key: string = ""
    start() {
        this.label.string = `当前中心锚点：${(this.layout.centerAnchor as any)[this.key]}`
    }
    onInputAnchor(event: cc.EditBox) {
        let anchor = Number(event.string)
        if (isNaN(anchor)) return
        (this.layout.centerAnchor as any)[this.key] = anchor
        this.layout.scrollToCenter()
        this.label.string = `当前中心锚点：${(this.layout.centerAnchor as any)[this.key]}`
    }
} 