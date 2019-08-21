let parent: HTMLElement | null = null;
let checkList: ObserveContent[] = [];
// @ts-ignore
let downGrade: boolean = window.IntersectionObserver === undefined;

function createScrollListener () {
  parent = document.getElementById('main')!;
  parent.onscroll = function (e) {
    checkScrollPosition();
  }
}

function checkScrollPosition () {
  const top = parent!.scrollTop;
  const height = window.innerHeight * 1.1;
  checkList.forEach(target => {
    const visible =
      top <= target.position &&
      (top + height * 0.4) >= target.position
    if (visible && !target.show) {
      target.onShow && target.onShow();
      target.show = true;
    }
    else if (!visible && target.show) {
      target.onHide && target.onHide();
      target.show = false;
    }
  })
}

export default class ObserveContent {
  public show: boolean = false;
  public target: HTMLElement;
  public position: number = 0;
  public observer: IntersectionObserver | undefined;
  public onShow: any;
  public onHide: any;

  constructor (target: HTMLElement) {
    if (!parent && downGrade) createScrollListener();
    this.target = target;
  }

  static forceUpdate () {
    if (!downGrade) return;
    checkList.forEach(target => {
      target.updatePosition();
    })
    checkScrollPosition();
  }

  updatePosition () {
    this.position = this.target.getBoundingClientRect().top;
  }

  observe () {
    if (downGrade) {
      this.position = this.target.getBoundingClientRect().top;
      checkList.push(this);
      checkScrollPosition();
    } else {
      this.observer = new IntersectionObserver(e => {
        if (e[0].intersectionRatio > 0 && !this.show) {
          this.show = true;
          this.onShow && this.onShow();
        } else if (e[0].intersectionRatio <= 0 && this.show) {
          this.show = false;
          this.onHide && this.onHide();
        }
      });
      this.observer.observe(this.target);
    }
  }

  unobserve () {
    if (this.observer) {
      this.observer.unobserve(this.target);
    } else {
      checkList = checkList.filter(item => item !== this);
    }
  }
}
