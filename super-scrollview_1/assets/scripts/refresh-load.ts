
import BaseMain from './baseMain';
const { ccclass, property } = cc._decorator;

@ccclass
export default class RefreshLoad extends BaseMain {
    @property(cc.Node) header: cc.Node = null
    @property(cc.Node) footer: cc.Node = null
    onLoad() {
        this.header.setScale(new cc.Vec3(1, 0, 1))
        this.footer.setScale(new cc.Vec3(1, 0, 1))
    }

    private headerTween: cc.Tween<cc.Node>
    private footerTween: cc.Tween<cc.Node>
    onHeader(scrollView: any, event: any) {
        if (event.progress > 2) {
            if (!(this.header as any)['playing']) {
                this.headerTween = new cc.Tween(this.header);
                this.headerTween.to(0.518, {
                    scaleX: 1,
                    scaleY: 1,
                }, {
                    easing: "elasticOut"
                });
                this.headerTween.start();
                (this.header as any)['playing'] = true
            }
        } else {
            this.headerTween && this.headerTween.stop();
            (this.header as any)['playing'] = false
            this.header.setScale(new cc.Vec3(1, event.progress, 1))
        }

        let label = this.header.getComponentInChildren(cc.Label)
        if (event.stage == "touch") {
            label.string = "↓ 继续下拉"
        }
        if (event.stage == "wait") {
            label.string = "↑ 松开刷新"
        }
        if (event.stage == "lock") {
            label.string = this.datas.length == 0 ? "没有数据" : "刷新中..."
        }
        if (event.stage == 'release') {
            label.string = ""
        }
        if (event.action) {
            this.scheduleOnce(() => this.layout.total(this.datas.length), 1)
        }
    }
    onFooter(scrollView: any, event: any) {
        if (event.progress > 2) {
            if (!(this.footer as any)['playing']) {
                this.footerTween = new cc.Tween(this.footer);
                this.footerTween.to(0.518, {
                    scaleX: 1,
                    scaleY: 1,
                }, {
                    easing: "elasticOut"
                });
                this.footerTween.start();
                (this.footer as any)['playing'] = true
            }
        } else {
            this.footerTween && this.footerTween.stop();
            (this.footer as any)['playing'] = false
            this.footer.setScale(new cc.Vec3(1, event.progress, 1))
        }

        let label = this.footer.getComponentInChildren(cc.Label)
        if (event.stage == "touch") {
            label.string = "↑ 继续上拉"
        }
        if (event.stage == "wait") {
            label.string = "↓ 松开加载"
        }
        if (event.stage == "lock") {
            label.string = "加载中..."
        }
        if (event.stage == 'release') {
            label.string = ""
        }
        if (event.action) {
            for (let i = 0; i < 60; i++) {
                this.datas.push({
                    message: `${this.datas.length}`
                })
            }
            this.scheduleOnce(() => this.layout.total(this.datas.length), 1)
        }
    }
}