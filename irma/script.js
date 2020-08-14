((d) => {
  const resetMove = () => {
    d.querySelector(".home").classList.remove("move-mas");
    d.querySelector(".home").classList.remove("move-periodico");
    d.querySelector(".home").classList.remove("move-identidad");
    d.querySelector(".home").classList.remove("move-revista");
    d.querySelector(".mas").classList.remove("active");
    d.querySelector(".periodico").classList.remove("active");
    d.querySelector(".identidad").classList.remove("active");
    d.querySelector(".revista").classList.remove("active");
    d.querySelectorAll(".menu-links").forEach((el) =>
      el.classList.remove("active")
    );
  };

  d.addEventListener("click", (e) => {
    if (
      e.target.matches('a[href="#mas"]') ||
      e.target.matches('a[href="#mas"] *')
    ) {
      resetMove();
      setTimeout(() => {
        d.querySelector(".home").classList.add("move-mas");
        d.querySelector(".mas").classList.add("active");
        d.querySelector("a[href='#mas']").classList.add("active");
      }, 500);
    }

    if (
      e.target.matches('a[href="#identidad"]') ||
      e.target.matches('a[href="#identidad"] *')
    ) {
      resetMove();
      setTimeout(() => {
        d.querySelector(".home").classList.add("move-identidad");
        d.querySelector(".identidad").classList.add("active");
        d.querySelector("a[href='#identidad']").classList.add("active");
      }, 500);
    }

    if (
      e.target.matches('a[href="#periodico"]') ||
      e.target.matches('a[href="#periodico"] *')
    ) {
      resetMove();
      setTimeout(() => {
        d.querySelector(".home").classList.add("move-periodico");
        d.querySelector(".periodico").classList.add("active");
        d.querySelector("a[href='#periodico']").classList.add("active");
      }, 500);
    }

    if (
      e.target.matches('a[href="#revista"]') ||
      e.target.matches('a[href="#revista"] *')
    ) {
      resetMove();
      setTimeout(() => {
        d.querySelector(".home").classList.add("move-revista");
        d.querySelector(".revista").classList.add("active");
        d.querySelector("a[href='#revista']").classList.add("active");
      }, 500);
    }

    if (
      e.target.matches('a[href="#home"]') ||
      e.target.matches('a[href="#home"] *')
    ) {
      resetMove();
    }
  });

  function slider(el) {
    const $nextBtn = d.querySelector(`${el} .slider-btns .next`),
      $prevBtn = d.querySelector(`${el} .slider-btns .prev`),
      $slides = d.querySelectorAll(`${el} .slider-slide`);

    let i = 0;

    d.addEventListener("click", (e) => {
      console.log;
      if (e.target === $prevBtn) {
        e.preventDefault();
        $slides[i].classList.remove("active");
        i--;

        if (i < 0) {
          i = $slides.length - 1;
        }

        $slides[i].classList.add("active");
      }

      if (e.target === $nextBtn) {
        e.preventDefault();
        $slides[i].classList.remove("active");
        i++;

        if (i >= $slides.length) {
          i = 0;
        }

        $slides[i].classList.add("active");
      }
    });
  }

  slider("[data-id='mas']");
  slider("[data-id='periodico']");
  slider("[data-id='revista']");
  slider("[data-id='identidad']");
})(document);
