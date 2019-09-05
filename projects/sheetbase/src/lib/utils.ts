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

export function filter<Item>(items: Item[], keyword: string, fields?: string[]) {
  const parse = (value: string) => {
    const cleanValue = value
      .toLowerCase()
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      .replace(/đ/g, 'd');
    const dashes2Spaces = cleanValue.replace(/\-|\_/g, ' ');
    const noDashes = cleanValue.replace(/\-|\_/g, '');
    return cleanValue + ' | ' + dashes2Spaces + ' | ' + noDashes;
  };
  const finder = (item: Item, kw: string) => {
    // build against content
    let content = item['title'] || item['$key'];
    (fields || []).forEach(field => {
      const value = item[field];
      if (!value) {
        return;
      } else if (value instanceof Object) {
        content = content + ' ' +
          JSON.stringify(value)
          .replace(/\{/gi, '')
          .replace(/\"\}/gi, '')
          .replace(/\{\"/gi, '')
          .replace(/\"\:\"/gi, ' ')
          .replace(/\"\,\"/gi, ' ')
          .replace(/\"/gi, '');
      } else {
        content = content + ' ' + value;
      }
    });
    content = parse(content);
    // check matching
    return (content.indexOf(kw) !== -1);
  };
  return !keyword ? items : (items || []).filter(item => finder(item, keyword));
}

