document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大大吉', '大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
    if (result === '大大吉') {
        document.getElementById('result').style.color = 'gold';
    }else if (result === '大凶') {
        document.getElementById('result').style.color = 'red';
    }else {
        document.getElementById('result').style.color = 'black';
    }
});