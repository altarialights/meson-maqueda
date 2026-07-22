import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  const context = gsap.context(() => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (document.querySelector('.reference-hero')) {
      const signatureTrace = document.querySelector<SVGTextElement>('.hero-signature__trace');
      const signatureLength = signatureTrace?.getComputedTextLength() ?? 1200;
      gsap.set(signatureTrace, { strokeDasharray: signatureLength, strokeDashoffset: signatureLength, opacity: 1 });
      gsap.set('.hero-signature__fill', { opacity: 0 });
      gsap.set('.hero-signature__nib', { opacity: 0, x: 0 });
      heroTimeline
        .from('.site-header .header-inner', { opacity: 0, y: -10, duration: 0.7 })
        .from('.reference-hero__image', { scale: 1.025, duration: 1.6, ease: 'power2.out' }, 0)
        .to(signatureTrace, { strokeDashoffset: 0, duration: 1.45, ease: 'power1.inOut' }, 0.28)
        .to('.hero-signature__nib', { opacity: 0.72, duration: 0.12 }, 0.3)
        .to('.hero-signature__nib', { x: 1225, duration: 1.38, ease: 'power1.inOut' }, 0.3)
        .to('.hero-signature__nib', { opacity: 0, duration: 0.18 }, 1.6)
        .to('.hero-signature__fill', { opacity: 1, duration: 0.52, ease: 'power2.out' }, 1.42)
        .to(signatureTrace, { opacity: 0.24, duration: 0.45 }, 1.55)
        .to('.hero-signature__shine', { x: 2900, duration: 0.72, ease: 'power2.inOut' }, 1.72)
        .from('.hero-wordmark__founded', { opacity: 0, y: 10, filter: 'blur(5px)', duration: 0.58 }, 1.88)
        .from('.reference-hero__ornament span', { scaleX: 0, duration: 0.48, stagger: 0.04 }, 2.12)
        .from('.reference-hero__ornament i', { opacity: 0, scale: 0, duration: 0.34 }, 2.28)
        .from('.reference-hero__services > *', { opacity: 0, y: 7, duration: 0.42, stagger: 0.045 }, 2.36)
        .from('.reference-hero__actions > *', { opacity: 0, y: 8, duration: 0.42, stagger: 0.06 }, 2.46)
        .from('.hero-scroll', { opacity: 0, y: -5, duration: 0.38 }, 2.68);
      if (window.matchMedia('(max-width: 600px)').matches) heroTimeline.timeScale(1.28);
    } else {
    heroTimeline
      .from('.site-header .header-inner', { opacity: 0, y: -12, duration: 0.65 })
      .from('.hero-image', { scale: 1.035, duration: 1.5, ease: 'power2.out' })
      .from('.hero-eyebrow', { opacity: 0, y: 12, letterSpacing: '0.38em', duration: 0.65 }, 0.2)
      .from('.hero-title-line', { opacity: 0, yPercent: 105, clipPath: 'inset(0 0 100% 0)', duration: 0.85, stagger: 0.1 }, 0.27)
      .from('.hero-copy', { opacity: 0, y: 18, duration: 0.65 }, 0.53)
      .from('.hero-actions > *', { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, 0.63)
      .from('.hero-trust', { opacity: 0, y: 12, duration: 0.55 }, 0.77);
    }
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, { opacity: 0, y: 34, duration: 0.85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
    });
    gsap.utils.toArray<HTMLElement>('.about__media, .dark-feature__media, .events-mosaic, .trust-section figure').forEach((media) => {
      const image = media.querySelector('img');
      if (!image) return;
      gsap.from(image, { scale: 1.045, duration: 1.15, ease: 'power2.out', scrollTrigger: { trigger: media, start: 'top 86%', once: true } });
    });
  });
  window.addEventListener('pagehide', () => context.revert(), { once: true });
}
