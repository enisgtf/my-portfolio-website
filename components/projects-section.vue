<template>
    <section class="max-w-[900px] mt-72 md:mt-60 sm:mt-24" id="projects-section">
        <div class="flex items-center ">
            <span class="text-xxl mr-[10px] sm:text-xl" id="projects-span">02.</span>
            <h3 id="projects-h3">Projelerim</h3>
        </div>
        <!-- 1 -->
        <div class="flex relative mb-24" id="projects-1">
            <div class=" rounded group ">
                <img src="../assets/images/blogapp.png" alt="blogapp"
                    class="max-w-[540px] h-[340px] w-full sm:h-[365px] grayscale-[30%] group-hover:grayscale-0 rounded transition-all duration-300 brightness-[25%]  md:brightness-[10%] sm:brightness-[10%] group-hover:brightness-100 md:group-hover:brightness-[10%] sm:group-hover:brightness-[10%]" />
                <a href="https://enisgtf-mevnstack-blogapp.netlify.app/" target="_blank"
                    class="max-w-[540px] h-[340px] w-full sm:h-[365px] border-green border brightness-75 absolute top-0 cursor-pointer bg-[#1D4753] opacity-30"></a>
            </div>
            <div
                class="flex flex-col text-right justify-center absolute right-0 top-4 md:top-6 sm:text-left md:text-left sm:left-8 md:left-8 max-w-[400px] sm:pr-8 md:pr-8">
                <span class="mb-0">Öne Çıkan Proje</span>
                <a class="font-semibold text-xxxl sm:text-xxl text-lightest-slate mb-6 sm:mb-3 md:mb-3">BlogApp</a>
                <div
                    class="bg-light-navy rounded  max-w-[400px] p-4 w-full shadow-sm mb-4 md:bg-opacity-0 sm:bg-opacity-0 sm:p-0 md:p-0 ">
                    <p class="text-m sm:text-xs">Kullanıcıların kayıt olup kendi bloglarını yazabildiği, en çok tıklananlar,
                        bloglara
                        like-dislike ve yorum etkileşiminine sahip, her şeyin reaktif çalıştığı fullstack, responsive
                        blog uygulamam.</p>
                </div>
                <ul
                    class="flex justify-end md:justify-start sm:justify-start flex-wrap  gap-3 list-none text-light-slate mb-2 md:pl-0 sm:pl-0 sm:text-xs">
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                </ul>
                <div class="flex gap-4 text-light-slate justify-end sm:justify-start md:justify-start ">
                    <a target="_blank" href="https://github.com/enisgtf/blogapp-frontend-mevnstack">
                        <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                    </a>
                    <a target="_blank" href="https://enisgtf-mevnstack-blogapp.netlify.app/">
                        <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                    </a>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="flex justify-end md:justify-start sm:justify-start  relative mb-24" id="projects-2">
            <div
                class="flex flex-col text-left justify-center absolute left-0 top-4 md:top-6 sm:text-left md:text-left sm:right-8 md:right-8 max-w-[400px] sm:pl-8 md:pl-8 z-[1]">
                <a class="font-semibold text-xxxl sm:text-xxl text-lightest-slate mb-6 sm:mb-3 md:mb-3">TodoApp</a>
                <div
                    class="bg-light-navy rounded  max-w-[400px] p-4 w-full shadow-sm mb-4 md:bg-opacity-0 sm:bg-opacity-0 sm:p-0 md:p-0 ">
                    <p class="text-m sm:text-xs">Kullanıcıların kayıt olup kendi listesini yapabildiği,
                        todoları 'tamamlandı' şekline dönüştürebildiği, her şeyin reaktif çalıştığı fullstack,
                        basit diyebileceğim ilk yazdığım fullstack responsive uygulamam.</p>
                </div>
                <ul
                    class="flex  md:justify-start sm:justify-start flex-wrap  gap-3 list-none text-light-slate mb-2 pl-0 sm:text-xs">
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                </ul>
                <div class="flex gap-4 text-light-slate  sm:justify-start md:justify-start ">
                    <a href="https://github.com/enisgtf/Fullstack-TodoApp" target="_blank">
                        <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                    </a>
                    <a target="_blank" href="https://enisgtf-mevnstack-todoapp.netlify.app/">
                        <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                    </a>
                </div>
            </div>
            <div class=" rounded group ">
                <img src="../assets/images/todoapp.png" alt="fotografim"
                    class="max-w-[540px] h-[340px] w-full sm:h-[360px] grayscale-[30%] group-hover:grayscale-0 rounded transition-all duration-300 brightness-[25%]  md:brightness-[10%] sm:brightness-[10%] group-hover:brightness-100 md:group-hover:brightness-[10%] sm:group-hover:brightness-[10%]" />
                <a href="https://enisgtf-mevnstack-todoapp.netlify.app/" target="_blank"
                    class="max-w-[540px] h-[340px] w-full sm:h-[360px] border-green border brightness-75 absolute top-0 cursor-pointer bg-[#1D4753] opacity-30 "></a>
            </div>
        </div>

    </section>

    <section class="max-w-[900px] mb-72 md:mb-60 sm:mb-24" id="projects-diger">
        <div class="flex flex-col items-center md:items-start sm:items-start ">
            <h4 class="text-xxxl sm:text-l text-lightest-slate font-semibold">Diğer Projelerim</h4>
            <span>
                <a href="https://github.com/enisgtf/" target="_blank"
                    class="relative before:h-[2px] before:bg-lightest-slate before:absolute before:-bottom-[2px] before:w-0 before:left-0 before:transition-[width] before:duration-300 before:hover:w-full ">
                    github profilimi incele
                </a>
            </span>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
            <!-- 1 -->
            <div
                class="group w-f h-[350px] max-w-[540px] sm:h-[300px] bg-light-navy shadow-xl px-7 py-8 relative rounded transition duration-500 hover:-translate-y-5 md:hover:translate-y-0 sm:hover:translate-y-0 md:hover:translate-x-5 sm:hover:translate-x-5">
                <div class="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#64ffda"
                            d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z" />
                    </svg>

                    <div class="flex gap-3">
                        <a target="_blank" href="https://github.com/enisgtf/QuizApp">
                            <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                        <a target="_blank" href="https://enisgtf-quizapp.netlify.app/">
                            <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                    </div>
                </div>
                <a
                    class="font-semibold text-xxl text-lightest-slate group-hover:text-green transition-colors duration-500">QuizApp</a>
                <p class="text-m sm:text-xs text-light-slate  my-2">Vue.js'i öğrenme aşamasında yaptığım temel öğrenme
                    projelerimden birisi.
                </p>
                <ul class="flex flex-wrap gap-2 list-none text-slate text-xxs absolute bottom-8 px-0 ">
                    <li>Vue.js</li>
                    <li>Pinia</li>
                    <li>Router</li>
                </ul>
            </div>
            <div
                class="group w-f h-[350px] max-w-[540px] sm:h-[300px] bg-light-navy shadow-xl px-7 py-8 relative rounded transition duration-500 hover:-translate-y-5 md:hover:translate-y-0 sm:hover:translate-y-0 md:hover:translate-x-5 sm:hover:translate-x-5">
                <div class="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#64ffda"
                            d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z" />
                    </svg>

                    <div class="flex gap-3">
                        <a target="_blank" href="https://github.com/enisgtf/Basic-Landing-Page">
                            <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                        <a target="_blank" href="https://enisgtf-basic-landing-page.netlify.app/">
                            <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                    </div>
                </div>
                <a class="font-semibold text-xxl text-lightest-slate group-hover:text-green transition-colors duration-500">Bedimcode
                    Landing</a>
                <p class="text-m sm:text-xs text-light-slate  my-2">Hoş bir figma tasarımıydı. Birkaç JS
                    kütüphanesi öğrenmemi sağladı.
                </p>
                <ul class="flex flex-wrap gap-2 list-none text-slate text-xxs absolute bottom-8 px-0">
                    <li>SCSS</li>
                    <li>Splide.js</li>
                    <li>ScrollReveal</li>
                </ul>
            </div>
            <div
                class="group w-f h-[350px] max-w-[540px] sm:h-[300px] bg-light-navy shadow-xl px-7 py-8 relative rounded transition duration-500 hover:-translate-y-5 md:hover:translate-y-0 sm:hover:translate-y-0 md:hover:translate-x-5 sm:hover:translate-x-5">
                <div class="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#64ffda"
                            d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z" />
                    </svg>

                    <div class="flex gap-3">
                        <a target="_blank" href="https://github.com/enisgtf/GameDev-HTML-SCSS">
                            <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                        <a target="_blank" href="https://enisgtf-game-dev-basic.netlify.app">
                            <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                    </div>
                </div>
                <a class="font-semibold text-xxl text-lightest-slate group-hover:text-green transition-colors duration-500">GameDev
                    Landing</a>
                <p class="text-m sm:text-xs text-light-slate  my-2">Bana ilk SASS/SCSS öğreten proje. Her zaman olduğu gibi
                    tamamen responsive.
                </p>
                <ul class="flex flex-wrap gap-2 list-none text-slate text-xxs absolute bottom-8 px-0">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Scroll Reveal</li>
                </ul>
            </div>
            <div
                class="group w-f h-[350px] max-w-[540px] sm:h-[300px] bg-light-navy shadow-xl px-7 py-8 relative rounded transition duration-500 hover:-translate-y-5 md:hover:translate-y-0 sm:hover:translate-y-0 md:hover:translate-x-5 sm:hover:translate-x-5">
                <div class="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#64ffda"
                            d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z" />
                    </svg>

                    <div class="flex gap-3">
                        <a target="_blank" href="https://github.com/enisgtf/my-portfolio-website">
                            <Icon name="uil:github" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                        <a target="_blank" href="#">
                            <Icon name="cil:external-link" class="w-[20px] h-[20px] hover:text-white" />
                        </a>
                    </div>
                </div>
                <a class="font-semibold text-xxl text-lightest-slate group-hover:text-green transition-colors duration-500">My
                    Portfolio Website</a>
                <p class="text-m sm:text-xs text-light-slate  my-2">Şuanda incelediğiniz websitesi. Bu proje Nuxt.js ve
                    Tailwind'e alışmamı ve öğrenmemi sağladı.
                </p>
                <ul class="flex flex-wrap gap-2 list-none text-slate text-xxs absolute bottom-8 px-0">
                    <li>Vue.js</li>
                    <li>Nuxt.js</li>
                    <li>Tailwind</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    mounted() {
        this.$sr.reveal('#projects-section', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#projects-span', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#projects-h3', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#projects-1', { delay: 700, origin: "top", distance: "30px" });
        this.$sr.reveal('#projects-2', { delay: 800, origin: "top", distance: "30px" });
        this.$sr.reveal('#projects-diger', { delay: 1000, origin: "top", distance: "30px" });
    },
}
</script>
