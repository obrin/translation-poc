import './styles.css'
import langEn from './locales/en.json'

const $title = document.getElementById('title');
const $description = document.getElementById('description');
const $message = document.getElementById('message');

$title.innerHTML = langEn.messages.title;
$description.innerHTML = langEn.messages.description;
$message.innerHTML = langEn.messages.message;
