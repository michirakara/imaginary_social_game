window.onload = function() {
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
    
    document.getElementById("prefix").textContent=prefix[prefix_index];
    document.getElementById("suffix").textContent=suffix[suffix_index];
}