import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

export default ({ app }, inject) => {
  inject('sr', sr);
};