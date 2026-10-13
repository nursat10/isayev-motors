// Переводы: русский, казахский, английский
const TRANSLATIONS = {
  ru: {
    "deliveries.reel": "Видео доставки",
    "deliveries.reelSoon": "Скоро здесь появится видео выдачи автомобиля",
    "deliveries.openReel": "Смотреть в Instagram ↗",
    "page.title":
      "IsaevMotors — доставка авто из Кореи, Дубая, Китая, Японии и США",
    "page.description":
      "IsaevMotors — подбор и доставка автомобилей из Кореи, ОАЭ (Дубая), Китая, Японии и США в Казахстан и Россию. Проверка, покупка и оформление под ключ.",
    "nav.process": "Этапы работы",
    "nav.deliveries": "Доставки",
    "nav.about": "О компании",
    "nav.contact": "Контакты",
    "nav.request": "Оставить заявку",
    "language.label": "Язык сайта",
    "hero.eyebrow": "МЕЖДУНАРОДНАЯ ДОСТАВКА АВТО",
    "hero.title": "Автомобиль<br>из-за рубежа.<br><em>Под ключ.<\/em>",
    "hero.description":
      "Подбираем, проверяем, выкупаем и доставляем автомобили из Кореи, ОАЭ (Дубая), Китая, Японии и США в Казахстан и Россию. Согласовываем бюджет, маршрут и документы до покупки.",
    "action.estimate": "Рассчитать стоимость",
    "action.estimateShort": "Рассчитать",
    "hero.caption": "Ваш выбор.<br>Наше сопровождение.",
    "route.label": "Откуда привозим",
    "country.korea": "Корея",
    "country.dubaiChip": "ОАЭ · Дубай",
    "country.dubai": "ОАЭ (Дубай)",
    "country.china": "Китай",
    "country.japan": "Япония",
    "country.usa": "США",
    "country.kazakhstan": "Казахстан",
    "country.russia": "Россия",
    "route.destination": "Казахстан / Россия",
    "stat.selection": "Подбор",
    "stat.selectionText": "под ваш бюджет и требования",
    "stat.inspection": "Проверка",
    "stat.inspectionText": "до согласования покупки",
    "stat.shipping": "Доставка",
    "stat.shippingText": "с сопровождением документов",
    "stat.turnkey": "Под ключ",
    "stat.turnkeyText": "от заявки до передачи ключей",
    "services.eyebrow": "01 / НАШИ УСЛУГИ",
    "services.title": "Весь путь —<br>в одних руках.",
    "services.description":
      "От поиска подходящего автомобиля до доставки. Вы согласовываете решения, мы сопровождаем каждый этап.",
    "services.selection": "Подбор автомобиля",
    "services.selectionText":
      "Ищем модель по вашему бюджету, комплектации и пожеланиям. Сравниваем предложения продавцов и площадок в выбранной стране.",
    "services.inspection": "Проверка и покупка",
    "services.inspectionText":
      "Осмотр, история автомобиля и отчёт перед выкупом. Покупка после согласования с вами.",
    "services.delivery": "Доставка под ключ",
    "services.deliveryText":
      "Организация перевозки, таможенное оформление и документы. Маршрут и сроки согласовываем по заказу.",
    "process.eyebrow": "02 / ЭТАПЫ РАБОТЫ",
    "process.title": "От вашего запроса<br>до ваших ключей.",
    "process.description":
      "Процесс построен так, чтобы вы видели автомобиль и цену на каждом этапе — до того, как деньги уходят продавцу.",
    "process.request": "Заявка на подбор",
    "process.requestText":
      "Марка, модель, год, бюджет и комплектация — мы формируем критерии поиска.",
    "process.selection": "Подбор за рубежом",
    "process.selectionText":
      "Ищем варианты на площадках и у продавцов в Корее, ОАЭ, Китае, Японии или США. Согласовываем подходящий автомобиль.",
    "process.inspection": "Осмотр и выкуп",
    "process.inspectionText":
      "Независимая диагностика перед покупкой. Выкупаем только после вашего подтверждения.",
    "process.shipping": "Международная доставка",
    "process.shippingText":
      "Организуем морскую и/или наземную перевозку в зависимости от страны отправления. Маршрут и сроки согласовываем по заказу.",
    "process.handover": "Растаможка и выдача",
    "process.handoverText":
      "Сопровождаем таможенное оформление и подготовку документов. Передаём автомобиль в согласованном месте.",
    "deliveries.eyebrow": "03 / ИСТОРИИ ДОСТАВОК",
    "deliveries.title": "Завершённые<br>доставки.",
    "deliveries.description":
      "От выбора автомобиля за рубежом до передачи ключей владельцу. Истории доставок готовятся к публикации.",
    "deliveries.photo": "Фото выдачи",
    "deliveries.pending": "Материалы готовятся",
    "deliveries.story1": "ИСТОРИЯ / 01",
    "deliveries.story2": "ИСТОРИЯ / 02",
    "deliveries.story3": "ИСТОРИЯ / 03",
    "deliveries.storyTitle": "История доставки",
    "deliveries.origin": "Страна покупки",
    "deliveries.city": "Город выдачи",
    "deliveries.time": "Срок доставки",
    "deliveries.cost": "Итоговая стоимость",
    "about.tagline": "ПО ВСЕМУ МИРУ. С ЗАБОТОЙ.",
    "about.motto": "Работаем добросовестно<br>и прозрачно.",
    "about.eyebrow": "О КОМПАНИИ",
    "about.title": "Больше ясности.<br>Меньше хлопот.",
    "about.description":
      "Занимаемся подбором и доставкой автомобилей из Кореи, ОАЭ (Дубая), Китая, Японии и США в Казахстан и Россию. Помогаем пройти весь процесс: от выбора модели и страны покупки до оформления и передачи автомобиля.",
    "about.approach":
      "Понятные условия, согласование покупки и связь на каждом этапе — основа нашего подхода.",
    "why.title": "Почему выбирают IsaevMotors",
    "why.description":
      "Проверка автомобиля, понятные расходы и сопровождение на каждом этапе международной доставки.",
    "why.origins": "Пять направлений подбора",
    "why.originsText":
      "Сравниваем варианты в Корее, ОАЭ, Китае, Японии и США, чтобы найти автомобиль под ваш запрос.",
    "why.inspection": "Независимый осмотр до покупки",
    "why.inspectionText":
      "Технический эксперт проверяет автомобиль на месте и присылает отчёт до того, как деньги уходят продавцу.",
    "why.costs": "Прозрачный расчёт",
    "why.costsText":
      "Автомобиль, перевозка, оформление и услуги — согласовываем состав расходов до покупки.",
    "why.support": "Сопровождение на всём пути",
    "why.supportText":
      "Сопровождаем заказ от согласования автомобиля до перевозки, оформления и передачи ключей.",
    "faq.eyebrow": "ВОПРОСЫ И ОТВЕТЫ",
    "faq.title": "Перед тем,<br>как заказать.",
    "faq.description":
      "В форме ниже можно описать свой запрос и задать дополнительные вопросы.",
    "faq.originsQuestion": "Из каких стран можно привезти автомобиль?",
    "faq.originsAnswer":
      "Подбираем и доставляем автомобили из Южной Кореи, ОАЭ (Дубая), Китая, Японии и США. Страну покупки выбираем вместе с вами с учётом модели, бюджета и доступных предложений.",
    "faq.costQuestion": "Из чего складывается стоимость?",
    "faq.costAnswer":
      "Из цены автомобиля, проверки и выкупа, перевозки, таможенного оформления и согласованных услуг. Итоговый расчёт зависит от автомобиля, страны покупки, маршрута и места доставки.",
    "faq.inspectionQuestion": "Как проверяется автомобиль?",
    "faq.inspectionAnswer":
      "До покупки согласовываем осмотр и отчёт: состояние кузова, салона, агрегатов и доступная история. Решение о выкупе принимается после вашего подтверждения.",
    "faq.timeQuestion": "Сколько занимает доставка?",
    "faq.timeAnswer":
      "Срок зависит от маршрута, графика перевозчика и оформления документов. Его уточняем при расчёте конкретного заказа и согласовываем до покупки.",
    "faq.modelQuestion": "Можно заказать конкретную модель?",
    "faq.modelAnswer":
      "Да. Укажите марку, модель, желаемый год, комплектацию и бюджет.",
    "faq.requestQuestion": "Как отправить заявку?",
    "faq.requestAnswer":
      "Заполните форму ниже: сайт подготовит текст для WhatsApp. Проверьте его и нажмите «Отправить» в мессенджере.",
    "contact.eyebrow": "ОБСУДИМ ВАШ ЗАПРОС",
    "contact.title": "Ваш следующий<br>автомобиль<br>начинается здесь.",
    "contact.description":
      "Расскажите, какой автомобиль ищете. Учтём модель, бюджет, страну покупки и страну доставки.",
    phone: "Телефон",
    "contact.office": "Офис в Алматы",
    "contact.address": "мкр. Самал-2, 111, БЦ «Самал Тауэрс»",
    "contact.hoursLabel": "Часы работы",
    "contact.hours": "24/7",
    "form.title": "Начнём с консультации",
    "form.intro":
      "Оставьте имя и телефон. Пожелания к автомобилю можно добавить по желанию.",
    name: "Имя",
    "form.namePlaceholder": "Ваше имя",
    "form.phoneHint": "10 цифр после +7",
    "form.phoneTitle": "Введите 10 цифр после +7",
    "form.wishes": "Добавить пожелания",
    "form.optional": "необязательно",
    "form.carLabel": "Какой автомобиль интересует",
    "form.carPlaceholder": "Марка, модель или пожелания",
    "form.origin": "Откуда привезти",
    "form.originUndecided": "Пока не определился",
    "form.destination": "Куда доставить",
    "form.destinationUndecided": "Обсудим",
    budget: "Бюджет",
    "form.budgetPlaceholder": "Сумма и валюта, если определились",
    "form.submit": "Продолжить в WhatsApp ↗",
    "form.note":
      "Откроется WhatsApp с текстом заявки. Проверьте сообщение и нажмите «Отправить».",
    "form.nameError": "Введите ваше имя.",
    "form.phoneError": "Введите 10 цифр после +7. Например: 7778880096.",
    "form.ready":
      "Текст заявки готов. Проверьте и отправьте сообщение в WhatsApp. ",
    "form.openMessage": "Открыть сообщение в WhatsApp →",
    "message.greeting":
      "Здравствуйте, IsaevMotors! Хочу обсудить подбор и доставку автомобиля.",
    "message.car": "Автомобиль",
    "footer.copy": "IsaevMotors. Работаем добросовестно и прозрачно.",
    "a11y.home": "IsaevMotors — на главную",
    "a11y.brandImage": "IsaevMotors — работаем добросовестно и прозрачно",
    "a11y.navigation": "Основная навигация",
    "a11y.mobileNavigation": "Мобильная навигация",
    "menu.open": "Открыть меню",
    "menu.close": "Закрыть меню",
    "a11y.origins": "Страны и города отправления",
    "a11y.gallery": "Истории доставок — листайте влево и вправо",
    "a11y.handoverPhoto": "Фото автомобиля при передаче владельцу",
    "a11y.previous": "Предыдущая доставка",
    "a11y.next": "Следующая доставка",
    "a11y.logo": "Логотип IsaevMotors",
    "a11y.instagram": "Instagram isaev_motors_ — откроется в новой вкладке",
    "a11y.whatsapp": "Написать в WhatsApp",
    "a11y.actions": "Быстрые действия",
    "hero.brandCaption": "ISAEVMOTORS / ИМПОРТ АВТО",
  },
  kk: {
    "deliveries.reel": "Жеткізу видеосы",
    "deliveries.reelSoon": "Жақында автокөлікті тапсыру видеосы жарияланады",
    "deliveries.openReel": "Instagram-да көру ↗",
    "page.title":
      "IsaevMotors — Корея, Дубай, Қытай, Жапония және АҚШ-тан автокөлік жеткізу",
    "page.description":
      "IsaevMotors — Корея, БАӘ (Дубай), Қытай, Жапония және АҚШ-тан Қазақстан мен Ресейге автокөлік таңдау және жеткізу. Тексеру, сатып алу және рәсімдеудің толық қызметі.",
    "nav.process": "Жұмыс кезеңдері",
    "nav.deliveries": "Жеткізілген көліктер",
    "nav.about": "Біз туралы",
    "nav.contact": "Байланыс",
    "nav.request": "Өтінім қалдыру",
    "language.label": "Сайт тілі",
    "hero.eyebrow": "ШЕТЕЛДЕН АВТОКӨЛІК ЖЕТКІЗУ",
    "hero.title": "Шетелден<br>автокөлік.<br><em>Толық қызмет.<\/em>",
    "hero.description":
      "Корея, БАӘ (Дубай), Қытай, Жапония және АҚШ-тан Қазақстан мен Ресейге автокөліктерді таңдаймыз, тексереміз, сатып аламыз және жеткіземіз. Бюджетті, бағытты және құжаттарды сатып алуға дейін келісеміз.",
    "action.estimate": "Құнын есептеу",
    "action.estimateShort": "Есептеу",
    "hero.caption": "Таңдау — сізден.<br>Қолдау — бізден.",
    "route.label": "Қай елдерден жеткіземіз",
    "country.korea": "Корея",
    "country.dubaiChip": "БАӘ · Дубай",
    "country.dubai": "БАӘ (Дубай)",
    "country.china": "Қытай",
    "country.japan": "Жапония",
    "country.usa": "АҚШ",
    "country.kazakhstan": "Қазақстан",
    "country.russia": "Ресей",
    "route.destination": "Қазақстан / Ресей",
    "stat.selection": "Таңдау",
    "stat.selectionText": "бюджетіңіз бен талаптарыңызға сай",
    "stat.inspection": "Тексеру",
    "stat.inspectionText": "сатып алуды келіспес бұрын",
    "stat.shipping": "Жеткізу",
    "stat.shippingText": "құжаттарды рәсімдеумен бірге",
    "stat.turnkey": "Толық қызмет",
    "stat.turnkeyText": "өтінімнен кілт тапсыруға дейін",
    "services.eyebrow": "01 / ҚЫЗМЕТТЕРІМІЗ",
    "services.title": "Барлық кезең —<br>бір командада.",
    "services.description":
      "Сәйкес автокөлікті іздеуден бастап жеткізуге дейін. Шешімдерді сіз мақұлдайсыз, ал біз әр кезеңде қолдау көрсетеміз.",
    "services.selection": "Автокөлік таңдау",
    "services.selectionText":
      "Бюджетіңізге, жабдықталуына және қалауыңызға сай модель іздейміз. Таңдалған елдегі сатушылар мен сауда алаңдарының ұсыныстарын салыстырамыз.",
    "services.inspection": "Тексеру және сатып алу",
    "services.inspectionText":
      "Сатып алмас бұрын автокөлікті қарап, тарихын тексеріп, есеп ұсынамыз. Тек сізбен келіскеннен кейін сатып аламыз.",
    "services.delivery": "Жеткізудің толық қызметі",
    "services.deliveryText":
      "Тасымалдауды, кедендік рәсімдеуді және құжаттарды ұйымдастырамыз. Бағыт пен мерзімді әр тапсырыс бойынша келісеміз.",
    "process.eyebrow": "02 / ЖҰМЫС КЕЗЕҢДЕРІ",
    "process.title": "Өтінімнен бастап<br>кілт тапсыруға дейін.",
    "process.description":
      "Ақша сатушыға аударылғанға дейін әр кезеңде автокөлік пен оның құны туралы толық ақпарат аласыз.",
    "process.request": "Таңдауға өтінім",
    "process.requestText":
      "Марка, модель, жыл, бюджет және жабдықталуы бойынша іздеу талаптарын анықтаймыз.",
    "process.selection": "Шетелден таңдау",
    "process.selectionText":
      "Корея, БАӘ, Қытай, Жапония немесе АҚШ-тағы алаңдар мен сатушылардан нұсқалар іздейміз. Сәйкес автокөлікті сізбен келісеміз.",
    "process.inspection": "Тексеру және сатып алу",
    "process.inspectionText":
      "Сатып алмас бұрын тәуелсіз диагностика жүргізіледі. Тек сіз растағаннан кейін сатып аламыз.",
    "process.shipping": "Халықаралық жеткізу",
    "process.shippingText":
      "Жөнелту еліне қарай теңіз және/немесе құрлық арқылы тасымалдауды ұйымдастырамыз. Бағыт пен мерзімді тапсырыс бойынша келісеміз.",
    "process.handover": "Кеден және тапсыру",
    "process.handoverText":
      "Кедендік рәсімдеу мен құжаттарды дайындауға көмектесеміз. Автокөлікті келісілген жерде тапсырамыз.",
    "deliveries.eyebrow": "03 / ЖЕТКІЗУ ТАРИХЫ",
    "deliveries.title": "Жеткізілген<br>автокөліктер.",
    "deliveries.description":
      "Шетелден автокөлік таңдаудан иесіне кілт тапсыруға дейін. Жеткізу оқиғалары жариялауға дайындалуда.",
    "deliveries.photo": "Тапсыру сәтінің фотосы",
    "deliveries.pending": "Материалдар дайындалуда",
    "deliveries.story1": "ОҚИҒА / 01",
    "deliveries.story2": "ОҚИҒА / 02",
    "deliveries.story3": "ОҚИҒА / 03",
    "deliveries.storyTitle": "Жеткізу оқиғасы",
    "deliveries.origin": "Сатып алу елі",
    "deliveries.city": "Тапсыру қаласы",
    "deliveries.time": "Жеткізу мерзімі",
    "deliveries.cost": "Жалпы құны",
    "about.tagline": "ӘЛЕМ БОЙЫНША. ҚАМҚОРЛЫҚПЕН.",
    "about.motto": "Адал жұмыс.<br>Ашық шарттар.",
    "about.eyebrow": "БІЗ ТУРАЛЫ",
    "about.title": "Анық ақпарат.<br>Аз әурешілік.",
    "about.description":
      "Корея, БАӘ (Дубай), Қытай, Жапония және АҚШ-тан Қазақстан мен Ресейге автокөлік таңдау және жеткізумен айналысамыз. Модель мен сатып алу елін таңдаудан рәсімдеу мен автокөлікті тапсыруға дейін көмектесеміз.",
    "about.approach":
      "Түсінікті шарттар, сатып алуды келісу және әр кезеңдегі байланыс — жұмысымыздың негізі.",
    "why.title": "Неліктен IsaevMotors таңдайды",
    "why.description":
      "Автокөлікті тексеру, түсінікті шығындар және халықаралық жеткізудің әр кезеңінде қолдау.",
    "why.origins": "Бес елден таңдау",
    "why.originsText":
      "Сұранысыңызға сай автокөлікті табу үшін Корея, БАӘ, Қытай, Жапония және АҚШ-тағы нұсқаларды салыстырамыз.",
    "why.inspection": "Сатып алуға дейін тәуелсіз тексеру",
    "why.inspectionText":
      "Техникалық маман автокөлікті орнында тексеріп, ақша сатушыға аударылғанға дейін есеп жібереді.",
    "why.costs": "Ашық есеп",
    "why.costsText":
      "Автокөлік, тасымалдау, рәсімдеу және қызмет шығындарын сатып алуға дейін келісеміз.",
    "why.support": "Әр кезеңдегі қолдау",
    "why.supportText":
      "Автокөлікті келісуден тасымалдау, рәсімдеу және кілт тапсыруға дейін тапсырысты сүйемелдейміз.",
    "faq.eyebrow": "СҰРАҚТАР МЕН ЖАУАПТАР",
    "faq.title": "Тапсырыс бермес<br>бұрын.",
    "faq.description":
      "Төмендегі формада сұранысыңызды сипаттап, қосымша сұрақтар қоя аласыз.",
    "faq.originsQuestion": "Автокөлікті қай елдерден жеткізуге болады?",
    "faq.originsAnswer":
      "Оңтүстік Корея, БАӘ (Дубай), Қытай, Жапония және АҚШ-тан автокөліктерді таңдап, жеткіземіз. Сатып алу елін модель, бюджет және қолжетімді ұсыныстарға қарай сізбен бірге таңдаймыз.",
    "faq.costQuestion": "Құны қалай есептеледі?",
    "faq.costAnswer":
      "Құны автокөлік бағасынан, тексеру мен сатып алудан, тасымалдаудан, кедендік рәсімдеуден және келісілген қызметтерден тұрады. Соңғы есеп автокөлікке, сатып алу еліне, бағытқа және жеткізу орнына байланысты.",
    "faq.inspectionQuestion": "Автокөлік қалай тексеріледі?",
    "faq.inspectionAnswer":
      "Сатып алуға дейін тексеру мен есепті келісеміз: шанақ, салон, тораптар және қолжетімді тарихы қаралады. Сатып алу туралы шешім сіз растағаннан кейін қабылданады.",
    "faq.timeQuestion": "Жеткізу қанша уақыт алады?",
    "faq.timeAnswer":
      "Мерзім бағытқа, тасымалдаушы кестесіне және құжаттарды рәсімдеуге байланысты. Нақты тапсырысты есептеу кезінде анықтап, сатып алуға дейін келісеміз.",
    "faq.modelQuestion": "Нақты модельге тапсырыс беруге бола ма?",
    "faq.modelAnswer":
      "Иә. Маркасын, моделін, қалаған жылын, жабдықталуын және бюджетін көрсетіңіз.",
    "faq.requestQuestion": "Өтінімді қалай жіберуге болады?",
    "faq.requestAnswer":
      "Төмендегі форманы толтырыңыз: сайт WhatsApp үшін мәтін дайындайды. Оны тексеріп, мессенджерде «Жіберу» батырмасын басыңыз.",
    "contact.eyebrow": "СҰРАНЫСЫҢЫЗДЫ ТАЛҚЫЛАЙЫҚ",
    "contact.title": "Жаңа көлігіңізге<br>алғашқы қадам<br>осы жерден.",
    "contact.description":
      "Қандай автокөлік іздеп жүргеніңізді айтыңыз. Модель, бюджет, сатып алу және жеткізу елін ескереміз.",
    phone: "Телефон",
    "contact.office": "Алматыдағы кеңсе",
    "contact.address":
      "Самал-2 шағынауданы, 111, «Самал Тауэрс» бизнес орталығы",
    "contact.hoursLabel": "Жұмыс уақыты",
    "contact.hours": "24/7",
    "form.title": "Кеңес алудан бастайық",
    "form.intro":
      "Атыңыз бен телефон нөміріңізді қалдырыңыз. Қаласаңыз, автокөлікке қатысты тілектеріңізді қосыңыз.",
    name: "Аты",
    "form.namePlaceholder": "Атыңыз",
    "form.phoneHint": "+7-ден кейін 10 цифр",
    "form.phoneTitle": "+7-ден кейін 10 цифр енгізіңіз",
    "form.wishes": "Тілектерді қосу",
    "form.optional": "міндетті емес",
    "form.carLabel": "Қандай автокөлік қызықтырады",
    "form.carPlaceholder": "Марка, модель немесе тілектер",
    "form.origin": "Қай елден жеткізу",
    "form.originUndecided": "Әзірге таңдамадым",
    "form.destination": "Қай елге жеткізу",
    "form.destinationUndecided": "Талқылаймыз",
    budget: "Бюджет",
    "form.budgetPlaceholder": "Сома мен валюта, егер анық болса",
    "form.submit": "WhatsApp-та жалғастыру ↗",
    "form.note":
      "Өтінім мәтінімен WhatsApp ашылады. Хабарламаны тексеріп, «Жіберу» батырмасын басыңыз.",
    "form.nameError": "Атыңызды енгізіңіз.",
    "form.phoneError": "+7-ден кейін 10 цифр енгізіңіз. Мысалы: 7778880096.",
    "form.ready":
      "Өтінім мәтіні дайын. Хабарламаны тексеріп, WhatsApp-та жіберіңіз. ",
    "form.openMessage": "Хабарламаны WhatsApp-та ашу →",
    "message.greeting":
      "Сәлеметсіз бе, IsaevMotors! Автокөлік таңдау және жеткізу туралы кеңес алғым келеді.",
    "message.car": "Автокөлік",
    "footer.copy": "IsaevMotors. Адал жұмыс, ашық шарттар.",
    "a11y.home": "IsaevMotors — басты бетке",
    "a11y.brandImage": "IsaevMotors — адал әрі ашық жұмыс істейміз",
    "a11y.navigation": "Негізгі навигация",
    "a11y.mobileNavigation": "Мобильді навигация",
    "menu.open": "Мәзірді ашу",
    "menu.close": "Мәзірді жабу",
    "a11y.origins": "Жөнелту елдері мен қалалары",
    "a11y.gallery": "Жеткізу оқиғалары — оңға және солға сырғытыңыз",
    "a11y.handoverPhoto": "Автокөлікті иесіне тапсыру сәтіндегі фото",
    "a11y.previous": "Алдыңғы жеткізу",
    "a11y.next": "Келесі жеткізу",
    "a11y.logo": "IsaevMotors логотипі",
    "a11y.instagram": "Instagram isaev_motors_ — жаңа қойындыда ашылады",
    "a11y.whatsapp": "WhatsApp-қа жазу",
    "a11y.actions": "Жылдам әрекеттер",
    "hero.brandCaption": "ISAEVMOTORS / АВТОКӨЛІК ИМПОРТЫ",
  },
  en: {
    "deliveries.reel": "Delivery video",
    "deliveries.reelSoon": "A handover video is coming soon",
    "deliveries.openReel": "Watch on Instagram ↗",
    "page.title":
      "IsaevMotors — car imports from Korea, Dubai, China, Japan and the USA",
    "page.description":
      "IsaevMotors selects and delivers cars from Korea, the UAE (Dubai), China, Japan and the USA to Kazakhstan and Russia. Inspection, purchase, shipping and paperwork.",
    "nav.process": "How it works",
    "nav.deliveries": "Deliveries",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "nav.request": "Get in touch",
    "language.label": "Site language",
    "hero.eyebrow": "INTERNATIONAL CAR IMPORTS",
    "hero.title": "Your car.<br>From abroad.<br><em>Made simple.<\/em>",
    "hero.description":
      "We select, inspect, buy and deliver cars from Korea, the UAE (Dubai), China, Japan and the USA to Kazakhstan and Russia. We agree on the budget, route and paperwork before purchase.",
    "action.estimate": "Get an estimate",
    "action.estimateShort": "Estimate",
    "hero.caption": "Your choice.<br>Our support.",
    "route.label": "Where we source cars",
    "country.korea": "Korea",
    "country.dubaiChip": "UAE · Dubai",
    "country.dubai": "UAE (Dubai)",
    "country.china": "China",
    "country.japan": "Japan",
    "country.usa": "USA",
    "country.kazakhstan": "Kazakhstan",
    "country.russia": "Russia",
    "route.destination": "Kazakhstan / Russia",
    "stat.selection": "Selection",
    "stat.selectionText": "to fit your budget and needs",
    "stat.inspection": "Inspection",
    "stat.inspectionText": "before you approve the purchase",
    "stat.shipping": "Delivery",
    "stat.shippingText": "with paperwork support",
    "stat.turnkey": "End to end",
    "stat.turnkeyText": "from your enquiry to handover",
    "services.eyebrow": "01 / OUR SERVICES",
    "services.title": "One team.<br>Every step.",
    "services.description":
      "From finding the right car to delivery. You approve the decisions; we manage each step.",
    "services.selection": "Finding your car",
    "services.selectionText":
      "We search for a model that fits your budget, specification and preferences, comparing offers from sellers and platforms in your chosen country.",
    "services.inspection": "Inspection and purchase",
    "services.inspectionText":
      "Inspection, vehicle history and a report before purchase. We buy only after your approval.",
    "services.delivery": "Delivery and paperwork",
    "services.deliveryText":
      "Transport, customs clearance and documents. We agree on the route and timeline for each order.",
    "process.eyebrow": "02 / HOW IT WORKS",
    "process.title": "From your enquiry<br>to your keys.",
    "process.description":
      "Our process keeps you informed about the car and its cost at every step, before money goes to the seller.",
    "process.request": "Tell us what you need",
    "process.requestText":
      "Make, model, year, budget and specification — together we define the search criteria.",
    "process.selection": "Search abroad",
    "process.selectionText":
      "We search platforms and sellers in Korea, the UAE, China, Japan or the USA, then agree on the right car with you.",
    "process.inspection": "Inspect and buy",
    "process.inspectionText":
      "An independent inspection before purchase. We buy only after your confirmation.",
    "process.shipping": "International shipping",
    "process.shippingText":
      "We arrange sea and/or land transport depending on the country of origin. The route and timeline are agreed for your order.",
    "process.handover": "Clearance and handover",
    "process.handoverText":
      "We support customs clearance and document preparation, then hand over the car at the agreed location.",
    "deliveries.eyebrow": "03 / DELIVERY STORIES",
    "deliveries.title": "Completed<br>deliveries.",
    "deliveries.description":
      "From choosing a car abroad to handing the keys to its owner. Delivery stories are being prepared for publication.",
    "deliveries.photo": "Handover photo",
    "deliveries.pending": "Coming soon",
    "deliveries.story1": "STORY / 01",
    "deliveries.story2": "STORY / 02",
    "deliveries.story3": "STORY / 03",
    "deliveries.storyTitle": "Delivery story",
    "deliveries.origin": "Purchase country",
    "deliveries.city": "Handover city",
    "deliveries.time": "Delivery time",
    "deliveries.cost": "Total cost",
    "about.tagline": "WORLDWIDE. WITH CARE.",
    "about.motto": "Honest service.<br>Clear terms.",
    "about.eyebrow": "ABOUT US",
    "about.title": "More clarity.<br>Less hassle.",
    "about.description":
      "We select and deliver cars from Korea, the UAE (Dubai), China, Japan and the USA to Kazakhstan and Russia. We guide you from choosing the model and purchase country through paperwork and handover.",
    "about.approach":
      "Clear terms, purchase approval and communication at every step are the foundation of our approach.",
    "why.title": "Why choose IsaevMotors",
    "why.description":
      "Vehicle inspection, clear costs and support at every stage of international delivery.",
    "why.origins": "Five source countries",
    "why.originsText":
      "We compare options in Korea, the UAE, China, Japan and the USA to find a car that matches your needs.",
    "why.inspection": "Independent inspection",
    "why.inspectionText":
      "A technical expert inspects the car on site and sends a report before payment goes to the seller.",
    "why.costs": "Clear cost breakdown",
    "why.costsText":
      "Car, transport, paperwork and services — we agree on the cost breakdown before purchase.",
    "why.support": "Support all the way",
    "why.supportText":
      "We support your order from choosing the car through transport, paperwork and handing over the keys.",
    "faq.eyebrow": "QUESTIONS AND ANSWERS",
    "faq.title": "Before<br>you order.",
    "faq.description":
      "Use the form below to describe what you need and ask any further questions.",
    "faq.originsQuestion": "Which countries can you import a car from?",
    "faq.originsAnswer":
      "We source and deliver cars from South Korea, the UAE (Dubai), China, Japan and the USA. We choose the purchase country with you based on the model, budget and available offers.",
    "faq.costQuestion": "What makes up the total cost?",
    "faq.costAnswer":
      "The car price, inspection and purchase, transport, customs clearance and agreed services. The final estimate depends on the vehicle, purchase country, route and delivery location.",
    "faq.inspectionQuestion": "How is the car inspected?",
    "faq.inspectionAnswer":
      "Before purchase, we agree on an inspection and report covering the body, interior, mechanical components and available history. The purchase goes ahead only after your confirmation.",
    "faq.timeQuestion": "How long does delivery take?",
    "faq.timeAnswer":
      "The timeline depends on the route, carrier schedule and paperwork. We clarify it for your specific order and agree on it before purchase.",
    "faq.modelQuestion": "Can I order a specific model?",
    "faq.modelAnswer":
      "Yes. Tell us the make, model, preferred year, specification and budget.",
    "faq.requestQuestion": "How do I send an enquiry?",
    "faq.requestAnswer":
      "Fill in the form below. The site will prepare a WhatsApp message; review it and tap Send in the app.",
    "contact.eyebrow": "LET’S DISCUSS YOUR REQUEST",
    "contact.title": "Your next car<br>starts here.",
    "contact.description":
      "Tell us which car you are looking for. We will consider the model, budget, purchase country and delivery country.",
    phone: "Phone",
    "contact.office": "Almaty office",
    "contact.address": "111 Samal-2, Samal Towers Business Centre",
    "contact.hoursLabel": "Opening hours",
    "contact.hours": "24/7",
    "form.title": "Let’s start with a chat",
    "form.intro":
      "Leave your name and phone number. You can add your car preferences if you wish.",
    name: "Name",
    "form.namePlaceholder": "Your name",
    "form.phoneHint": "10 digits after +7",
    "form.phoneTitle": "Enter 10 digits after +7",
    "form.wishes": "Add preferences",
    "form.optional": "optional",
    "form.carLabel": "Which car interests you?",
    "form.carPlaceholder": "Make, model or preferences",
    "form.origin": "Source country",
    "form.originUndecided": "Not sure yet",
    "form.destination": "Delivery country",
    "form.destinationUndecided": "Let’s discuss",
    budget: "Budget",
    "form.budgetPlaceholder": "Amount and currency, if known",
    "form.submit": "Continue in WhatsApp ↗",
    "form.note":
      "WhatsApp will open with your enquiry. Review the message and tap Send.",
    "form.nameError": "Please enter your name.",
    "form.phoneError": "Enter 10 digits after +7. For example: 7778880096.",
    "form.ready":
      "Your enquiry is ready. Review and send the message in WhatsApp. ",
    "form.openMessage": "Open message in WhatsApp →",
    "message.greeting":
      "Hello, IsaevMotors! I would like to discuss sourcing and delivering a car.",
    "message.car": "Car",
    "footer.copy": "IsaevMotors. Honest service, clear terms.",
    "a11y.home": "IsaevMotors — home",
    "a11y.brandImage": "IsaevMotors — honest service, clear terms",
    "a11y.navigation": "Main navigation",
    "a11y.mobileNavigation": "Mobile navigation",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "a11y.origins": "Source countries and cities",
    "a11y.gallery": "Delivery stories — swipe left or right",
    "a11y.handoverPhoto": "Car photo at handover to the owner",
    "a11y.previous": "Previous delivery",
    "a11y.next": "Next delivery",
    "a11y.logo": "IsaevMotors logo",
    "a11y.instagram": "Instagram isaev_motors_ — opens in a new tab",
    "a11y.whatsapp": "Message us on WhatsApp",
    "a11y.actions": "Quick actions",
    "hero.brandCaption": "ISAEVMOTORS / AUTO IMPORT",
  },
};
// Переключение и сохранение языка
const LANGUAGE_STORAGE_KEY = "isaevmotors-language";
let currentLanguage = "ru";
function t(key) {
  return TRANSLATIONS[currentLanguage][key] ?? TRANSLATIONS.ru[key] ?? key;
}
function applyLanguage(language, persist = true) {
  if (!Object.prototype.hasOwnProperty.call(TRANSLATIONS, language))
    language = "ru";
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  // Only fixed, trusted translations containing line breaks or emphasis use HTML.
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  ["aria-label", "alt", "placeholder", "title", "content"].forEach(
    (attribute) => {
      document
        .querySelectorAll("[data-i18n-" + attribute + "]")
        .forEach((element) => {
          element.setAttribute(
            attribute,
            t(element.getAttribute("data-i18n-" + attribute)),
          );
        });
    },
  );
  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      ),
    );
  document.querySelectorAll(".language-select").forEach((select) => {
    select.value = language;
  });
  burger.setAttribute(
    "aria-label",
    t(
      burger.getAttribute("aria-expanded") === "true"
        ? "menu.close"
        : "menu.open",
    ),
  );
  if (nameInput.validity.customError)
    nameInput.setCustomValidity(t("form.nameError"));
  if (phoneInput.validity.customError)
    phoneInput.setCustomValidity(t("form.phoneError"));
  renderPreparedRequest();
  syncHeaderHeight();
  updateDeliveryControls();
  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (_) {
      /* Language switching also works without browser storage. */
    }
  }
}
function initializeLanguage() {
  let savedLanguage = "ru";
  try {
    savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "ru";
  } catch (_) {
    /* Use Russian by default. */
  }
  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        applyLanguage(button.dataset.language),
      ),
    );
  document
    .querySelectorAll(".language-select")
    .forEach((select) =>
      select.addEventListener("change", () => applyLanguage(select.value)),
    );
  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_STORAGE_KEY)
      applyLanguage(event.newValue || "ru", false);
  });
  applyLanguage(savedLanguage, false);
}

