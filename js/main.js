const enterBtn = document.getElementById('enter-btn');
let selectedShape = 'box';

// 形の選択ボタンの切り替え
document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
        selectedShape = btn.dataset.shape;
    });
});

// 入場ボタンが押された時の処理
enterBtn.addEventListener('click', () => {
    const userData = {
        name: document.getElementById('username').value || 'ななしさん',
        shape: selectedShape,
        color: document.getElementById('avatarColor').value
    };

    console.log("作成されたキャラクター:", userData);

    // UIを非表示にして3D空間を起動する
    document.getElementById('character-creator').style.display = 'none';
    
    // ここで initThreeJS(userData) のように3Dシーンへデータを渡す
    startMetaverse(userData);
});
