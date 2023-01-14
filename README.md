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


### Runic Variants

The default form of runic used is "Anglo Saxon" with id `anglo_saxon`. However, this library supports several other types which can be specified using the `variant` parameter. For example:

```js
> runes.encode('hello world', variant=runes.variants.medieval)

'ᚼᛂᛚᛚᚮ'
```

Supported variants:

| Name                         | String                          | Code                                         |
|------------------------------|---------------------------------|----------------------------------------------|
| Elder Futhark                | `'elder_futhark'`               | `runes.variants.elder_futhark`               |
| Anglo Saxon                  | `'anglo_saxon'`                 | `runes.variants.anglo_saxon`                 |
| Yonger Futhark (Long Branch) | `'younger_futhark_long_branch'` | `runes.variants.younger_futhark_long_branch` |
| Yonger Futhark (Short Twig)  | `'younger_futhark_short_twig'`  | `runes.variants.younger_futhark_short_twig`  |
| Medieval                     | `'medieval'`                    | `runes.variants.medieval`                    |


## Resources

* Wikipedia article: [Runes](https://en.wikipedia.org/wiki/Runes#Runic_alphabets)
* Runic transliteration tables: [xahlee.info](http://xahlee.info/comp/unicode_runic.js)
