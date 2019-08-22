let parent: HTMLElement | null = null;
let checkList: ObserveContent[] = [];
let scrollTop: number = 0;
let scrollIndex: number = 0;
// @ts-ignore
let downGrade: boolean = true;

function checkParent () {
  if (!parent) {
    parent = document.getElementById('main')!;
  }
}

function createScrollListener () {
  checkParent();
  parent!.onscroll = function (e) {
    scrollTop = parent!.scrollTop;
    checkScrollPosition();
  }
}

function checkScrollPosition (index?: number) {
  const height = window.innerHeight * 1.1;
  checkList.forEach((target, idx) => {
    const visible = index === undefined
      ? ( scrollTop <= target.position && (scrollTop + height * 0.4) >= target.position )
      : ( idx === index );
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

function setTransformPosition (direction: number) {
  checkParent();
  if (direction < 0) {
    scrollIndex = Math.max(-5, scrollIndex + direction);
  }
  if (direction > 0) {
    scrollIndex = Math.min(scrollIndex + direction, 0);
  }
  parent!.style.transform = `translate3d(0, ${scrollIndex * 100}vh, 0)`;
  parent!.style.webkitTransform = `translate3d(0, ${scrollIndex * 100}vh, 0)`;
  checkScrollPosition(0 - scrollIndex);
}

window.onresize = function () {
  if (window.innerWidth < 750) {
    scrollIndex = 0;
    parent!.style.transform = `translate3d(0, ${scrollIndex * 100}vh, 0)`;
    parent!.style.webkitTransform = `translate3d(0, ${scrollIndex * 100}vh, 0)`;
  }
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
  
  static setTransformPosition (direction: number) {
    setTransformPosition(direction);
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
