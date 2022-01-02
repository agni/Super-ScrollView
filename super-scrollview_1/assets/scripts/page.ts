
import SuperLayout from '../core/super-layout';
import BaseItem from './baseItem';
import BaseMain from './baseMain';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Page extends BaseMain {
    start() {
        for (let i = 0; i < 8; i++) {
            this.datas.push({
                message: i
            })
        }
        this.layout.total(this.datas.length)
    }
    onRefreshEvent(item: cc.Node, index: number) {
        item.getComponent(BaseItem).show(this.datas[index], index, this.onClickItem.bind(this))
    }
    onClickItem() {
    }

    onPageEvent(event: any) {
        console.error(this.layout.currPageIndex)
    }
}
