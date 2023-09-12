let urlLookup = new Map<number, string>();
let key = 0

function encode(longUrl: string): string {
    key = key + 1
    urlLookup.set(key, longUrl)

    return key.toString()
};

function decode(shortUrl: string): string {
    let key = parseInt(shortUrl)
    let url = urlLookup.get(key)
    if (url != undefined) {
        return url
    }
    return "null"
};