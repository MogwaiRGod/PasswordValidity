let iptPwd = new Password();

// l'événement input se déclenche dès que la valeur de l'input est modifiée
iptPw.addEventListener('input', () => {
    iptPwd.content = iptPw.value;
    iptPwd.checkPasswordBar(pwBar);
    score.innerText = iptPwd.score;
});