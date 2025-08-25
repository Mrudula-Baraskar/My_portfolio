




    // Show elements when they enter the viewport
        document.addEventListener("DOMContentLoaded", function () {
          const reveals = document.querySelectorAll("[data-reveal]");

          const revealOnScroll = () => {
            reveals.forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
              }
            });
          };

          window.addEventListener("scroll", revealOnScroll);
          revealOnScroll(); // run once in case elements are already visible
        });

        