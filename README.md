# 🛍️ MK Commerce | متجر إلكتروني عصري

<p align="center">
  <img src="https://img.shields.io/badge/MK-WEB%20SOLUTIONS-2563EB?style=for-the-badge" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  <b>تجربة تسوق إلكتروني عصرية تجمع بين التصميم الأنيق والأداء العملي.</b>
</p>

<p align="center">
  مشروع Frontend متكامل تم تطويره باستخدام أحدث تقنيات الويب، بهدف تقديم تجربة تسوق سهلة وسلسة للمستخدمين.
</p>

<p align="center">
  <a href="https://mk-ecommerc-site.netlify.app/">
    <img src="https://img.shields.io/badge/🚀_معاينة_المشروع-Live_Demo-2563EB?style=for-the-badge" />
  </a>
  <a href="https://www.youtube.com/@MKFrontendAcademy">
    <img src="https://img.shields.io/badge/▶_قناة_التعليم-MK_Frontend_Academy-FF0000?style=for-the-badge" />
  </a>
</p>

---

## 🌟 نبذة عن المشروع

**MK Commerce** هو مشروع متجر إلكتروني عصري تم تصميمه وتطويره بواسطة **MK Web Solutions**، لتقديم تجربة تسوق إلكتروني متكاملة من خلال واجهة مستخدم جذابة وسهلة الاستخدام.

يهدف المشروع إلى محاكاة تجربة المتاجر الإلكترونية الحقيقية، بداية من استعراض المنتجات والتصنيفات، مرورًا بصفحات تفاصيل المنتجات وإدارة سلة التسوق، وصولًا إلى لوحة تحكم خاصة بإدارة المنتجات.

تم الاهتمام بالتفاصيل البصرية وتجربة المستخدم، مع استخدام JavaScript للتعامل مع البيانات وواجهات API وتخزين بيانات سلة التسوق محليًا.

## ✨ مميزات المشروع

### 🛒 تجربة التسوق
- عرض المنتجات بطريقة منظمة وجذابة.
- استعراض المنتجات حسب التصنيفات.
- صفحة مستقلة لتفاصيل كل منتج.
- عرض صور المنتجات والتنقل بينها.
- إضافة المنتجات إلى سلة التسوق.
- زيادة وتقليل كمية المنتجات.
- حذف المنتجات من السلة.
- حساب إجمالي الأسعار تلقائيًا.

### 👨‍💻 لوحة تحكم الإدارة
- لوحة تحكم مخصصة لإدارة المنتجات.
- إضافة منتجات جديدة.
- تعديل بيانات المنتجات.
- حذف المنتجات.
- عرض المنتجات في جدول منظم.
- البحث عن المنتجات وتحديد طريقة البحث.

### ⚡ المميزات التقنية
- استخدام Fetch API للتعامل مع البيانات.
- تنفيذ عمليات CRUD.
- استخدام Local Storage لحفظ بيانات سلة التسوق.
- استخدام JavaScript ES6+.
- تنظيم الأكواد وإعادة استخدام العناصر.
- دعم اللغة العربية واتجاه RTL.
- تصميم متجاوب مع مختلف أحجام الشاشات.

## 🛠️ التقنيات والأدوات المستخدمة

| التقنية | الاستخدام |
|---|---|
| HTML5 | بناء هيكل صفحات الموقع |
| CSS3 | تنسيق العناصر |
| Tailwind CSS | تصميم الواجهات والاستجابة |
| JavaScript ES6+ | البرمجة والتعامل مع البيانات |
| jQuery | التعامل مع DOM والتفاعلات |
| Slick Slider | إنشاء عروض المنتجات |
| Font Awesome | الأيقونات |
| Fetch API | الاتصال بواجهات API |
| DummyJSON | توفير بيانات المنتجات |
| Local Storage | تخزين بيانات سلة التسوق |

## 📂 هيكل المشروع

```text
MK-Commerce/
│
├── index.html
├── main.js
├── package.json
├── tailwind.config.js
│
├── admin/
│   ├── admin.html
│   └── admin.js
│
├── cart/
│   └── cart.html
│
├── products/
│   └── productsinglepage.html
│
├── imgs/
│
├── css/
│
├── js/
│
└── README.md
```

## 🚀 تشغيل المشروع على جهازك

يمكنك تحميل المشروع وتشغيله محليًا باتباع الخطوات التالية:

**1. استنساخ المشروع**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. الدخول إلى مجلد المشروع**

```bash
cd MK-Commerce
```

**3. تثبيت المكتبات والاعتماديات**

