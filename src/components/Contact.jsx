import "./Contact.css";

//On peut mettre export default Contact; en fin de script à la place aussi
export default function Contact(props) {
  const statusClass = props.isConnected ? "online" : "offline"; //On regarde si isConnected est en true ou false lors de l'appel de Contact dans App.jsx (isConnected est un argument). Si true, on lui mets une classe inline et la pastille sera verte. False = pastille grise.
  return ( // Le html que va retourner la fonction
    <div className="profile-container">
      <div className="profile-img-container">
        <img src={props.image} alt="Image de profil générée" className="profile-image"/> {/* props.image va récupérer l'argument/paramètre entré pour image lors de l'appel de la fonction dans App.jsx */}
        <div className={`status-indicator ${statusClass}`}></div> {/* statusClass est la variable créée plus haut qui prend comme valeur online ou offline selon le statut de  isConnected lors de l'appel de la fonction */}
      </div>
      <div className="profile-name">
        <p>{props.name}</p> {/* props.name va récupérer l'argument/paramètre entré pour name lors de l'appel de la fonction dans App.jsx */}
      </div>
    </div>
  );
}
