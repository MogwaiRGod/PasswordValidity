class Password {

    constructor(ctnt = "") {
        // contenu du mot de passe
        this.content = ctnt;
        /* 
         * tableau associatif de critères de validité du mdp
         * chaque critère dirige vers un booléen et une méthode
         * checked : indique si le critère a déjà été vérifié ou non
         * method : méthode de vérification associée
         */
        // score de validité du mdp (en %)
        this.score = 0;

        this.checked = {
            checkedDigits: {
                // par défaut : aucun critère n'a été vérifié
                checked: false,
                method: this.checkDigits
            },
            checkedLowercases: {
                checked: false,
                method: this.checkLowercases
            },
            checkedUppercases: {
                checked: false,
                method: this.checkUppercases
            },
            checkedSymbols: {
                checked: false,
                method: this.checkSymbols
            }
        };

    }

    // méthode vérifiant entièrement la validité du mdp et mettant à jour une barre de progression entrée en argument
    checkPasswordBar(bar) {
        // if (!this.checked[criteria]['checked']) {
        for (let criteria in this.checked) {
            // on appelle la méthode du critère
            let method = this.checked[criteria]['method'];

            // s'il n'est pas vérifié ET qu'il l'était auparavant
            if (!method(this) && this.checked[criteria]['checked']) {
                // on décrémente la barre de progression
                bar.lowerProgress(25);
                // on màj le booléen
                this.checked[criteria]['checked'] = false;
                // on màj le score
                this.score -= 25;
            }
            // s'il est vérifié ET qu'il ne l'était pas auparavant
            else if (method(this) && !this.checked[criteria]['checked']) {
                // on incrémente la barre de progression
                bar.triggerProgress(25/* 25% car 4 critères */);
                // on màj le booléen
                this.checked[criteria]['checked'] = true;
                // on màj le score
                this.score += 25;
            }
            // dans les autres cas càd :
            // si le critère n'est pas vérifié et ne l'était pas avant
            // ou si le critère est vérifié et l'était déjà
            // => on ne fait rien
            // console.log(method(this));

        }
    }

    checkDigits(obj) {
        // regular expression : 3 chiffres ou +
        let regex = /\d{3,}/;

        // si le contenu du mdp vérifie la regex
        if (obj.content.match(regex) !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    checkLowercases(obj) {
        // regular expression : toutes les bas-de-casse, au nombre de 6 ou +
        let regex = /[a-z]{6,}/;

        // si le contenu du mdp vérifie la regex
        if (obj.content.match(regex) !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    checkUppercases(obj) {
        // regular expression : toutes les lettres capitales, au nombre de 3 ou +
        let regex = /[A-Z]{3,}/;

        // si le contenu du mdp vérifie la regex
        if (obj.content.match(regex) !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    
    checkSymbols(obj) {
        // regular expression : toutes les lettres capitales, au nombre de 2 ou +
        let regex = /[\$%§£¤\*@&#]{2,}/;

        // si le contenu du mdp vérifie la regex
        if (obj.content.match(regex) !== null) {
            return true;
        }
        else {
            return false;
        }
    }
}