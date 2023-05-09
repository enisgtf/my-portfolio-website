<template>
    <section class="max-w-[1000px] my-56 md:my-48 sm:my-40" id="hero-section">
        <span class="mb-[20px]" id="hero-span">Merhaba, benim adım</span>
        <h1 class="text-lightest-slate" id="hero-h1">Enis Gatfar.</h1>
        <h2 class="text-slate mt-1" id="hero-h2">Web Geliştirme benim tutkum.</h2>
        <p class="mt-6" id="hero-p">Profesyonel bir ekip çalışmasına dahil olmak, işi çok daha iyi öğrenmek
            isteyen hevesli bir üniversite öğrencisiyim. <strong>Vue.js</strong> ve <strong>Node.js</strong> kullanarak
            geliştirdiğim fullstack web uygulamalarımı inceleyebilirsin!
        </p>
        <div  id="hero-a">
            <a href="https://drive.google.com/file/d/1E0aWhNureRFI-PI74I9AD6U3LBR-Tr-C/view?usp=sharing"
                target="_blank" class="btn mt-10 sm:mt-6 block">Özgeçmişimi PDF olarak görüntüle</a>
        </div>
    </section>
</template>
<script>
export default {
    mounted() {
        this.$sr.reveal('#hero-span', { delay: 500, origin: "top", distance: "30px" });
        this.$sr.reveal('#hero-h1', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#hero-h2', { delay: 700, origin: "top", distance: "30px" });
        this.$sr.reveal('#hero-p', { delay: 800, origin: "top", distance: "30px" });
        this.$sr.reveal('#hero-section', { delay: 900, origin: "top", distance: "30px" });
    }
}
</script>