// Текущий год и управление мобильным меню
document.getElementById("year").textContent = new Date().getFullYear();
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("mobileMenu");
function closeMenu() {
  menu.classList.remove("open");
  menu.inert = true;
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", t("menu.open"));
  document.body.classList.remove("menu-open");
}
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
  menu.inert = !open;
  document.body.classList.toggle("menu-open", open);
  if (open) menu.querySelector("a").focus();
});
menu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (!menu.classList.contains("open")) return;
  if (event.key === "Escape") {
    closeMenu();
    burger.focus();
  }
  if (event.key === "Tab") {
    const targets = [
      ...document.querySelectorAll(
        ".header-actions button, .header-actions select",
      ),
      ...menu.querySelectorAll("a, button, select"),
    ].filter((element) => element.getClientRects().length && !element.disabled);
    const index = targets.indexOf(document.activeElement);
    const next = event.shiftKey
      ? index <= 0
        ? targets.length - 1
        : index - 1
      : (index + 1) % targets.length;
    event.preventDefault();
    targets[next].focus();
  }
});
const desktopLayout = window.matchMedia("(min-width: 1024px)");
desktopLayout.addEventListener("change", () => {
  if (desktopLayout.matches) closeMenu();
});

// Форма: проверка полей и подготовка сообщения WhatsApp
const COMPANY_WHATSAPP = "77778880096";
const form = document.getElementById("leadForm");
const status = document.getElementById("formSuccess");
const nameInput = form.elements.namedItem("fname");
const phoneInput = form.elements.namedItem("fphone");
function normalizePhoneDigits(value) {
  let digits = value.replace(/\D/g, "");
  if (/^[78]\d{10}$/.test(digits)) digits = digits.slice(1);
  return digits.slice(0, 10);
}
phoneInput.addEventListener("input", () => {
  phoneInput.value = normalizePhoneDigits(phoneInput.value);
  phoneInput.setCustomValidity("");
});
phoneInput.addEventListener("paste", (event) => {
  if (!event.clipboardData) return;
  event.preventDefault();
  const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
  const isFullNumber = /^[78]\d{10}$/.test(pasted);
  const start = phoneInput.selectionStart ?? phoneInput.value.length;
  const end = phoneInput.selectionEnd ?? start;
  const digits = isFullNumber
    ? pasted.slice(1)
    : phoneInput.value.slice(0, start) + pasted + phoneInput.value.slice(end);
  phoneInput.value = digits.slice(0, 10);
  phoneInput.setCustomValidity("");
  const caret = isFullNumber
    ? phoneInput.value.length
    : Math.min(start + pasted.length, 10);
  phoneInput.setSelectionRange(caret, caret);
});
phoneInput.addEventListener("invalid", () =>
  phoneInput.setCustomValidity(t("form.phoneError")),
);
nameInput.addEventListener("invalid", () =>
  nameInput.setCustomValidity(t("form.nameError")),
);
nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));
phoneInput.value = normalizePhoneDigits(phoneInput.value);
let preparedRequest = null;
const countryKeys = {
  "Южная Корея": "country.korea",
  "ОАЭ (Дубай)": "country.dubai",
  Китай: "country.china",
  Япония: "country.japan",
  США: "country.usa",
  Казахстан: "country.kazakhstan",
  Россия: "country.russia",
};
function buildWhatsAppUrl(request) {
  const lines = [
    t("message.greeting"),
    t("name") + ": " + request.name,
    t("phone") + ": " + request.phone,
  ];
  [
    ["message.car", "car"],
    ["form.origin", "origin"],
    ["form.destination", "country"],
    ["budget", "budget"],
  ].forEach(([key, field]) => {
    const value = request[field];
    if (value)
      lines.push(
        t(key) +
          ": " +
          ((field === "origin" || field === "country") && countryKeys[value]
            ? t(countryKeys[value])
            : value),
      );
  });
  return (
    "https://wa.me/" +
    COMPANY_WHATSAPP +
    "?text=" +
    encodeURIComponent(lines.join("\n"))
  );
}
function renderPreparedRequest() {
  if (!preparedRequest) return;
  const link = document.createElement("a");
  link.href = buildWhatsAppUrl(preparedRequest);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = t("form.openMessage");
  status.replaceChildren(t("form.ready"), link);
  status.classList.add("show");
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.setCustomValidity(t("form.nameError"));
    nameInput.reportValidity();
    return;
  }
  const phone = "+7" + phoneInput.value;
  if (!/^\+7\d{10}$/.test(phone)) {
    phoneInput.setCustomValidity(t("form.phoneError"));
    phoneInput.reportValidity();
    return;
  }
  preparedRequest = {
    name,
    phone,
    car: form.elements.namedItem("fcar").value.trim(),
    origin: form.elements.namedItem("origin").value,
    country: form.elements.namedItem("country").value,
    budget: form.elements.namedItem("budget").value.trim(),
  };
  renderPreparedRequest();
  window.open(
    buildWhatsAppUrl(preparedRequest),
    "_blank",
    "noopener,noreferrer",
  );
});

