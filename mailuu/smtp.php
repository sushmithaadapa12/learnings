<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
echo "venkatesh";

use PHPMailer\PHPMailer\PHPMailer;
use League\OAuth2\Client\Provider\Google;
// use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\OAuth;
// use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
require '/opt/lampp/htdocs/mailuu/vendor/phpmailer/phpmailer/src/Exception.php';
require '/opt/lampp/htdocs/mailuu/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '/opt/lampp/htdocs/mailuu/vendor/phpmailer/phpmailer/src/SMTP.php';
require '/opt/lampp/htdocs/mailuu/vendor/phpmailer/phpmailer/src/OAuth.php';
// require '/opt/lampp/htdocs/newTask/vendor/phpmailer/phpmailer/src/OAuthTokenProvider.php';




function smtpMail($to, $subject, $txt)
{
    // echo "mail funtionWorking";
   $google_email = 'venkatesh.y@krify.com';
   $oauth2_clientId = '740595754539-g3dn8vtgk296scl430j9564k6dnvafkg.apps.googleusercontent.com';
   $oauth2_clientSecret = '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';
   $oauth2_refreshToken = '1//04ne2mIHeQmFcCgYIARAAGAQSNwF-L9IrvbcFYPEYLV8YmERVR5v1jqRHrZev0XYkPIp3Cl33JbgZj2lL0-MHSbG6ADGAZsJT1DU';

   $mail = new PHPMailer(TRUE);
   try {
       $mail->setFrom($google_email, 'venkatesh yellinki');
       if (is_array($to)) {
           if ($to != "") {
               foreach ($to as $to1) {
                   $mail->addAddress($to1);
               }
           }
       } else {
           $mail->addAddress($to);
       }
       $mail->Subject = $subject;
       $mail->Body = $txt;
       $mail->isSMTP();
       $mail->Port = 587;
       $mail->SMTPOptions = array(
           'ssl' => array(
               'verify_peer' => false,
               'verify_peer_name' => false,
               'allow_self_signed' => true
           )
       );
       $mail->SMTPAuth = TRUE;
       $mail->SMTPSecure = 'tls';
       $mail->IsHTML(true);
       /* Google's SMTP */
       $mail->Host = 'smtp.gmail.com';
       /* Set AuthType to XOAUTH2. */
       $mail->AuthType = 'XOAUTH2';
       /* Create a new OAuth2 provider instance. */
       $provider = new Google(
           [
               'clientId' => $oauth2_clientId,
               'clientSecret' => $oauth2_clientSecret,
           ]
       );

       /* Pass the OAuth provider instance to PHPMailer. */
       $mail->setOAuth(
           new OAuth(
               [
                   'provider' => $provider,
                   'clientId' => $oauth2_clientId,
                   'clientSecret' => $oauth2_clientSecret,
                   'refreshToken' => $oauth2_refreshToken,
                   'userName' => $google_email,
               ]
           )
       );
       /* Finally send the mail. */

       if ($mail->send()) {
           echo "Mail sent successfully";
           // exit;
           return 1;
       } else {
           echo "Mail not sent";
       }
   } catch (Exception $e) {
       echo $e->errorMessage();
   } catch (\Exception $e) {
       echo $e->getMessage();
   }
}

// if (isset($_POST['link'])) {
//     echo "woasdkans";
$to = "naveenkumar.n@krify.com";
$subject = "SMTP Practice";
$txt = "<a href = 'https://laravel.com/'>click here</a>";
smtpMail($to, $subject, $txt);

// $headers = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// echo $_SESSION["currentEmail"];
// // More headers
// $headers .= "From: no-reply@test.com" . "\r\n" .
//     "CC: suneel.s@krify.com";
// // $headers = "From: therissa.p@krify.com" . "\r\n"

// mail($to, $subject, $txt, $headers);
// session_unset();
// session_destroy();
// }

?>