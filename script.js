const roll_gacha = () =>{
    const game_list=[
        "ブルー アーカイブ",
        "ウマ 娘",
        "プロジェクト セカイ",
        "アズール レーン",
        "崩壊： スターレイル",
        "Pokémon Go",
        "あんさんぶる スターズ！！",
        "アーク ナイツ",
        "パズル＆ ドラゴンズ",
        "雀 魂",
        "原 神",
        "モンスター ストライク",
        "ガールズバンド パーティ！",
        "ワールド フリッパー",
        "アイドル マスター",
        "スクールアイドル フェスティバル",
        "艦隊 これくしょん",
        "にゃんこ 大戦争"
    ];
    
    var prefix=[];
    var suffix=[];
    
    for(const item of game_list){
        const [front,back]=item.split(' ');
        prefix.push(front);
        suffix.push(back);
    }
    const prefix_index=Math.floor(Math.random()*game_list.length);
    var suffix_index=Math.floor(Math.random()*(game_list.length-1));
    if(suffix_index>=prefix_index)suffix_index++;

    var prefix_elem=document.getElementById("prefix")
    var suffix_elem=document.getElementById("suffix")
    prefix_elem.textContent=prefix[prefix_index];
    suffix_elem.textContent=suffix[suffix_index];

    var tweet_button=document.getElementById("tweet-button");
    tweet_button.href=`https://twitter.com/intent/tweet?text=${prefix_elem.textContent+suffix_elem.textContent}%0D%0A— 架空のソーシャルゲームジェネレーター&url=https://michirakara.github.io/imaginary_social_game&`
}

window.onload = function() {
    roll_gacha();
}