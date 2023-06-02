<template>
    <section class="max-w-[900px] my-72 md:my-60 sm:my-24" id="about-section">
        <div class="flex items-center ">
            <span class="text-xxl mr-[10px] sm:text-xl " id="about-span">01.</span>
            <h3 id="about-h3">Hakkımda</h3>
        </div>
        <div class="flex justify-between gap-8 md:gap-12 sm:gap-12 md:flex-col  sm:flex-col-reverse">
            <div class="space-y-4">
                <p id="about-p1">Merhaba! Benim adım Enis, <strong class="font-mono">2022 YKS derece öğrencisi</strong>
                    olarak girdiğim Yeditepe Üniversitesi Yönetim Bilişim
                    Sistemleri bölümünü okuyorum.</p>
                <p id="about-p2">Web geliştirmeye çok küçük yaşlarda front end tarafında başladım fakat kafamdaki temel soru
                    işaretleri
                    beni
                    back end tarafını da öğrenmeye yönlendirdi. Sonuç olarak fullstack projeler geliştirdim ve web'i daha
                    iyi
                    kavradım.</p>
                <p id="about-p3">Üniversitede bir öğrenci olmama rağmen çok fazla boş vaktim var ve son derece ilgili ve
                    hevesli olduğum
                    web
                    geliştirme alanında profesyonel bir ekip projesine katılmak, daha fazla öğrenerek kendimi geliştirmek
                    istiyorum.</p>
                <p id="about-p4">Şu anda rahatlıkla kullanabildiğim ve aşina olduğum teknolojiler temel olarak:</p>
                <ul class="grid grid-cols-2 sm:grid-cols-1 pb-4">
                    <li id="about-li1">JavaScript(ES6+)</li>
                    <li id="about-li6">TypeScript</li>
                    <li id="about-li3"><strong>Vue.js</strong></li>
                    <li id="about-li2"><strong>Node.js</strong></li>
                    <li id="about-li5">Nuxt.js</li>
                    <li id="about-li4">MongoDB</li>
                    <li id="about-li7">Tailwind</li>
                    <li id="about-li8">SASS/SCSS</li>
                    <li id="about-li8"><strong>AWS Serverless</strong></li>
                    <li id="about-li8">AWS SDK</li>
                </ul>
                <button class=" btn w-full text-center max-w-[400px] cursor-pointer" @click="clickDetailButton"
                    id="about-button">Hakkımda daha fazla detay</button>


            </div>
            <div class="relative max-w-[300px] max-h-[300px] rounded group flex flex-col transition-all duration-500"
                id="about-image">
                <img src="../assets/images/enis.jpg" alt="fotografim"
                    class="max-w-[300px] max-h-[300px] w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                <div
                    class=" absolute -top-[1.5%] -left-[1.5%] border border-green w-[103%] h-[103%] group-hover:hidden bg-[#1D4753] opacity-50 transition-all duration-500">
                </div>
            </div>
        </div>
        <div class="mt-12 p-8 bg-dark-navy rounded " :class="moreDetailMenu ? 'animate-open-menu' : 'hidden'">
            <h4 class="text-xl text-lightest-slate mt-8 mb-4">Öğrendiğim Tüm Teknolojiler</h4>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Temel:</strong> HTML, CSS, JavaScript, JQuery, Bootstrap <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Front end:</strong> Vue.js, Tailwind, SASS/SCSS, Vuex, Pinia, Vue Router, Nuxt.js <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Back end:</strong> Node.js, Express.js, Axios, Mongoose, AWS, AWS Serverless, AWS SDK <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Veritabanı:</strong> MongoDB, SQL, Firebase, DynomoDB <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Versiyon kontrol:</strong> Git, Github <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>Ayrıca oldukça ilgilendiğim ve yardımcı olabileceğim konular: </strong>
                Dijital pazarlama, Google reklamları, Facebook reklamları, Sosyal Medya Yönetimi, Arama Motoru
                Optimizasyonu, Shopify <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                <strong>İlgi Alanlarım:</strong>
                Web 3, Blockchain, Vücut Geliştirme, Biyoloji, Yüzme, Yapay Zeka, ChatGPT <br>
            </p>
            <p class="text-s w-full max-w-none mb-2">
                Kendini geliştirmeye açık ve yeni şeyler öğrenmeyi seven birisiyim. Günümüz teknolojisinde kullanılmasını
                birçok avantajı olan yapay zekayı kullanarak yeni teknolojileri kolayca öğrenebiliyorum ve iyi bir prompter
                olduğumu düşünüyorum.
            </p>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            moreDetailMenu: false
        }
    },
    mounted() {
        this.$sr.reveal('#about-span', { delay: 400, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-h3', { delay: 500, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-p1', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-p2', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-p3', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-p4', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li1', { delay: 700, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li2', { delay: 710, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li3', { delay: 720, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li4', { delay: 730, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li5', { delay: 740, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li6', { delay: 750, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li7', { delay: 760, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-li8', { delay: 770, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-button', { delay: 800, origin: "top", distance: "30px" });
        this.$sr.reveal('#about-section', { delay: 900, origin: "top", distance: "30px" });
    },
    methods: {
        clickDetailButton() {
            this.moreDetailMenu = !this.moreDetailMenu
        }
    }
}
</script>
