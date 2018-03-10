<?php
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["text"]);

$myemail = "manul84@inbox.lv";


$name = check_input($_POST["name"], "Введите ваше имя!");
$email = check_input($_POST["email"], "Введите ваш e-mail!");
$message = check_input($_POST["message"], "Вы забыли написать сообщение!");
/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("<br /> Е-mail адрес не существует");
}

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $name 
E-mail: $email 
Текст сообщения: $message 
Конец";

/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
mail($myemail, $message, $message_to_myemail, $from);

echo "<p>Ваше сообщение было успешно отправлено!</p>";
header('Location: contacts.html');

/* Если при заполнении формы были допущены ошибки сработает
следующий код: */
function check_input($data, $problem = "")
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}
function show_error($myError)
{
    ?>
    <html>
    <body>
    <p>Пожалуйста исправьте следующую ошибку:</p>
    <?php echo $myError; ?>
    </body>
    </html>
    <?php
    exit();
}
?>
<!---->
<!---->
<!--if (isset($_POST['text'])) {-->
<!--    mail("manul84@inbox.lv",-->
<!--        "НЯШКА - сообщение через контактную форму",-->
<!--        "Внимание! Не отвечайте на данное письмо - оно отправлено автоматически через контактную форму на сайте!"-->
<!--        . "\n\nЧтобы связаться с автором сообщения, используйте указанный e-mail: " . $email-->
<!--        . "\n\nИмя: " . $name-->
<!--        . "\n\nE-mail: " . $email-->
<!--        . "\n\nТекст: " . $text;-->
<!--    echo('<p>Ваше сообщение получено, спасибо!</p>');-->
<!--    header('Location: contacts.html');-->
<!--}-->
<!---->