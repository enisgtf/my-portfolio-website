<template>
    <section class="max-w-[900px] my-72 md:my-60 sm:my-24" id="contact-section">
        <div class="flex items-center justify-center flex-col">
            <span class="text-l sm:text-m mb-2" id="contact-span">03. İletişim</span>
            <h4 class="text-lightest-slate font-semibold sm:text-xxxl mb-8 sm:mb-4" id="contact-h4">Bana Ulaşın</h4>
            <p class="text-center mb-12">Remote olan kontratlı, yarı zamanlı, tam zamanlı iş teklifleriniz veya sorularınız
                için bana ulaşabilirsiniz.</p>
            <h6 class="text-xl text-green">telefon numarası</h6>
            <h5 class="text-xxxl sm:text-xxl mb-6 text-lightest-slate"><a href="tel:905334904377" id="contact-tel">+90 533 490 4377</a></h5>
            <h6 class="text-xl text-green">email</h6>
            <h5 class="text-xxxl mb-12 sm:text-xxl text-lightest-slate "><a
                    href="mailto:enisgatfar34@gmail.com" id="contact-email">enisgatfar34@gmail.com</a></h5>
            <div class="flex items-center gap-8 ">

                <a target="_blank" href="https://www.linkedin.com/in/enis-gatfar-471314249/">
                    <Icon name="uil:linkedin"
                        class="w-[30px] h-[30px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-y-1 hover:cursor-pointer" />
                </a>

                <a target="_blank" href="https://www.instagram.com/enisgtf/">
                    <Icon name="uil:instagram"
                        class="w-[30px] h-[30px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-y-1 hover:cursor-pointer" />
                </a>
                <a target="_blank" href="https://github.com/enisgtf/">
                    <Icon name="uil:github"
                        class="w-[30px] h-[30px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-y-1 hover:cursor-pointer" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    mounted() {
        this.$sr.reveal('#contact-section', { delay: 700, origin: "top", distance: "30px" });
        this.$sr.reveal('#contact-span', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#contact-h4', { delay: 600, origin: "top", distance: "30px" });
        this.$sr.reveal('#contact-tel', { delay: 800, origin: "top", distance: "30px" });
        this.$sr.reveal('#contact-email', { delay: 800, origin: "top", distance: "30px" });

    },
}
</script>
