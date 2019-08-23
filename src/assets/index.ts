import { request } from '../utils/request';

class ResourceLoader {
  public res: string[] = [
    require('./font.ttf'),
    require('./qrcode.png')
  ]

  loadResource () {
    const list: Promise<any>[] = [];
    this.res.forEach(url => {
      list.push(request(url))
    });
    return Promise.all(list);
  }

  load (url: string) {

  }
}

export default new ResourceLoader();
