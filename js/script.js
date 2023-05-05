let iptPwd = new Password();

// l'événement input se déclenche dès que la valeur de l'input est modifiée
iptPw.addEventListener('input', () => {
    iptPwd.content = iptPw.value;
    iptPwd.checkPasswordBar(pwBar);
    score.innerText = iptPwd.score;

    // màj des indications sur la page 
    // (-> passe en normal quand c'est validé, en gras quand c'est plus bon)
    for (let criteria in iptPwd.checked) {
        if(iptPwd.checked[criteria]['checked']) {
            document.getElementById(criteria).style.fontWeight = 'normal';
        }
        else {
            document.getElementById(criteria).style.fontWeight = 'bold';
        }
    }
});