```bash
npm install
```

**4. تشغيل المشروع**

افتح المشروع باستخدام Visual Studio Code، ثم شغّل ملف `index.html` باستخدام إضافة Live Server.

**ملاحظة:** تأكد من تشغيل أمر بناء Tailwind CSS الموجود في إعدادات المشروع حتى تظهر جميع التنسيقات بشكل صحيح.

## 🔌 واجهات API

يعتمد المشروع على DummyJSON لتوفير بيانات تجريبية للمنتجات والتدرب على التعامل مع واجهات API.

رابط واجهة المنتجات:

https://dummyjson.com/products

التوثيق الرسمي:

https://dummyjson.com/docs/products

**ملاحظة تقنية:** واجهة DummyJSON مخصصة للاختبار والتدريب؛ عمليات الإضافة والتعديل والحذف تحاكي التعامل مع Backend حقيقي، لكنها لا تحفظ التعديلات بشكل دائم على الخادم.

## 📸 صور من المشروع

<p align="center">
  <b>استكشف واجهات MK Commerce</b>
</p>

<!-- أضف صور المشروع داخل مجلد imgs/screenshots -->

| الصفحة الرئيسية | تفاصيل المنتج |
|---|---|
| أضف صورة الصفحة الرئيسية هنا | أضف صورة تفاصيل المنتج هنا |

| سلة التسوق | لوحة التحكم |
|---|---|
| أضف صورة سلة التسوق هنا | أضف صورة لوحة التحكم هنا |

## 🎓 هل تريد تعلم البرمجة وبناء مشاريع حقيقية؟

إذا كنت مهتمًا بتطوير الواجهات الأمامية (Frontend Development)، فندعوك لزيارة قناة **MK Frontend Academy** على YouTube.

القناة تقدم محتوى تعليميًا يساعدك على تعلم البرمجة من الأساسيات وحتى بناء مشاريع عملية.

### 📚 ماذا ستتعلم؟

- HTML & CSS
- CSS Advanced
- JavaScript & ES6+
- DOM Manipulation
- Bootstrap
- Tailwind CSS
- jQuery & jQuery Plugins
- التعامل مع APIs
- Fetch API
- CRUD Operations
- تطبيقات ومشاريع Frontend عملية

<p align="center">
  <a href="https://www.youtube.com/@MKFrontendAcademy">
    <img src="https://img.shields.io/badge/اشترك_في_القناة-MK_Frontend_Academy-FF0000?style=for-the-badge&logo=youtube&logoColor=white" />
  </a>
</p>

<p align="center">
  <b>لا تكتفِ بمشاهدة الدروس... ابدأ في بناء مشاريعك بنفسك! 🚀</b>
</p>

## 💙 تابع MK Web Solutions

نسعى دائمًا لتقديم محتوى تعليمي ومشاريع ويب عصرية، ونسعد بتواصلك ومتابعتك لنا عبر منصات التواصل الاجتماعي.

<p align="center">
  <a href="https://www.facebook.com/mkforwebsolutions">
    <img src="https://img.shields.io/badge/Facebook-MK_Web_Solutions-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/mohamedsaleh445/">
    <img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/mohamed-ahmed-saleh-2945ba237/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://www.tiktok.com/@mk_web_solutions">
    <img src="https://img.shields.io/badge/TikTok-Follow-000000?style=for-the-badge&logo=tiktok&logoColor=white" />
  </a>
  <a href="https://www.youtube.com/@MKFrontendAcademy">
    <img src="https://img.shields.io/badge/YouTube-Subscribe-FF0000?style=for-the-badge&logo=youtube&logoColor=white" />
  </a>
</p>

## ⭐ دعم المشروع

إذا أعجبك المشروع، يمكنك دعمنا من خلال:

- إعطاء المشروع نجمة ⭐ على GitHub.
- مشاركة المشروع مع أصدقائك والمطورين.
- الاشتراك في قناة MK Frontend Academy.
- مشاركة آرائك واقتراحاتك لتطوير المشروع.

دعمك يساعدنا على الاستمرار في تقديم مشاريع ومحتوى تعليمي أفضل.

---

<p align="center">
  <b>Developed with ❤️ by MK Web Solutions</b>
  <br/>
  <br/>
  <b>MK — Turning Ideas Into Digital Experiences.</b>
  <br/>
  <br/>
  <a href="https://www.youtube.com/@MKFrontendAcademy">
    <b>🚀 انضم إلى رحلتنا في عالم Frontend Development</b>
  </a>
</p>
