import React from "react";
import BlogCard from "./BlogCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Blog() {
  const blogs = [
    {
      title: "Besleyici Kahvaltı Tarifleri",
      description:
        "Kahvaltı, günün en önemli öğünüdür ve besleyici seçeneklerle güne enerjik başlamak mümkündür. Protein, lif ve sağlıklı yağlar içeren tarifler, uzun süre tokluk sağlar. İşte evde kolayca hazırlayabileceğiniz sağlıklı kahvaltı tarifleri.",
      image:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      article1:
        "Kahvaltı, metabolizmayı hızlandırarak güne enerji dolu başlamanızı sağlar. Yumurta, avokado ve tam buğday ekmeği gibi protein ve lif açısından zengin besinler, kan şekerinizi dengeleyerek uzun süre tokluk sağlar. Ayrıca, yoğurt ve yulaf karışımına eklenen taze meyveler, hem lezzetli hem de vitamin dolu bir seçenek sunar.",
      article2:
        "Yulaf ezmesi, sağlıklı bir kahvaltının vazgeçilmezidir. Süt veya bitkisel süt ile karıştırarak bir gece buzdolabında beklettiğiniz yulaf ezmesi, sabahları taze meyve ve bal eklenerek tüketilebilir. Bu tarif, hem pratik hem de besleyici bir alternatif sunar. ",
      article3:
        "Smoothieler de hızlı ve besleyici bir kahvaltı için mükemmel bir seçenektir. Ispanak, muz, yaban mersini ve badem sütü ile hazırlanan bir smoothie, güne enerji dolu başlamanızı sağlar.Protein tozu veya chia tohumu ekleyerek besin değerini daha da artırabilirsiniz.",
    },
    {
      title: "Akdeniz Diyeti ve Faydaları",
      description:
        "Akdeniz diyeti, sağlıklı yağlar, taze sebzeler ve tam tahıllarla zenginleştirilmiş bir beslenme şeklidir. Kalp sağlığını destekler ve kilo kontrolüne yardımcı olur. İşte Akdeniz diyetinin temel prensipleri ve örnek bir günlük menü.",
      image:
        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600",
      article1:
        "Vegan beslenme, et, süt ürünleri, yumurta ve diğer hayvansal ürünleri tüketmeden, tamamen bitkisel gıdalarla beslenmeyi içerir. Bu beslenme şekli, çevre dostu olması ve hayvan haklarını koruması açısından giderek popülerlik kazanmaktadır. Vegan beslenmede protein ihtiyacını karşılamak için baklagiller, tofu, tempeh ve çeşitli sebzeler tüketilmelidir.",
      article2:
        "Vegan beslenmede B12 vitamini eksikliği riski bulunmaktadır. Bu nedenle, B12 takviyesi almak veya B12 ile zenginleştirilmiş gıdaları tüketmek önemlidir. Ayrıca, demir, kalsiyum ve omega-3 yağ asitleri gibi diğer önemli besin maddelerini de dengeli bir şekilde almak gereklidir.",
      article3:
        "Kinoa salatası, humuslu sebzeler ve nohut köftesi gibi tarifler, hem lezzetli hem de besleyici vegan seçenekler sunar. Özellikle yeşil yapraklı sebzeler, baklagiller ve fındık, fıstık gibi kuruyemişler vegan beslenmenin önemli bileşenleridir. Bu tarifler, sağlıklı ve dengeli bir beslenme için mükemmel alternatiflerdir.",
    },
    {
      title: "Vegan Beslenmenin Püf Noktaları",
      description:
        "Vegan beslenme, hayvansal ürünleri içermeyen bir diyet şeklidir ve bitkisel gıdalarla zenginleştirilmiştir. Protein ve B12 vitamini alımına dikkat edilmelidir. İşte vegan beslenmenin temel prensipleri ve sağlıklı tarif önerileri.",
      image:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
      article1:
        "Akdeniz diyeti, taze sebzeler, meyveler, zeytinyağı, tam tahıllar ve deniz ürünleri gibi sağlıklı besinleri içerir. Bu beslenme şekli, kalp sağlığını korur ve kronik hastalıklara karşı koruma sağlar. Zeytinyağı, antioksidanlar ve sağlıklı yağlar bakımından zengindir, bu da inflamasyonu azaltmaya yardımcı olur.",
      article2:
        "Akdeniz diyetinde, kırmızı et tüketimi minimumda tutulur ve daha çok balık, tavuk ve bitkisel protein kaynakları tercih edilir. Haftada birkaç kez balık tüketmek, omega-3 yağ asitleri alımını artırarak kalp sağlığını destekler. Ayrıca, tam tahıllar ve baklagiller, lif ve protein kaynağı olarak önemli bir yer tutar.",
      article3:
        "Bir günlük Akdeniz diyeti menüsü, kahvaltıda tam buğday ekmeği üzerine avokado ve yumurta, öğle yemeğinde zeytinyağlı sebze salatası ve akşam yemeğinde ızgara balık ve kinoadan oluşabilir. Atıştırmalık olarak ise ceviz, badem gibi kuruyemişler ve taze meyveler tercih edilebilir.",
    },
  ];
  return (
    <section id="blog" >
      <h1 style={{ textAlign: "center" }}>Makaleler</h1>
      <div style={{ width: "38rem", margin: "auto" }}>
        <Slide>
          {blogs.map((blogs, index) => (
            <div className="each-slide-effect" key={index}>
              <BlogCard
                title={blogs.title}
                description={blogs.description}
                image={blogs.image}
                article1={blogs.article1}
                article2={blogs.article2}
                article3={blogs.article3}
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
