const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formConnection = document.querySelector('.form-connection');
const formInscription = document.querySelector('.form-inscription')
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');


//APPARITION DU MODAL INSCRIPTION
btnInscription.addEventListener('click', () => {

    if(formConnection.classList.contains("apparition")){
        formConnection.classList.remove("apparition")
    }

    formInscription.classList.toggle('apparition');
})

//APPARITION DU MODAL CONNECTION
btnConnection.addEventListener('click', () => {

    if(formInscription.classList.contains("apparition")){
        formInscription.classList.remove("apparition")
    }

    formConnection.classList.toggle('apparition');
})


//GESTION DE L'INSCRIPTION
formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpValeur = mdpInscription.value ;

    auth.createUserWithEmailAndPassword(mailValeur, mdpValeur).then(cred => {
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    })
})


//GESTION DE LA CONNECTION
formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpValeur = mdpConnection.value ;

    auth.signInWithEmailAndPassword(mailValeur, mdpValeur).then(cred => {
        console.log("CONNECTION :", cred.user);
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    })
})

deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("Déconnecté");
    })
})


//GERER LE CONTENU
const h1 = document.querySelector('h1');
const info = document.querySelector('.info')

auth.onAuthStateChanged(utilisateur => {
    if(utilisateur){
        h1.innerText = "Voici le contenu privé";
        info.innerText = "Vous voila de retour";
    }else{
        h1.innerText = "Vous n\'êtes pas connecté";
        info.innerText = "Merci de vous identifier";
    }
})