// Синхронизация высоты шапки
const siteHeader = document.querySelector("header");
function syncHeaderHeight() {
  document.documentElement.style.setProperty(
    "--header-height",
    Math.ceil(siteHeader.getBoundingClientRect().height) + "px",
  );
}
syncHeaderHeight();
if ("ResizeObserver" in window)
  new ResizeObserver(syncHeaderHeight).observe(siteHeader);
else window.addEventListener("resize", syncHeaderHeight);

// Галерея доставок: прокрутка и навигация
const gallery = document.getElementById("deliveryGallery");
const deliveryCards = [...gallery.querySelectorAll(".delivery-card")];
const previousDelivery = document.getElementById("deliveryPrev");
const nextDelivery = document.getElementById("deliveryNext");
const deliveryPosition = document.getElementById("deliveryPosition");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function activeDeliveryIndex() {
  const offsets = deliveryCards.map(
    (card) => card.offsetLeft - deliveryCards[0].offsetLeft,
  );
  return offsets.reduce(
    (best, offset, index) =>
      Math.abs(offset - gallery.scrollLeft) <
      Math.abs(offsets[best] - gallery.scrollLeft)
        ? index
        : best,
    0,
  );
}
function updateDeliveryControls() {
  const index = activeDeliveryIndex();
  const label = index + 1 + " / " + deliveryCards.length;
  if (deliveryPosition.textContent !== label)
    deliveryPosition.textContent = label;
  previousDelivery.disabled = index === 0;
  nextDelivery.disabled = index === deliveryCards.length - 1;
}
function showDelivery(direction) {
  const target = Math.max(
    0,
    Math.min(deliveryCards.length - 1, activeDeliveryIndex() + direction),
  );
  gallery.scrollTo({
    left: deliveryCards[target].offsetLeft - deliveryCards[0].offsetLeft,
    behavior: reducedMotion.matches ? "auto" : "smooth",
  });
}
previousDelivery.addEventListener("click", () => showDelivery(-1));
nextDelivery.addEventListener("click", () => showDelivery(1));
gallery.addEventListener("keydown", (event) => {
  if (gallery.scrollWidth <= gallery.clientWidth) return;
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    showDelivery(event.key === "ArrowRight" ? 1 : -1);
  }
});
let galleryFrame;
gallery.addEventListener(
  "scroll",
  () => {
    cancelAnimationFrame(galleryFrame);
    galleryFrame = requestAnimationFrame(updateDeliveryControls);
  },
  { passive: true },
);
window.addEventListener("resize", updateDeliveryControls);
updateDeliveryControls();

// Hide the bottom controls while filling in the form or using the on-screen keyboard.
// Видимость нижней панели действий
const mobileActions = document.getElementById("mobileActions");
let formInView = false;
function updateMobileActions() {
  const editing = /^(INPUT|TEXTAREA|SELECT)$/.test(
    document.activeElement.tagName,
  );
  const keyboardOpen =
    window.visualViewport &&
    window.visualViewport.height < window.innerHeight * 0.72;
  mobileActions.hidden = formInView || editing || keyboardOpen;
}
if ("IntersectionObserver" in window) {
  new IntersectionObserver(
    (entries) => {
      formInView = entries[0].isIntersecting;
      updateMobileActions();
    },
    { rootMargin: "0px 0px -82px 0px", threshold: 0.12 },
  ).observe(form);
}
document.addEventListener("focusin", updateMobileActions);
document.addEventListener("focusout", () =>
  requestAnimationFrame(updateMobileActions),
);
if (window.visualViewport)
  window.visualViewport.addEventListener("resize", updateMobileActions);
window.addEventListener("resize", updateMobileActions);
updateMobileActions();
// Запуск переключателя языка после инициализации элементов
initializeLanguage();
