class ProgressBar extends HTMLElement {
    constructor() {
        super();
        // récupération des attributs de l'élément HTML
        // 'on' ou 'off <=> si la barre de progression est en cours d'animation ou non
        this.status = this.getAttribute('status') || 'off';
        // niveau de progression de la barre (en %)
        this.progression = this.getAttribute('progression') || '0';

        // on va former la barre de progression avec des divs que l'on va mettre dans un shadow DOM ouvert dans l'objet'
        this._shadowRoot = this.attachShadow({ 'mode': 'closed' });

        // création de la barre de progression
        let bar = this.createBar();

        // on ajoute la barre de progession au shadow DOM
        this._shadowRoot.appendChild(bar);
    }

    // méthode retournant une barre de progression
    createBar() {
        // création des divs qui vont former la barre de progression
        // div complète
        let mainDiv = document.createElement('div');
        // div qui progresse
        let subDiv = document.createElement('div');

        // la div principale contient la div de progression
        mainDiv.appendChild(subDiv);

        // on ajoute un style aux différentes divs :
        mainDiv = this.styleMain(mainDiv);
        subDiv = this.styleSub(subDiv);

        return mainDiv;
    }

    // méthode prenant une div en argument (div principale), lui applique un style et la retourne
    styleMain(div) {
        div.style.background = '#0a0a0a';
        div.style.height = '20px';
        div.style.width = '20%';
        div.style.position = 'relative';
        div.style.left = '40%';
        div.style.borderRadius = '10px';
        div.style.marginTop = '2%';
        // div.style.borderColor = '#7D8491';
        return div;
    }

    // méthode prenant une div en argument (div progressant), lui applique un style et la retourne
    styleSub(div) {
        div.style.width = 0;
        div.style.background = '#CED25A';
        div.style.borderRadius = '10px';
        div.style.height = '20px';
        return div;
    }

    // fonction faisant incrémenter la barre de progress%
    triggerProgress(progress) {
        let newWidth = parseInt(this._shadowRoot.children[0].children[0].style.width) + progress + '%';
        this._shadowRoot.children[0].children[0].style.width = newWidth;
    }

    // fonction faisant décrémenter la barre de progress%
    lowerProgress(progress) {
        let newWidth = parseInt(this._shadowRoot.children[0].children[0].style.width) - progress + '%';
        this._shadowRoot.children[0].children[0].style.width = newWidth;
    }

    static get observedAttributes() {
        return ['status'];
    }
}