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
    
    document.getElementById("prefix").textContent=prefix[Math.floor(Math.random()*game_list.length)];
    document.getElementById("suffix").textContent=suffix[Math.floor(Math.random()*game_list.length)];
}