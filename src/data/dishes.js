// Meal catalogue — full menu from Гастрономический Спектакль.
// Each dish has: id, category, name, ingredients, weight, price (if listed),
// description, options (for Горская кухня), poster, video.

const B = import.meta.env.BASE_URL
const poster = B + 'images/dish-frame.jpg'
const video = B + 'videos/dish.mp4'

const darginskijPoster = B + 'images/darginskij-hinkal.webp'
const avarskijPoster = B + 'images/avarskij-hinkal.webp'
const zhizhiPoster = B + 'images/zhizhi-galnash.webp'

const girosPoster = B + 'images/giros-poster.webp'
const burgerPoster = B + 'images/burger-poster.webp'
const sendvichPoster = B + 'images/sendvich-poster.webp'

const atlantidaPoster = B + 'images/atlantida-poster.webp'
const bobPoster = B + 'images/bob-poster.webp'
const brutalnyjPoster = B + 'images/brutalnyj-poster.webp'
const brutalnyjVideo = B + 'videos/brutalnyj.mp4'
const atlantidaVideo = B + 'videos/atlantida.mp4'
const bobVideo = B + 'videos/bob.mp4'
const buchoPoster = B + 'images/bucho-poster.webp'
const vdokhnoveniePoster = B + 'images/vdokhnovenie-poster.webp'
const vesennijPoster = B + 'images/vesennij-poster.webp'
const vinegretPoster = B + 'images/vinegret-poster.webp'
const vinegretGulliverPoster = B + 'images/vinegret-gulliver-poster.webp'
const vitaminnyjPoster = B + 'images/vitaminnyj-poster.webp'
const derevenskijPoster = B + 'images/derevenskij-poster.webp'
const kleopatraPoster = B + 'images/kleopatra-poster.webp'
const koulSloPoster = B + 'images/koul-slo-poster.webp'
const lesnojPoster = B + 'images/lesnoj-poster.webp'
const malahitPoster = B + 'images/malahit-poster.webp'
const morkovKorejskayaPoster = B + 'images/morkov-korejskaya-poster.webp'
const ovoshhnojSalatPoster = B + 'images/ovoshhnoj-salat-poster.webp'
const redkaKabardinskijPoster = B + 'images/redka-kabardinskij-poster.webp'
const svekolnyjPoster = B + 'images/svekolnyj-poster.webp'
const stolichnyjPoster = B + 'images/stolichnyj-poster.webp'
const tashkentPoster = B + 'images/tashkent-poster.webp'

// Супы
const borshchPoster = B + 'images/borshch-poster.webp'
const gorohovyjPoster = B + 'images/gorohovyj-poster.webp'
const lapshaGribnayaPoster = B + 'images/lapsha-gribnaya-poster.webp'
const solyankaMyasnayaPoster = B + 'images/solyanka-myasnaya-poster.webp'
const okroshkaPoster = B + 'images/okroshka-poster.webp'
const rassolnikPoster = B + 'images/rassolnik-poster.webp'
const svekolnikPoster = B + 'images/svekolnik-poster.webp'
const ukhaPoster = B + 'images/ukha-poster.webp'
const kharchoPoster = B + 'images/kharcho-poster.webp'
const shhiZelenyePoster = B + 'images/shhi-zelenye-poster.webp'
const shhiKvashennyePoster = B + 'images/shhi-kvashennye-poster.webp'

// Горячие блюда
const pelmeniPoster = B + 'images/pelmeni-poster.webp'
const makaronyFlotskiePoster = B + 'images/makarony-flotskie-poster.webp'
const ovoshhnoeRaguPoster = B + 'images/ovoshhnoe-ragu-poster.webp'
const odzhakhuriPoster = B + 'images/odzhakhuri-poster.webp'
const shnitselIndjejkaPoster = B + 'images/shnitsel-indjejka-poster.webp'
const chashushuliPoster = B + 'images/chashushuli-poster.webp'
const rybaMilanskiPoster = B + 'images/ryba-milanski-poster.webp'
const kazanKebabPoster = B + 'images/kazan-kebab-poster.webp'
const pastaTsyplyonokPoster = B + 'images/pasta-tsyplyonok-poster.webp'
const pastaMintajPoster = B + 'images/pasta-mintaj-poster.webp'
const kotletyPoster = B + 'images/kotlety-poster.webp'
const pastaBolonezePoster = B + 'images/pasta-boloneze-poster.webp'
const pastaKarbonaraPoster = B + 'images/pasta-karbonara-poster.webp'
const gulyashPoster = B + 'images/gulyash-poster.webp'
const mintajSmetanaPoster = B + 'images/mintaj-smetana-poster.webp'
const mintajTomatPoster = B + 'images/mintaj-tomat-poster.webp'
const kuricaZapechennayaPoster = B + 'images/kurica-zapechennaya-poster.webp'
const tefteliPoster = B + 'images/tefteli-poster.webp'
const myasoStroganovskiPoster = B + 'images/myaso-stroganovski-poster.webp'
const pastaKolbaskiPoster = B + 'images/pasta-kolbaski-poster.webp'
const krylyshkiMedPoster = B + 'images/krylyshki-med-poster.webp'
const gribnoeLukoshkoPoster = B + 'images/gribnoe-lukoshko-poster.webp'
const kartofelGribyPoster = B + 'images/kartofel-griby-poster.webp'
const mintajOvoshhiPoster = B + 'images/mintaj-ovoshhi-poster.webp'
const lenivyeGolubtsyPoster = B + 'images/lenivye-golubtsy-poster.webp'
const solyankaKapustaPoster = B + 'images/solyanka-kapusta-poster.webp'

