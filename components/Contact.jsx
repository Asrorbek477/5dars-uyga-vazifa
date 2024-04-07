import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Contact</h2>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
          <address>Manzil: Toshkent Shahri</address>
          <br />
          <a href="tel:+998 99 724 21 00">Telefon: +998 99 724 21 00</a>
          <a href="e-mail:@elegant.mebel_uz">Email:@elegant.mebel.ru</a>
          <p>Ish grafigi:
Dushanba - Juma: 9:00 - 21:00
Shanba: 10:00 - 18:00
Yakshanba dam olish kuni</p>
<p>Shuningdek, biz bilan ijtimoiy tarmoqlar orqali bog'lanishingiz mumkin:</p>
<a href="https://www.instagram.com/elegant.mebel_uz">Instagram: Elegant Mebel</a>
<a href="https://t.me/Elegant_mebel_uz">Telegram: Elegant Mebel</a>
        </div>
        
    </div>
  )
}

export default Contact;