<template>
    <!-- header -->
    <header class="flex justify-between h-[100px] items-center font-sf w-full  md:hidden sm:hidden" id="header">
        <div class="">
            <NuxtLink class="text-green text-heading font-bold" id="logo">ENIS</NuxtLink>
        </div>
        <nav>
            <ol class="flex justify-between gap-24 items-center marker:text-green text-lightest-slate text-xs ">
                <li class="hover:text-green cursor-pointer" id="hakkimda"><a href="#about-section">Hakkımda</a></li>
                <li class="hover:text-green cursor-pointer" id="projeler"><a href="#projects-section">Projelerim</a></li>
                <li class="hover:text-green cursor-pointer" id="iletisim"><a href="#contact-section">İletişim</a></li>
                <a class="list-none border border-green p-2 bg-navy outline-none text-green -m-8 rounded hover:bg-green-tint cursor-pointer"
                    href="https://drive.google.com/file/d/1E0aWhNureRFI-PI74I9AD6U3LBR-Tr-C/view?usp=sharing"
                    target="_blank">Özgeçmiş</a>
            </ol>
        </nav>
    </header>
    <!-- page content -->
    <div>
        <slot />
    </div>
    <!-- footer -->
    <footer class="flex items-center justify-center flex-col" id="footer">
        <a href="https://brittanychiang.com/"
            class="mb-2 font-sf text-xxs text-light-slate tracking-widest hover:text-green transition-colors duration-500">Designed
            by Brittany Chiang</a>
        <a href="https://github.com/enisgtf/my-portfolio-website"
            class="font-sf text-xxs text-light-slate mb-8 tracking-widest hover:text-green transition-colors duration-500">Developed
            by Enis Gatfar</a>
    </footer>
    <div class="fixed bottom-4 right-12 origin-right rotate-90 flex items-center gap-4 sm:hidden" id="left">
        <a href="mailto:enisgatfar34@gmail.com"
            class="font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:-translate-x-4 hover:cursor-pointer">
            enisgatfar34@gmail.com
        </a>
        <div class="h-[2px] w-40 bg-light-slate"></div>
    </div>
    <div class="fixed bottom-4 left-12 origin-left -rotate-90 flex items-center gap-4 sm:hidden" id="right">
        <div class="h-[2px] w-40 bg-light-slate"></div>

        <a target="_blank" href="https://www.linkedin.com/in/enis-gatfar-471314249/">
            <Icon name="uil:linkedin"
                class=" rotate-90 w-[25px] h-[25px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-x-1 hover:cursor-pointer" />
        </a>

        <a target="_blank" href="https://www.instagram.com/enisgtf/">
            <Icon name="uil:instagram"
                class=" rotate-90 w-[25px] h-[25px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-x-1 hover:cursor-pointer" />
        </a>
        <a target="_blank" href="https://github.com/enisgtf/">
            <Icon name="uil:github"
                class=" rotate-90 w-[25px] h-[25px] font-mono text-xs tracking-widest text-light-slate transition-all duration-300 hover:text-green hover:translate-x-1 hover:cursor-pointer" />
        </a>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$sr.reveal('#header', { delay: 200 });
        this.$sr.reveal('#hakkimda', { delay: 300 });
        this.$sr.reveal('#projeler', { delay: 400 });
        this.$sr.reveal('#iletisim', { delay: 500 });
        this.$sr.reveal('#iletisim', { delay: 600 });
        this.$sr.reveal('#ozgecmis', { delay: 700 });
        this.$sr.reveal('#logo', { delay: 800 });
        this.$sr.reveal('#left', { delay: 1000, origin: "left", distance: "30px" });
        this.$sr.reveal('#right', { delay: 1000, origin: "right", distance: "30px" });
        this.$sr.reveal('#footer', { delay: 800, origin: "bottom", distance: "30px" });
    }
}
</script>