// Десерты
const keksShokoladPoster = B + 'images/keks-shokolad-poster.webp'
const medovikPoster = B + 'images/medovik-poster.webp'

// Завтраки
const kashaOvsyankaPoster = B + 'images/kasha-ovsyanka-poster.webp'
const omletPoster = B + 'images/omlet-poster.webp'
const tvorochnayaZapekankaPoster = B + 'images/tvorochnaya-zapekanka-poster.webp'

// Новые салаты
const caesarPoster = B + 'images/caesar-poster.webp'

// Новые супы
const lapshaKurinayaPoster = B + 'images/lapsha-kurinaya-poster.webp'
const minestronePoster = B + 'images/minestrone-poster.webp'
const risovyjFrikadelkiPoster = B + 'images/risovyj-frikadelki-poster.webp'
const fasolevyjPoster = B + 'images/fasolevyj-poster.webp'
const chechevichnyjPoster = B + 'images/chechevichnyj-poster.webp'
const chuchvaraPoster = B + 'images/chuchvara-poster.webp'
const mastavaPoster = B + 'images/mastava-poster.webp'

// Новые горячие блюда
const myasoNePoFranczuzskiPoster = B + 'images/myaso-ne-po-franczuzski-poster.webp'
const zharkoePoster = B + 'images/zharkoe-poster.webp'
const mantyPoster = B + 'images/manty-poster.webp'
const myasnyeEzhikiPoster = B + 'images/myasnye-ezhiki-poster.webp'

// Новые завтраки
const kashaRisovayaPoster = B + 'images/kasha-risovaya-poster.webp'
const omletVetchinaPoster = B + 'images/omlet-vetchina-poster.webp'
const otvarnyeYajcaPoster = B + 'images/otvarnye-yajca-poster.webp'
const oladiPoster = B + 'images/oladi-poster.webp'
const syrnikiPoster = B + 'images/syrniki-poster.webp'

// Новые десерты/напитки
const keksKlassicheskijPoster = B + 'images/keks-klassicheskij-poster.webp'
const blinchikiPoster = B + 'images/blinchiki-poster.webp'
const napitokRozaPoster = B + 'images/napitok-roza-poster.webp'
const kompotPoster = B + 'images/kompot-poster.webp'

export const categories = [
  'Все',
  'Салаты',
  'Супы',
  'Горячие блюда',
  'Закуски',
  'Десерты',
  'Завтраки',
  'Горская кухня',
]

