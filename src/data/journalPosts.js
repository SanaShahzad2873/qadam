// Add `image: yourImportedImage` to any post once you have a photo for it.
// To add your own: drop the file in src/assets/journal/, import it at the
// top of this file, then reference it here.

const posts = [
  {
    slug: 'khussa-ki-tareekh',
    title: 'Khussa Ki Tareekh',
    tag: 'History',
    excerpt: 'Mughal darbaron se lekar aaj ke fashion tak, khussa ka safar sadiyon purana hai.',
    image: null,
    content: [
      'Khussa ka safar koi naya nahi. Sadiyon pehle, Mughal darbaron mein, ye sirf juta nahi tha — ye martaba tha. Shahi karigar apne haathon se, mahino ki mehnat se, ek jorra tayyar karte thay, aur wo jorra kisi shehzade ya begum ke qadmon ki shaan banta tha.',
      'Waqt guzra. Darbaar badal gaye, sheher badal gaye, magar khussa nahi bhoola gaya. Har nasl ne ise apne andaz mein zinda rakha — kabhi shaadi ke jorray mein, kabhi Eid ki subah, kabhi kisi maa ke tohfe mein.',
      'Aaj jab hum Qadam mein khussa banate hain, to hum sirf ek purani cheez nahi dohra rahe — hum ek riwayat ko naye qadmon ke saath aage badha rahe hain.',
    ],
  },
  {
    slug: 'mughal-fashion-aur-uska-asar',
    title: 'Mughal Fashion Aur Uska Asar',
    tag: 'Fashion',
    excerpt: 'Shahi libaas ki jhalak jo aaj bhi Pakistani craft mein zinda hai.',
    image: null,
    content: [
      'Mughal daur ka fashion sirf kapdon tak mehdood nahi tha — ye ek pura fann tha. Zari, resham, moti, aur sona — har cheez ek kahani sunati thi. Rang bhi soch samajh kar chune jate thay: gehra maroon shaan ke liye, sunehra izzat ke liye, safed pakeezgi ke liye.',
      'Ye asar aaj bhi hamare craft mein nazar aata hai. Jab koi karigar khussa par zari ka kaam karta hai, wo dar asal usi purani riwayat ko dohra raha hota hai — bas naye zamane ke andaz mein.',
      'Qadam ke liye ye asar khaas ahmiyat rakhta hai. Hum chahte hain ke jab koi hamara khussa pehne, to wo sirf ek juta na ho — wo ek jhalak ho us shahi virsay ki jo humein warasat mein mila hai.',
    ],
  },
  {
    slug: 'pakistani-craft-ek-zinda-riwayat',
    title: 'Pakistani Craft: Ek Zinda Riwayat',
    tag: 'Craft',
    excerpt: 'Har sheher, har gali mein basi dastkari jo nasl dar nasl chali aa rahi hai.',
    image: null,
    content: [
      'Pakistan ke har sheher ki apni pehchan hai — Multan ki khussa, Sindh ki ajrak, Peshawar ki chappal. Ye sab sirf products nahi, ye sadiyon ki mehnat aur mahaarat ka nateeja hain, jo baap se beta, ustad se shagird tak pohanchti rahi hai.',
      'Ye dastakari kabhi kisi factory mein nahi seekhi jati. Ye ghar ke aangan mein, chhoti dukaanon mein, aur karigaron ki ungliyon mein basi hoti hai. Har haath ka apna andaz hota hai, aur isi liye har khussa mukhtalif hota hai — chahe design wahi ho.',
      'Hum mante hain ke ye riwayat abhi bhi zinda hai, aur zinda rehni chahiye. Isi liye Qadam apne karigaron ke kaam ko izzat deta hai — kyunke unki mahaarat hi hamari asal daulat hai.',
    ],
  },
  {
    slug: 'chamray-ki-fann-kari',
    title: 'Chamray Ki Fann-kari',
    tag: 'Leather Art',
    excerpt: 'Leather ko sanwarne ka fann, jo sabar aur mahaarat manga hai.',
    image: null,
    content: [
      'Achay chamray ki pehchan uski khushbu aur uske lams se hoti hai. Ye pehchan yun hi nahi aati — is ke peechay hafton ki tayyari, curing, aur sanwarne ka amal hota hai.',
      'Har khal apni fitrat rakhti hai. Kuch narm, kuch mazboot. Karigar ka kaam ye hota hai ke wo har khal ko samjhe, aur usay us tarah tayyar kare ke wo sirf khoobsurat na lage, balkeh saalon tak apni chamak bhi na khoye.',
      'Ye fann seekhne mein saal lag jate hain. Aur jab aap apne haath mein ek khussa uthate hain, to us mein yehi saalon ki mahaarat chupi hoti hai.',
    ],
  },
  {
    slug: 'shayari-aur-rooh',
    title: 'Shayari Aur Rooh',
    tag: 'Poetry',
    excerpt: 'Alfaaz jo har naqsh ke peechay chupi kahani sunatay hain.',
    image: null,
    content: [
      'Shayari aur dastkari mein ek gehra rishta hai. Dono hi jazbaat ko shakal dete hain — bas shayar alfaaz istemal karta hai, aur karigar sui aur dhaaga.',
      'Jab hum Qadam ke liye likhte hain, hum koshish karte hain ke har jumla wohi ehsaas jagaye jo ek achi shayari jagati hai — thehrav, mohabbat, aur apni jadon se juraav.',
      'Isi liye hamari har product page par sirf description nahi, balkeh chand satrein hoti hain — kyunke hum manate hain ke har khussa ke peechay ek kahani honi chahiye.',
    ],
  },
  {
    slug: 'riwayat-jo-zinda-hai',
    title: 'Riwayat Jo Zinda Hai',
    tag: 'Culture',
    excerpt: 'Culture sirf ateeq nahi, balkeh hamara aaj bhi hai.',
    image: null,
    content: [
      'Aksar log culture ko sirf ateeq (past) samajhte hain — jaise wo ek museum ki cheez ho. Magar haqeeqat mein, culture wo hai jo hum aaj bhi jeete hain: jo hum pehente hain, jo hum khate hain, jo hum manate hain.',
      'Khussa isi zinda culture ka hissa hai. Ye sirf tareekh ki kitab mein nahi — ye aaj bhi kisi ki shaadi mein, kisi ke Eid ke jorray mein, kisi ke pehle interview mein maujood hai.',
      'Qadam is riwayat ko modern duniya mein bhi zinda rakhna chahta hai — na ke usay ateeq bana kar chhupa den, balkeh usay naye andaz mein aage lekar chalen.',
    ],
  },
]

export default posts
