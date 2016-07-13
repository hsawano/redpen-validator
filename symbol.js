function validateSentence(sentence) {
    // 参考
    // https://www.jtf.jp/jp/style_guide/pdf/jtf_style_guide.pdf
    // 4.2. 記号
    // カタカナは「全角」で表記します。半角カタカナは特殊な用途を除いて、原則として使いません。
    var regex1 = new RegExp( /[()]/ );
    var regex2 = new RegExp( /[！!]/ );
    var regex3 = new RegExp( /[？?]/ );
    var regex4 = new RegExp( /[^ァ-ンヲｧ-ﾝｦ]・[^ァ-ンヲｧ-ﾝｦ]/ );
    var regex5 = new RegExp( /[-－]/ );
    var regex6 = new RegExp( /[：；:;]/ );
    var regex7 = new RegExp( /["”'’`‘｛｝{}＜＞]/ );

    // カッコの判定
    if ( sentence.content.match(regex1) ) {
        addError('丸かっこは全角を使います。', sentence);
    };
    // ！の判定
    if ( sentence.content.match(regex2) ) {
        addError('感嘆符の利用は避けてください。', sentence);
    };
    if ( sentence.content.match(regex3) ) {
        addError('疑問符の利用は避けてください。', sentence);
    };
    if ( sentence.content.match(regex4) ) {
        addError('カタカナ複合語の区切り以外で「・」の利用は避けてください。', sentence);
    };
    if ( sentence.content.match(regex5) ) {
        addError('原則として「' + sentence.content.match(regex5) + '」の利用は避けてください。', sentence);
    };
    if ( sentence.content.match(regex6) ) {
        addError('原則として「' + sentence.content.match(regex6) + '」の利用は避けてください。もし利用せざるを得ない場合は全角を使います。', sentence);
    };
    if ( sentence.content.match(regex7) ) {
        addError('「' + sentence.content.match(regex7) +　'」の利用は避けてください。', sentence);
    };
};