export const dishes = [
  // ─── Салаты ─────────────────────────────────────────────
  {
    id: 'atlantida',
    category: 'Салаты',
    name: 'Атлантида',
    ingredients: ['сельдь', 'запеченный картофель', 'консервированный зеленый горошек', 'красный лук', 'растительное масло', 'укроп'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: atlantidaPoster, video: atlantidaVideo,
  },
  {
    id: 'bob',
    category: 'Салаты',
    name: 'Боб',
    ingredients: ['морковь по-корейски', 'фасоль', 'кунжут', 'кунжутное масло', 'растительное масло'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: bobPoster, video: bobVideo,
  },
  {
    id: 'brutalnyj',
    category: 'Салаты',
    name: 'Брутальный',
    ingredients: ['копченые колбаски', 'запеченный картофель', 'зеленый горошек', 'соленые огурцы', 'красный лук', 'майонез'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: brutalnyjPoster, video: brutalnyjVideo,
  },
  {
    id: 'bucho',
    category: 'Салаты',
    name: 'Бучо',
    ingredients: ['морковь по-корейски', 'запеченная куриная грудка', 'красная фасоль', 'соленый огурец', 'майонез'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: buchoPoster, video,
  },
  {
    id: 'vdokhnovenie',
    category: 'Салаты',
    name: 'Вдохновение',
    ingredients: ['пекинская капуста', 'свежий огурец', 'куриное яйцо', 'кукуруза', 'майонез', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: vdokhnoveniePoster, video,
  },
  {
    id: 'vesennij',
    category: 'Салаты',
    name: 'Весенний',
    ingredients: ['редис', 'огурец', 'куриное яйцо', 'сметана', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: vesennijPoster, video,
  },
  {
    id: 'vinegret',
    category: 'Салаты',
    name: 'Винегрет',
    ingredients: ['запеченный картофель', 'свекла', 'квашеная капуста', 'соленые огурцы', 'запеченная морковь', 'растительное масло', 'консервированный зеленый горошек', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: vinegretPoster, video,
  },
  {
    id: 'vinegret-gulliver',
    category: 'Салаты',
    name: 'Винегрет Гулливер',
    ingredients: ['запеченный картофель', 'свекла', 'соленые огурцы', 'запеченная морковь', 'листья салата', 'растительное масло', 'соус из петрушки и консервированного горошка', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: vinegretGulliverPoster, video,
  },
  {
    id: 'vitaminnyj',
    category: 'Салаты',
    name: 'Витаминный',
    ingredients: ['белокочанная капуста', 'морковь', 'пассерованный лук', 'растительное масло', 'уксус', 'сахар', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: vitaminnyjPoster, video,
  },
  {
    id: 'derevenskij',
    category: 'Салаты',
    name: 'Деревенский',
    ingredients: ['квашеная капуста', 'запеченный картофель', 'зеленый горошек', 'масло нерафинированное ароматное', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: derevenskijPoster, video,
  },
  {
    id: 'kleopatra',
    category: 'Салаты',
    name: 'Клеопатра',
    ingredients: ['салат айсберг', 'копченое куриное филе', 'консервированный ананас', 'майонез', 'грецкий орех'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: kleopatraPoster, video,
  },
  {
    id: 'koul-slo',
    category: 'Салаты',
    name: 'Коул слоу',
    ingredients: ['белокочанная капуста', 'краснокочанная капуста', 'морковь', 'зеленое яблоко', 'зернистая горчица', 'лимонный сок', 'крем-бальзамик', 'мед', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: koulSloPoster, video,
  },
  {
    id: 'lesnoj',
    category: 'Салаты',
    name: 'Лесной',
    ingredients: ['квашеная капуста', 'запеченный картофель', 'жареные шампиньоны', 'зеленый горошек', 'растительное масло', 'ароматное нерафинированное масло', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: lesnojPoster, video,
  },
  {
    id: 'malahit',
    category: 'Салаты',
    name: 'Малахит',
    ingredients: ['белокочанная капуста', 'свежий огурец', 'укроп', 'растительное масло'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: malahitPoster, video,
  },
  {
    id: 'morkov-korejskaya-s-gribami',
    category: 'Салаты',
    name: 'Морковь по-корейски с грибами',
    ingredients: ['морковь по-корейски', 'шампиньоны', 'репчатый лук', 'растительное масло'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: morkovKorejskayaPoster, video,
  },
  {
    id: 'ovoshhnoj-salat',
    category: 'Салаты',
    name: 'Овощной салат',
    ingredients: ['огурцы', 'помидоры', 'красный лук', 'растительное масло', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: ovoshhnojSalatPoster, video,
  },
  {
    id: 'redka-kabardinskij',
    category: 'Салаты',
    name: 'Редька по-кабардински',
    ingredients: ['редька', 'репчатый лук', 'запеченный картофель', 'куриное яйцо', 'майонез'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: redkaKabardinskijPoster, video,
  },
  {
    id: 'svekolnyj-salat',
    category: 'Салаты',
    name: 'Свекольный салат',
    ingredients: ['свекла', 'майонез', 'чеснок', 'чернослив', 'грецкий орех'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: svekolnyjPoster, video,
  },
  {
    id: 'stolichnyj',
    category: 'Салаты',
    name: 'Столичный',
    ingredients: ['запеченный картофель', 'запеченное филе грудки курочки', 'запеченная морковь', 'соленые огурцы', 'яйцо куриное', 'майонез', 'горошек консервированный', 'зелень'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: stolichnyjPoster, video,
  },
  {
    id: 'tashkent',
    category: 'Салаты',
    name: 'Ташкент',
    ingredients: ['редька', 'мясо индейки', 'яйцо куриное', 'лук пассированный', 'паприка', 'майонез'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: tashkentPoster, video,
  },
  {
    id: 'caesar',
    category: 'Салаты',
    name: 'Цезарь',
    ingredients: ['салат айсберг', 'помидоры', 'мясо курицы', 'сыр твёрдый', 'соус Цезарь', 'гренки'],
    weight: '120 г',
    price: null,
    description: null,
    options: null,
    poster: caesarPoster, video,
  },

  // ─── Супы ─────────────────────────────────────────────
  {
    id: 'borshch',
    category: 'Супы',
    name: 'Борщ со сметаной',
    ingredients: ['бульон', 'капуста', 'картофель', 'лук', 'морковь', 'томатная паста', 'масло растительное', 'свекла', 'укроп', 'чеснок'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: borshchPoster, video,
  },
  {
    id: 'gorohovyj',
    category: 'Супы',
    name: 'Гороховый с копченостями',
    ingredients: ['бульон', 'горох', 'копченые колбаски', 'ветчина', 'лук', 'морковь', 'масло растительное', 'горчица', 'тимьян'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: gorohovyjPoster, video,
  },
  {
    id: 'lapsha-gribnaya',
    category: 'Супы',
    name: 'Лапша грибная',
    ingredients: ['картофель', 'шампиньоны', 'морковь', 'лук', 'лапша', 'тимьян', 'укроп', 'черный перец'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: lapshaGribnayaPoster, video,
  },
  {
    id: 'solyanka-myasnaya',
    category: 'Супы',
    name: 'Мясная солянка со сметаной',
    ingredients: ['бульон', 'мясо курицы', 'картофель', 'копченые колбаски', 'ветчина', 'огурцы соленые', 'лук', 'томатная паста', 'маслины б/к', 'оливки б/к', 'лимон'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: solyankaMyasnayaPoster, video,
  },
  {
    id: 'okroshka',
    category: 'Супы',
    name: 'Окрошка',
    ingredients: ['картофель', 'огурцы', 'зеленый лук', 'куриное яйцо', 'горчица', 'редис', 'кефир'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: okroshkaPoster, video,
  },
  {
    id: 'rassolnik',
    category: 'Супы',
    name: 'Рассольник',
    ingredients: ['бульон', 'картофель', 'мясо курицы', 'морковь', 'соленые огурцы', 'лук', 'перловка', 'томатная паста', 'укроп'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: rassolnikPoster, video,
  },
  {
    id: 'svekolnik',
    category: 'Супы',
    name: 'Свекольник',
    ingredients: ['свекла', 'редис', 'огурец', 'куриное яйцо', 'сметана'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: svekolnikPoster, video,
  },
  {
    id: 'ukha',
    category: 'Супы',
    name: 'Уха',
    ingredients: ['рыбный суповой набор', 'филе минтая', 'картофель', 'морковь', 'лук', 'рис', 'тимьян', 'укроп'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: ukhaPoster, video,
  },
  {
    id: 'kharcho',
    category: 'Супы',
    name: 'Харчо',
    ingredients: ['бульон', 'рис', 'мясо птицы', 'картофель', 'томатная паста', 'лук', 'морковь', 'хмели-сунели', 'растительное масло'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: kharchoPoster, video,
  },
  {
    id: 'shhi-zelenye',
    category: 'Супы',
    name: 'Щи зеленые с яйцом и сметаной',
    ingredients: ['бульон', 'мясо курицы', 'лук', 'морковь', 'чеснок', 'картофель', 'куриное яйцо', 'щавель', 'тимьян'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: shhiZelenyePoster, video,
  },
  {
    id: 'shhi-kvashennye',
    category: 'Супы',
    name: 'Щи с квашеной капустой',
    ingredients: ['бульон', 'квашеная капуста', 'картофель', 'мясо курицы', 'лук', 'морковь', 'томатная паста', 'растительное масло'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: shhiKvashennyePoster, video,
  },
  {
    id: 'lapsha-kurinaya',
    category: 'Супы',
    name: 'Лапша куриная',
    ingredients: ['бульон', 'лапша', 'мясо курицы', 'картофель', 'морковь', 'лук', 'тимьян', 'укроп'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: lapshaKurinayaPoster, video,
  },
  {
    id: 'minestrone',
    category: 'Супы',
    name: 'Минестроне',
    ingredients: ['бульон', 'помидор', 'перец болгарский', 'лук', 'чеснок', 'картофель', 'морковь', 'фасоль стручковая', 'тимьян'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: minestronePoster, video,
  },
  {
    id: 'risovyj-frikadelki',
    category: 'Супы',
    name: 'Рисовый с фрикадельками',
    ingredients: ['бульон', 'фарш из мяса птицы', 'рис', 'лук', 'морковь', 'картофель', 'тимьян'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: risovyjFrikadelkiPoster, video,
  },
  {
    id: 'fasolevyj',
    category: 'Супы',
    name: 'Фасолевый с курочкой',
    ingredients: ['фасоль', 'мясо курицы', 'картофель', 'лук', 'морковь', 'томат'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: fasolevyjPoster, video,
  },
  {
    id: 'chechevichnyj',
    category: 'Супы',
    name: 'Чечевичный суп',
    ingredients: ['бульон', 'картофель', 'чечевица', 'мясо курицы', 'лук', 'морковь', 'растительное масло', 'тимьян'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: chechevichnyjPoster, video,
  },
  {
    id: 'chuchvara',
    category: 'Супы',
    name: 'Чучвара',
    ingredients: ['бульон', 'картофель', 'лук', 'морковь', 'пельмени', 'томатная паста', 'тмин', 'кориандр'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: chuchvaraPoster, video,
  },
  {
    id: 'mastava',
    category: 'Супы',
    name: 'Мастава',
    ingredients: ['бульон', 'маш', 'овощи', 'мясо птицы', 'рис', 'томат'],
    weight: '400 мл',
    price: null,
    description: null,
    options: null,
    poster: mastavaPoster, video,
  },

  // ─── Горячие блюда ─────────────────────────────────────
  {
    id: 'pelmeni',
    category: 'Горячие блюда',
    name: 'Пельмени домашние',
    ingredients: ['тесто', 'фарш из мяса птицы', 'лук', 'зелень', 'сметана'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pelmeniPoster, video,
  },
  {
    id: 'makarony-flotskie',
    category: 'Горячие блюда',
    name: 'Макароны по-флотски',
    ingredients: ['макароны', 'фарш из индейки', 'репчатый лук', 'растительное масло', 'морковь', 'сванская соль'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: makaronyFlotskiePoster, video,
  },
  {
    id: 'ovoshhnoe-ragu',
    category: 'Горячие блюда',
    name: 'Овощное рагу с курицей',
    ingredients: ['куриные крылышки', 'куриная голень', 'картофель', 'репчатый лук', 'морковь', 'томаты в собственном соку', 'растительное масло', 'сванская соль', 'тимьян'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: ovoshhnoeRaguPoster, video,
  },
  {
    id: 'odzhakhури',
    category: 'Горячие блюда',
    name: 'Оджахури по-грузински',
    ingredients: ['мясо индейки', 'картофель', 'репчатый лук', 'зелень', 'растительное масло', 'красная фасоль', 'томаты в собственном соку', 'сванская соль', 'хмели-сунели', 'чеснок', 'кинза'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: odzhakhuriPoster, video,
  },
  {
    id: 'shnitsel-indjejka',
    category: 'Горячие блюда',
    name: 'Шницель из индейки',
    ingredients: ['филе индейки', 'яйцо', 'мука', 'сванская соль', 'соевый соус', 'перец', 'панировочные сухари', 'масло для фритюра'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: shnitselIndjejkaPoster, video,
  },
  {
    id: 'chashushuli',
    category: 'Горячие блюда',
    name: 'Чашушули с гарниром',
    ingredients: ['мясо индейки', 'томаты в собственном соку', 'репчатый лук', 'растительное масло', 'сванская соль', 'хмели-сунели'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: chashushuliPoster, video,
  },
  {
    id: 'ryba-milanski',
    category: 'Горячие блюда',
    name: 'Рыба по-милански',
    ingredients: ['филе минтая', 'яйцо', 'мука', 'соевый соус', 'перец', 'панировочные сухари', 'масло для фритюра'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: rybaMilanskiPoster, video,
  },
  {
    id: 'kazan-kebab',
    category: 'Горячие блюда',
    name: 'Казан-кебаб',
    ingredients: ['филе индейки', 'картофель', 'репчатый лук', 'растительное масло', 'зира', 'сванская соль', 'кинза'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: kazanKebabPoster, video,
  },
  {
    id: 'pasta-tsyplyonok',
    category: 'Горячие блюда',
    name: 'Паста с цыпленком',
    ingredients: ['спагетти', 'сыр сулугуни', 'сливки', 'куриная грудка', 'сванская соль', 'соевый соус', 'тимьян'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pastaTsyplyonokPoster, video,
  },
  {
    id: 'pasta-mintaj',
    category: 'Горячие блюда',
    name: 'Паста с филе минтая в сливочно-соевом соусе',
    ingredients: ['макароны', 'филе минтая', 'сливки', 'соевый соус', 'репчатый лук', 'растительное масло', 'сванская соль', 'перец'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pastaMintajPoster, video,
  },
  {
    id: 'kotlety',
    category: 'Горячие блюда',
    name: 'Котлеты',
    ingredients: ['мясо индейки', 'лук', 'хлеб', 'растительное масло', 'сванская соль', 'зелень'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: kotletyPoster, video,
  },
  {
    id: 'pasta-boloneze',
    category: 'Горячие блюда',
    name: 'Паста болоньезе',
    ingredients: ['спагетти', 'мясо индейки', 'чеснок', 'репчатый лук', 'морковь', 'растительное масло', 'томатная паста', 'томаты в собственном соку', 'твердый сыр', 'тимьян', 'сванская соль'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pastaBolonezePoster, video,
  },
  {
    id: 'pasta-karbonara',
    category: 'Горячие блюда',
    name: 'Паста карбонара',
    ingredients: ['спагетти', 'ветчина', 'сливки', 'чеснок', 'сыр', 'тимьян'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pastaKarbonaraPoster, video,
  },
  {
    id: 'gulyash',
    category: 'Горячие блюда',
    name: 'Гуляш',
    ingredients: ['мясо индейки', 'томатная паста', 'лук', 'морковь', 'сванская соль', 'растительное масло', 'чеснок'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: gulyashPoster, video,
  },
  {
    id: 'mintaj-smetana',
    category: 'Горячие блюда',
    name: 'Минтай в сметанно-морковном соусе',
    ingredients: ['тушка минтая', 'морковь', 'сметана', 'тмин', 'соль', 'перец', 'укроп', 'растительное масло', 'мука'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: mintajSmetanaPoster, video,
  },
  {
    id: 'mintaj-tomat',
    category: 'Горячие блюда',
    name: 'Минтай в томате',
    ingredients: ['тушка минтая', 'морковь', 'растительное масло', 'репчатый лук', 'томаты в собственном соку', 'сванская соль', 'мука'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: mintajTomatPoster, video,
  },
  {
    id: 'kurica-zapechennaya',
    category: 'Горячие блюда',
    name: 'Запеченная ножка курочки',
    ingredients: ['куриная ножка', 'растительное масло', 'сванская соль', 'перец'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: kuricaZapechennayaPoster, video,
  },
  {
    id: 'tefteli',
    category: 'Горячие блюда',
    name: 'Тефтели из индейки',
    ingredients: ['фарш из индейки', 'длиннозерновой рис', 'репчатый лук', 'томаты в собственном соку', 'сванская соль', 'растительное масло', 'сметана', 'тимьян'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: tefteliPoster, video,
  },
  {
    id: 'myaso-stroganovski',
    category: 'Горячие блюда',
    name: 'Мясо по-строгановски',
    ingredients: ['филе голени индейки', 'шампиньоны', 'лук', 'томаты в собственном соку', 'сливки', 'горчица', 'соевый соус', 'зелень', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: myasoStroganovskiPoster, video,
  },
  {
    id: 'pasta-kolbaski',
    category: 'Горячие блюда',
    name: 'Паста с копчеными колбасками в соусе Помодоро Пеперончи',
    ingredients: ['спагетти', 'копченый сулугуни', 'растительное масло', 'копченые колбаски', 'сванская соль', 'томаты в собственном соку', 'болгарский перец', 'тимьян', 'перец чили'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: pastaKolbaskiPoster, video,
  },
  {
    id: 'krylyshki-med',
    category: 'Горячие блюда',
    name: 'Крылышки в медово-горчичном соусе',
    ingredients: ['куриные крылышки', 'мед', 'горчица', 'кунжут', 'кунжутное масло', 'растительное масло', 'соевый соус'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: krylyshkiMedPoster, video,
  },
  {
    id: 'gribnoe-lukoshko',
    category: 'Горячие блюда',
    name: 'Грибное лукошко',
    ingredients: ['картофель', 'шампиньоны', 'сметана', 'тимьян', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: gribnoeLukoshkoPoster, video,
  },
  {
    id: 'kartofel-griby',
    category: 'Горячие блюда',
    name: 'Жареный картофель с грибами',
    ingredients: ['картофель', 'шампиньоны', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: kartofelGribyPoster, video,
  },
  {
    id: 'mintaj-ovoshhi',
    category: 'Горячие блюда',
    name: 'Запеченный минтай с овощами',
    ingredients: ['тушка минтая', 'морковь', 'картофель', 'помидор', 'майонез', 'тимьян'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: mintajOvoshhiPoster, video,
  },
  {
    id: 'lenivye-golubtsy',
    category: 'Горячие блюда',
    name: 'Ленивые голубцы',
    ingredients: ['рис', 'капуста', 'фарш из мяса птицы', 'томатная паста', 'морковь', 'лук', 'сванская соль', 'зелень'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: lenivyeGolubtsyPoster, video,
  },
  {
    id: 'solyanka-kapusta',
    category: 'Горячие блюда',
    name: 'Солянка из капусты с сосисками',
    ingredients: ['капуста', 'сосиски', 'морковь', 'лук', 'томатная паста', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: solyankaKapustaPoster, video,
  },
  {
    id: 'myaso-ne-po-franczuzski',
    category: 'Горячие блюда',
    name: 'Мясо не по-французски',
    ingredients: ['куриное филе', 'помидор', 'сыр', 'майонез', 'шампиньоны', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: myasoNePoFranczuzskiPoster, video,
  },
  {
    id: 'zharkoe',
    category: 'Горячие блюда',
    name: 'Жаркое по-домашнему',
    ingredients: ['картофель', 'мясо индейки', 'лук', 'растительное масло', 'зелень', 'сванская соль'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: zharkoePoster, video,
  },
  {
    id: 'manty',
    category: 'Горячие блюда',
    name: 'Манты праздничные',
    ingredients: ['тесто', 'фарш', 'лук', 'зелень', 'сметана'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: mantyPoster, video,
  },
  {
    id: 'myasnye-ezhiki',
    category: 'Горячие блюда',
    name: 'Мясные ёжики',
    ingredients: ['фарш из индейки', 'рис басмати', 'лук', 'томаты в собственном соку', 'сванская соль', 'растительное масло'],
    weight: '300 г',
    price: null,
    description: null,
    options: null,
    poster: myasnyeEzhikiPoster, video,
  },

  // ─── Закуски ─────────────────────────────────────────────
  {
    id: 'giros',
    category: 'Закуски',
    name: 'Гирос',
    ingredients: ['тонкий армянский лаваш', 'морковь по-корейски', 'мясо курицы', 'картофель фри', 'помидор', 'свежие огурцы', 'сметана', 'соевый соус', 'горчица', 'красный лук'],
    weight: '350 г',
    price: null,
    description: null,
    options: null,
    poster: girosPoster, video,
    softEdge: true,
  },
  {
    id: 'burger',
    category: 'Закуски',
    name: 'Бургер',
    ingredients: ['булочка для бургера', 'мясо индейки', 'помидор', 'маринованные огурцы', 'красный лук', 'чеснок', 'салат айсберг', 'сыр', 'майонез'],
    weight: '350 г',
    price: null,
    description: null,
    options: null,
    poster: burgerPoster, video,
    softEdge: true,
  },
  {
    id: 'sendvich',
    category: 'Закуски',
    name: 'Сэндвич',
    ingredients: ['чиабатта или тостовый хлеб', 'запеченная индейка или курица', 'руккола', 'свежий огурец', 'помидор', 'йогуртовый соус'],
    weight: '350 г',
    price: null,
    description: null,
    options: null,
    poster: sendvichPoster, video,
    softEdge: true,
  },

  // ─── Десерты ─────────────────────────────────────────────
  {
    id: 'keks-shokolad',
    category: 'Десерты',
    name: 'Кекс шоколадный',
    ingredients: ['яйцо', 'сливочное масло', 'сахар', 'мука', 'разрыхлитель', 'молоко', 'какао', 'сублимированные ягоды', 'сгущённое молоко'],
    weight: '100 г',
    price: null,
    description: null,
    options: null,
    poster: keksShokoladPoster, video,
  },
  {
    id: 'medovik',
    category: 'Десерты',
    name: 'Торт «Медовик»',
    ingredients: ['мед', 'яйцо', 'сахар', 'мука', 'сливочное масло', 'сметана'],
    weight: '200 г',
    price: null,
    description: null,
    options: null,
    poster: medovikPoster, video,
  },
  {
    id: 'keks-klassicheskij',
    category: 'Десерты',
    name: 'Кекс классический с грецкими орехами',
    ingredients: ['яйцо', 'сливочное масло', 'сахар', 'мука', 'разрыхлитель', 'молоко', 'грецкие орехи', 'сублимированные ягоды', 'сгущённое молоко'],
    weight: '100 г',
    price: 120,
    description: null,
    options: null,
    poster: keksKlassicheskijPoster, video,
  },
  {
    id: 'blinchiki',
    category: 'Десерты',
    name: 'Блинчики',
    ingredients: ['мука', 'молоко', 'куриное яйцо', 'сахар', 'растительное масло'],
    weight: '250 г',
    price: 250,
    description: null,
    options: [
      { label: 'С творогом и сгущённым молоком', price: 250 },
      { label: 'С творогом и абрикосовым джемом', price: 250 },
      { label: 'С творогом и клубничным джемом', price: 250 },
    ],
    poster: blinchikiPoster, video,
  },
  {
    id: 'napitok-roza',
    category: 'Десерты',
    name: 'Напиток из суданской розы',
    ingredients: ['вода', 'лепестки каркаде', 'сахар', 'лимонный сок'],
    weight: '300 мл',
    price: 40,
    description: null,
    options: null,
    poster: napitokRozaPoster, video,
  },
  {
    id: 'kompot',
    category: 'Десерты',
    name: 'Компот из сухофруктов',
    ingredients: ['вода', 'смесь сушёных яблок', 'абрикос', 'груша', 'слива'],
    weight: '300 мл',
    price: 40,
    description: null,
    options: null,
    poster: kompotPoster, video,
  },

  // ─── Завтраки ─────────────────────────────────────────────
  {
    id: 'kasha-ovsyanka',
    category: 'Завтраки',
    name: 'Каша овсяная',
    ingredients: ['молоко', 'овсяные хлопья', 'сгущённое молоко', 'сахар', 'ванилин'],
    weight: '400 г',
    price: null,
    description: null,
    options: null,
    poster: kashaOvsyankaPoster, video,
  },
  {
    id: 'omlet',
    category: 'Завтраки',
    name: 'Омлет с томатами',
    ingredients: ['куриное яйцо', 'молоко', 'томаты', 'специи'],
    weight: '250 г',
    price: null,
    description: null,
    options: null,
    poster: omletPoster, video,
  },
  {
    id: 'tvorochnaya-zapekanka',
    category: 'Завтраки',
    name: 'Творожная запеканка',
    ingredients: ['творог', 'яйцо', 'манная крупа', 'сахар', 'сметана', 'ванилин'],
    weight: '200 г',
    price: null,
    description: null,
    options: null,
    poster: tvorochnayaZapekankaPoster, video,
  },
  {
    id: 'kasha-risovaya',
    category: 'Завтраки',
    name: 'Каша рисовая',
    ingredients: ['молоко', 'рисовая крупа', 'сгущённое молоко', 'сахар', 'ванилин'],
    weight: '400 г',
    price: 200,
    description: null,
    options: null,
    poster: kashaRisovayaPoster, video,
  },
  {
    id: 'omlet-vetchina',
    category: 'Завтраки',
    name: 'Омлет с ветчиной и сыром',
    ingredients: ['куриное яйцо', 'молоко', 'ветчина из говядины', 'сыр', 'специи'],
    weight: '250 г',
    price: 200,
    description: null,
    options: null,
    poster: omletVetchinaPoster, video,
  },
  {
    id: 'otvarnye-yajca',
    category: 'Завтраки',
    name: 'Отварные яйца с сосиской',
    ingredients: ['куриное яйцо', 'сосиска'],
    weight: '250 г',
    price: 200,
    description: null,
    options: null,
    poster: otvarnyeYajcaPoster, video,
  },
  {
    id: 'oladi',
    category: 'Завтраки',
    name: 'Оладьи с топпингом',
    ingredients: ['куриное яйцо', 'мука', 'кефир', 'сода', 'сахар'],
    weight: '250 г',
    price: 200,
    description: 'Топпинги: мёд, сгущённое молоко, абрикосовый джем, клубничный джем, смородиновый джем, малиновый джем',
    options: null,
    poster: oladiPoster, video,
  },
  {
    id: 'syrniki',
    category: 'Завтраки',
    name: 'Сырники с топпингом',
    ingredients: ['творог', 'ванилин', 'гречневая мука', 'куриное яйцо', 'мука', 'сахар'],
    weight: '200 г',
    price: 200,
    description: 'Топпинги: мёд, сгущённое молоко, абрикосовый джем, клубничный джем, смородиновый джем, малиновый джем',
    options: null,
    poster: syrnikiPoster, video,
  },

  // ─── Горская кухня ─────────────────────────────────────
  {
    id: 'darginskij-hinkal',
    category: 'Горская кухня',
    name: 'Даргинский хинкал',
    ingredients: ['тесто', 'мясо', 'бульон', 'красный соус', 'белый соус'],
    weight: '700–750 г',
    price: null,
    description: 'Подается с бульоном 450 мл, мясом и тестом 300 г, красным соусом, белым соусом',
    options: [
      { label: 'С сушёной колбасой', price: 600 },
      { label: 'С сушёной говядиной', price: 600 },
      { label: 'С говядиной', price: 500 },
      { label: 'С бараниной', price: 600 },
      { label: 'С курицей', price: 400 },
    ],
    poster: darginskijPoster, video,
  },
  {
    id: 'avarskij-hinkal',
    category: 'Горская кухня',
    name: 'Аварский хинкал',
    ingredients: ['тесто', 'мясо', 'бульон', 'красный соус', 'белый соус'],
    weight: '700–750 г',
    price: null,
    description: 'Подается с бульоном 450 мл, мясом и тестом 300 г, красным соусом, белым соусом',
    options: [
      { label: 'С сушёной колбасой', price: 600 },
      { label: 'С сушёной говядиной', price: 600 },
      { label: 'С говядиной', price: 500 },
      { label: 'С бараниной', price: 600 },
      { label: 'С курицей', price: 400 },
    ],
    poster: avarskijPoster, video,
  },
  {
    id: 'zhizhi-galnash',
    category: 'Горская кухня',
    name: 'Жижи-галнаш',
    ingredients: ['тесто', 'мясо', 'бульон', 'красный соус', 'белый соус'],
    weight: '700–750 г',
    price: null,
    description: 'Подается с бульоном 450 мл, мясом и тестом 300 г, красным соусом, белым соусом',
    options: [
      { label: 'С сушёной колбасой', price: 600 },
      { label: 'С сушёной говядиной', price: 600 },
      { label: 'С говядиной', price: 500 },
      { label: 'С бараниной', price: 600 },
      { label: 'С курицей', price: 400 },
    ],
    poster: zhizhiPoster, video,
  },
]
