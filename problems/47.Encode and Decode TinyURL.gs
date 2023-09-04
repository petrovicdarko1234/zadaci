let hashMap = new Map<number, string>();
let key = 0

function encode(longUrl: string): string {
    key = key + 1
    hashMap.set(key, longUrl)

    return key.toString()
};

function decode(shortUrl: string): string {
    let key = parseInt(shortUrl)
    let URL = hashMap.get(key)
    if (URL != undefined) {
        return URL
    }
    return "null"
};