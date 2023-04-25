<?php        
//si le bouton envoyer a été cliqué  
if (isset($_POST["envoyer"])){   
//on recupère le nom  
$nom = $_POST["nom"];      
//on recupère l'adresse email  
$email = $_POST["email"];       
//on recupère le message  
$message = $_POST["message"];  
  
$to = "optimizseo14@gmail.com";      
$headers = "From:" . $nom . " " . $email;    
//on envoie le message avec la fonction mail  
if (mail($to,$message,$headers))   
//si le message a été envoyé, on le confirme  
{   
echo " ton message est bien envoyé.";    
}   
//sinon on n'affiche un message d'erreur  
else   
{   
echo "Une erreur s'est produite";   
}   
}   
?> 