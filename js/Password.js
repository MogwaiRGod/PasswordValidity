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

    // méthode vérifiant entièrement la validité du mdp
    checkPassword() {
        // pour chaque critère de validité : on vérifie s'il n'a pas djà été vérifié
        // si non : on le vérifie <=> on appelle la méthode de vérification correspondante
        for (let criteria in this.checked) {
            if (!this.checked[criteria]['checked']) {
                let method = this.checked[criteria]['method'];
                method();
            }
        }
    }

    checkDigits() {
        console.log("METHODE APPELEE");
    }

    checkLowercases() {
        console.log("IDEM");
    }

    checkUppercases() {
        console.log("CA MARCHE");
    }
    
    checkSymbols() {
        console.log("YPPPPPPP");
    }
}