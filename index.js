const transliterations = {
        elder_futhark: [
            ["ᚠ", "f"],
            ["ᚢ", "u"],
            ["ᚦ", "þ"],
            ["ᚨ", "a"],
            ["ᚱ", "r"],
            ["ᚲ", "k"],
            ["ᚷ", "g"],
            ["ᚹ", "w"],
            ["ᚺ", "h"],
            ["ᚻ", "h"],
            ["ᚾ", "n"],
            ["ᛁ", "i"],
            ["ᛃ", "j"],
            ["ᛈ", "p"],
            ["ᛇ", "ï"],
            ["ᛉ", "z"],
            ["ᛊ", "s"],
            ["ᛋ", "s"],
            ["ᛏ", "t"],
            ["ᛒ", "b"],
            ["ᛖ", "e"],
            ["ᛗ", "m"],
            ["ᛚ", "l"],
            ["ᛜ", "ŋ"],
            ["ᛝ", "ŋ"],
            ["ᛞ", "d"],
            ["ᛟ", "o"],
        ],
        anglo_saxon: [
            ["ᚠ", "f"],
            ["ᚢ", "u"],
            ["ᚦ", "þ"],
            ["ᚩ", "o"],
            ["ᚱ", "r"],
            ["ᚳ", "c"],
            ["ᚷ", "g"],
            ["ᚹ", "w"],
            ["ᚻ", "h"],
            ["ᚾ", "n"],
            ["ᛁ", "i"],
            ["ᛡ", "j"],
            ["ᛄ", "j"],
            ["ᛇ", "ï"],
            ["ᛇ", "ʒ"],
            ["ᛈ", "p"],
            ["ᛉ", "x"],
            ["ᛋ", "s"],
            ["ᚴ", "s"],
            ["ᛏ", "t"],
            ["ᛒ", "b"],
            ["ᛖ", "e"],
            ["ᛗ", "m"],
            ["ᛚ", "l"],
            ["ᛝ", "ŋ"],
            ["ᛟ", "œ"],
            ["ᛞ", "d"],
            ["ᚪ", "a"],
            ["ᚫ", "æ"],
            ["ᚣ", "y"],
            ["ᛡ", "ia, io"],
            ["ᛠ", "ea"],
        ],
        younger_futhark_long_branch: [
            ["ᚠ", "f"],
            ["ᚢ", "u"],
            ["ᚦ", "þ"],
            ["ᚬ", "ą"],
            ["ᚱ", "r"],
            ["ᚴ", "k"],
            ["ᚼ", "h"],
            ["ᚾ", "n"],
            ["ᛁ", "i"],
            ["ᛅ", "a"],
            ["ᛋ", "s"],
            ["ᛏ", "t"],
            ["ᛒ", "b"],
            ["ᛘ", "m"],
            ["ᛚ", "l"],
            ["ᛦ", "ʀ"],
        ],
        younger_futhark_short_twig: [
            ["ᚠ", "f"],
            ["ᚢ", "u"],
            ["ᚦ", "þ"],
            ["ᚭ", "ą"],
            ["ᚱ", "r"],
            ["ᚴ", "k"],
            ["ᚽ", "h"],
            ["ᚿ", "n"],
            ["ᛁ", "i"],
            ["ᛆ", "a"],
            ["ᛌ", "s"],
            ["ᛐ", "t"],
            ["ᛓ", "b"],
            ["ᛙ", "m"],
            ["ᛚ", "l"],
            ["ᛧ", "ʀ"],
        ],
        medieval: [
            ["ᛆ", "a"],
            ["ᛒ", "b"],
            ["ᛍ", "c"],
            ["ᛑ", "d"],
            ["ᚧ", "ð"],
            ["ᛂ", "e"],
            ["ᚠ", "f"],
            ["ᚵ", "g"],
            ["ᚼ", "h"],
            ["ᛁ", "i"],
            ["ᚴ", "k"],
            ["ᛚ", "l"],
            ["ᛘ", "m"],
            ["ᚿ", "n"],
            ["ᚮ", "o"],
            ["ᛔ", "p"],
            ["ᛕ", "p"],
            ["ᛩ", "q"],
            ["ᚱ", "r"],
            ["ᛌ", "s"],
            ["ᛋ", "s"],
            ["ᛐ", "t"],
            ["ᚢ", "u"],
            ["ᚡ", "v"],
            ["ᚢ", "v"],
            ["ᚥ", "w"],
            ["ᛪ", "x"],
            ["ᛦ", "y"],
            ["ᚤ", "y"],
            ["ᛨ", "y"],
            ["ᛎ", "z"],
            ["ᚦ", "þ"],
            ["ᛅ", "æ"],
            ["ᛆ", "ä"],
            ["ᚯ", "ø"],
            ["ᚯ", "ö"],
        ],
}


const variants = Object.fromEntries(
        Object.entries(transliterations).map(([k, _]) => [k, k])
)


function decode(string, variant='anglo_saxon') {

        const mapping = Object.fromEntries(transliterations[variant])

        return string
                .toLowerCase()
                .split('')
                .map(e => mapping[e] ?? e)
                .join('')
}


function encode(string, variant='anglo_saxon') {

        const mapping = Object.fromEntries(transliterations[variant].map(([k, v]) => [v, k]))

        return string
                .toLowerCase()
                .split('')
                .map(e => mapping[e] ?? e)
                .join('')
}


module.exports = {
        encode,
        decode,
        variants,
}
