import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Home</h2>
        <h3 style={{textAlign:"center", fontWeight:"800", fontSize:"32px"}}>Elegant uy mebellari</h3>
        <div style={{height:"1px" , width:"900px", backgroundColor:"orange", marginBottom:"50px" ,display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}></div>
        <div  style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <img style={{ borderRadius:"15px"}} src="http://localhost:5174/public/XXXL.webp" alt="" height={500} width={900}/>
          <p style={{textAlign:"center"}}>"Har bir buyum sizning uslubingiz va qulayligingiz timsoliga aylanadigan nafis mebel olamiga xush kelibsiz! Bizning kompaniyamiz uyingiz yoki ofisingizning barcha hududlari uchun detallarga mehr va funksionallikka e'tibor bilan yaratilgan keng turdagi mebellarni taklif etadi.

          Bizning assortimentimiz har qanday interyer g'oyalarini hayotga tatbiq etish imkonini beruvchi zamonaviy va klassik dizaynlarni o'z ichiga oladi. Biz har bir mahsulotning mustahkamligi va ishonchliligini ta'minlaydigan yuqori sifatli materiallardan tayyorlangan mebellarni taklif etamiz.

Shinam karavotlar va nafis ovqatlanish stollaridan tortib funksional shkaflar va zamonaviy aksessuarlargacha sizning didingiz va uyingizning shinamligini aks ettiruvchi makon yaratish uchun bizda hamma narsa mavjud.

Bizning maslahatchilarimiz sizning tanlovingiz va har bir xaridingiz yoqimli va qoniqarli tajriba bo'lishini ta'minlash uchun sizga maslahat berishda yordam berishga tayyor. Bizga qoʻshiling va uyingizni uslub va qulaylik bilan uygʻun joyga aylantiring!”</p>
<Link style={{border:"1px solid orange" , backgroundColor:"orange", borderRadius:"10px", padding:"10px"}} to="/contact">Buyurtma</Link>
        </div>
    </div>
  )
}

export default Home;