<?php 
$username = 'James';
$var = 1;
$myVar = 2;
$myVar += $var;

//Constance
/* 
define('test', 2);

// resultat 2  +  3
$result = $myVar + test;

echo test . ' + ' . $myVar . ' = ' . $result; 
*/
?>

<?php 
$nombre = 5;
$chiffre = 4;

if ($nombre != 5)
{
    echo 'super';
} 
else if ($nombre === 4) 
{
    echo 'cool';
}
else if ($nombre === 5 && $chiffre === 4) 
{
    echo 'bien';
}
else 
{
    echo 'erreur';
}

// Si j'ai 20 message
$messageCount = 20;
// La boite de message est pleine
$messageBoxIsFull = $messageCount > 15;

// retourne true car supérieur à 15
var_dump($messageBoxIsFull);
?>

<?php
$isPremium = true;
$unreadMessages = 0;
$readMessages = 9;
$junkMessages = 4;
$spamMessages = 4;
$messagesCountLimit = 50;
$premiumCountLimit = 100;
$hasUnreadMessages = false;
$mustCleanMessages = false;
$isMessageboxFull = false;
$totalMessages = $unreadMessages + $readMessages + $junkMessages + $spamMessages;
if ($hasUnreadMessages = $unreadMessages !== 0) {
  echo $unreadMessages.' messages non lus';
}
if ($mustCleanMessages = $readMessages >= 10 || $junkMessages >= 5 || $spamMessages >= 5) {
  echo ' Des messages à nettoyer';
}
if ($isMessageboxFull = !$isPremium && $totalMessages > $messagesCountLimit || $isPremium && $totalMessages > $premiumCountLimit) {
  echo ' Attention : vous avez dépassé la limite de messages autorisée !';
}

// La totalité des messages = au message pas lu + message lu + message supprimé + les spams
//$totalMessages = $unreadMessages + $readMessages + $junkMessages + $spamMessages

// Messagerie complet = est différent de "!"ispremium et = total message 
//qui est supérieur à messagecountlimit ou ispremium et total message supérieur à premiumcountlimit
//$isMessageboxFull = !$isPremium && $totalMessages > $messagesCountLimit || $isPremium && $totalMessages > $premiumCountLimit;

?>