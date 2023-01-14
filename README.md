# Runes / ᚱᚢᚾᛖᚴ

Translate between Latin and Runic script.

```js
> const runes = require('runes')

> runes.encode('foo bar')

'ᚠᚩᚩ ᛒᚪᚱ'
```


## API

Translation from Latin to Runic.

```js
> runes.encode('hello world')

'ᚻᛖᛚᛚᚩ ᚹᚩᚱᛚᛞ'
```

Translation from Runic to Latin.

```js
> runes.decode('ᚻᛖᛚᛚᚩ ᚹᚩᚱᛚᛞ')

'hello world'
```

Note that casing is not preserved during translation.


## Resources

* Wikipedia article: [Runes](https://en.wikipedia.org/wiki/Runes#Runic_alphabets)
* Runic transliteration tables: [xahlee.info](http://xahlee.info/comp/unicode_runic.js)
