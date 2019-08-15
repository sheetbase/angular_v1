import { Observable } from 'rxjs';

export function retryInterval(
  fulfill: () => boolean,
  everySeconds = 1,
  forSeconds = 7,
) {
  return new Observable(observer => {
    const handler = (intervalId: number) => {
      if (fulfill()) {
        clearInterval(intervalId);
        // done
        observer.next(true);
        observer.complete();
      }
    };
    const actionInterval = setInterval(
      () => handler(actionInterval),
      everySeconds * 1000,
    );
    handler(actionInterval); // immediately check
    // done anyway
    setTimeout(() => {
      clearInterval(actionInterval);
      observer.complete();
    }, forSeconds * 1000);
  });
}

export function o2a(
  object: {[$key: string]: any},
  clone = false,
  includeKey = true,
  limit?: number,
  honorable = false
): any[] {
  let output = [];
  if (clone) {
    object = Object.assign({}, object || {});
  }
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object') {
      object[key]['$key'] = key;
    } else {
      object[key] = {
        $key: key,
        value: object[key]
      };
    }
    if (!includeKey) {
      delete object[key]['$key'];
    }
    output.push(object[key]);
  }
  if (limit) {
    output.splice(limit, output.length);
  }
  if (honorable && output.length < 1) {
    output = null;
  }
  return output;
}

export function noMark(str: string) {
  return str.toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd');
}

export function noDash(str: string) {
  return str.replace(/\-|\_/g, '');
}

export function dashToSpace(str: string) {
  return str.replace(/\-|\_/g, ' ');
}

export function filter(items: any[], keyword: string, fields?: string[]) {
  const find = (item: any, kw: string) => {
    let againstString = item.title || item.name;
    (fields || []).forEach(field => {
      if (!item[field]) { return; }
      if (item[field] instanceof Object) {
        return againstString += ' // ' +
          (JSON.stringify(item[field]))
            .replace(/\{/gi, '')
            .replace(/\"\}/gi, '')
            .replace(/\{\"/gi, '')
            .replace(/\"\:\"/gi, ' ')
            .replace(/\"\,\"/gi, ' ')
            .replace(/\"/gi, '');
      }
      againstString += ' // ' + item[field];
    });
    againstString = againstString.toLowerCase();
    againstString = againstString + ' // ' + dashToSpace(againstString) + ' // ' + noDash(againstString);
    return againstString.indexOf(kw.toLowerCase()) > -1;
  };
  return keyword ? (items || []).filter(item => find(item, noMark(keyword))) : items;
}

