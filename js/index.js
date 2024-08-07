(function () {
  emailjs.init({
    publicKey: "ps8N4-gPvEXMMpJ_x",
  });
})();
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;
    let sentMsg = document.getElementById("sentMsg");

    // Define email parameters
    let templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_dkltluc", "template_2v0xtv8", templateParams).then(
      (response) => {
        sentMsg.style.display = "block";
        sentMsg.innerText = "Thank You For Your Message !";
        document.getElementById("contact-form").reset();
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });

// ++++++++=========In IIFI type of Implementatio  ++++++=========
(function () {
  const bookPageTurner = {
    pageTurnBtns: document.querySelectorAll(".next-prev-btn"),
    pages: document.querySelectorAll(".book-page.page-right"),
    contactBtn: document.querySelector(".contact-me"),
    backToProfile: document.querySelector(".back-profile"),
    coverRight: document.querySelector(".cover.cover-right"),
    pageLeft: document.querySelector(".book-page.page-left"),
    totalPages: 0,
    pageNo: 0,
    themes: [
      "theme1",
      "theme2",
      "theme3",
      "theme4",
      "theme5",
      "theme6",
      "theme7",
      "theme8",
      "theme9",
    ],
    init: function () {
      // Theme change on load
      let getRendomNo = Math.floor(Math.random() * this.themes.length);
      document.body.classList.add(this.themes[getRendomNo]);

      this.totalPages = this.pages.length;
      this.pageTurnBtns.forEach((element, index) => {
        element.addEventListener("click", () => {
          this.handlePageTurn(element, index);
        });
      });

      this.contactBtn.addEventListener("click", () => {
        this.handleContactMe();
      });

      this.backToProfile.addEventListener("click", () => {
        this.handleBackToProfile();
      });

      setTimeout(() => {
        this.handleCoverRightAnimation();
      }, 2100);

      setTimeout(() => {
        this.handleCoverRightZIndex();
      }, 2800);

      setTimeout(() => {
        this.handlePageLeftZIndex();
      }, 3200);

      this.pages.forEach((_, index) => {
        setTimeout(() => {
          this.handlePageAnimation(index);
        }, (index + 1) * 200 + 2100);
      });
    },

    handlePageTurn: function (element, index) {
      const pageTurnId = element.getAttribute("data-page");
      const pageTurn = document.getElementById(pageTurnId);

      if (pageTurn.classList.contains("turn")) {
        pageTurn.classList.remove("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = 20 - index;
        }, 500);
      } else {
        pageTurn.classList.add("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = 20 + index;
        }, 500);
      }
    },

    handleContactMe: function () {
      this.pages.forEach((page, index) => {
        setTimeout(() => {
          page.classList.add("turn");
          setTimeout(() => {
            page.style.zIndex = 20 + index;
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    },

    handleBackToProfile: function () {
      this.pages.forEach((_, index) => {
        setTimeout(() => {
          this.reversIndex();
          this.pages[this.pageNo].classList.remove("turn");
          setTimeout(() => {
            this.reversIndex();
            this.pages[this.pageNo].style.zIndex = 10 + index;
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    },

    reversIndex: function () {
      this.pageNo--;
      if (this.pageNo < 0) {
        this.pageNo = this.totalPages - 1;
      }
    },

    handleCoverRightAnimation: function () {
      this.coverRight.classList.add("turn");
    },

    handleCoverRightZIndex: function () {
      this.coverRight.style.zIndex = -1;
    },

    handlePageLeftZIndex: function () {
      this.pageLeft.style.zIndex = 20;
    },

    handlePageAnimation: function (index) {
      this.reversIndex();
      this.pages[this.pageNo].classList.remove("turn");
      setTimeout(() => {
        this.reversIndex();
        this.pages[this.pageNo].style.zIndex = 10 + index;
      }, 500);
    },
  };

  bookPageTurner.init();
})();
// ++++++++=========In Class And Object  type of Implementatio  ++++++=========
// class BookPageTurner {
//   constructor() {
//     this.pageTurnBtns = document.querySelectorAll(".next-prev-btn");
//     this.pages = document.querySelectorAll(".book-page.page-right");
//     this.contactBtn = document.querySelector(".contact-me");
//     this.backToProfile = document.querySelector(".back-profile");
//     this.coverRight = document.querySelector(".cover.cover-right");
//     this.pageLeft = document.querySelector(".book-page.page-left");
//     this.totalPages = this.pages.length;
//     this.pageNo = 0;
//     this.init();
//   }
//   handleSetInterVal(time, callback) {
//     setTimeout(() => {
//       callback();
//     }, time);
//   }
//   init() {
//     this.pageTurnBtns.forEach((element, index) => {
//       element.addEventListener("click", () => {
//         this.handlePageTurn(element, index);
//       });
//     });
//     this.contactBtn.addEventListener("click", () => {
//       this.handleContactMe();
//     });
//     this.backToProfile.addEventListener("click", () => {
//       this.handleBackToProfile();
//     });

//     this.handleSetInterVal(2100, this.handleCoverRightAnimation.bind(this))
//     this.handleSetInterVal(2800, this.handleCoverRightZIndex.bind(this))
//     this.handleSetInterVal(3200, this.handlePageLeftZIndex.bind(this))

//     this.pages.forEach((_, index) => {
//       setTimeout(() => {
//         this.handlePageAnimation(index);
//       }, (index + 1) * 200 + 2100);
//     });
//   }

//   handlePageTurn(element, index) {
//     const pageTurnId = element.getAttribute("data-page");
//     const pageTurn = document.getElementById(pageTurnId);

//     if (pageTurn.classList.contains("turn")) {
//       pageTurn.classList.remove("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 - index;
//       }, 500);
//     } else {
//       pageTurn.classList.add("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 + index;
//       }, 500);
//     }
//   }

//   handleContactMe() {
//     this.pages.forEach((page, index) => {
//       setTimeout(() => {
//         this.handlePageAnimation(index);
//       }, (index + 1) * 200 + 100);
//     });
//   }

//   handleBackToProfile() {
//     this.pages.forEach((_, index) => {
//       setTimeout(() => {
//         this.reversIndex();
//         this.pages[this.pageNo].classList.remove("turn");
//         setTimeout(() => {
//           this.reversIndex();
//           this.pages[this.pageNo].style.zIndex = 10 + index;
//         }, 500);
//       }, (index + 1) * 200 + 100);
//     });
//   }

//   reversIndex() {
//     this.pageNo--;
//     if (this.pageNo < 0) {
//       this.pageNo = this.totalPages - 1;
//     }
//   }

//   handleCoverRightAnimation() {
//     this.coverRight.classList.add("turn");
//   }

//   handleCoverRightZIndex() {
//     this.coverRight.style.zIndex = -1;
//   }

//   handlePageLeftZIndex() {
//     this.pageLeft.style.zIndex = 20;
//   }

//   handlePageAnimation(index) {
//     this.reversIndex();
//     this.pages[this.pageNo].classList.remove("turn");
//     setTimeout(() => {
//       this.reversIndex();
//       this.pages[this.pageNo].style.zIndex = 10 + index;
//     }, 500);
//   }
// }
// const bookPageTurner = new BookPageTurner();

// +++++++++++++=========== Class Sec Implementation++++================
// class BookPageTurner {
//   constructor() {
//     this.pageTurnBtns = document.querySelectorAll(".next-prev-btn");
//     this.pages = document.querySelectorAll(".book-page");
//     this.contactBtn = document.querySelector(".contact-me");
//     this.backToProfile = document.querySelector(".back-profile");
//     this.coverRight = document.querySelector(".cover.cover-right");
//     this.pageLeft = document.querySelector(".book-page.page-left");
//     this.totalPages = this.pages.length;
//     this.pageNo = 0;
//     this.timeoutDuration = 200;
//     this.animationDelay = 2100;
//   }
//   init() {
//     this.addEventListeners();
//     setTimeout(() => this.handleCoverRightAnimation(), this.animationDelay);
//     setTimeout(() => this.handleCoverRightZIndex(), this.animationDelay + 700);
//     setTimeout(() => this.handlePageLeftZIndex(), this.animationDelay + 1100);

//     this.pages.forEach((_, index) => {
//       setTimeout(
//         () => this.handlePageAnimation(index),
//         this.animationDelay + (index + 1) * this.timeoutDuration
//       );
//     });
//   }

//   addEventListeners() {
//     this.pageTurnBtns.forEach((element, index) => {
//       element.addEventListener("click", () =>
//         this.handlePageTurn(element, index)
//       );
//     });

//     this.contactBtn.addEventListener("click", () => this.handleContactMe());
//     this.backToProfile.addEventListener("click", () =>
//       this.handleBackToProfile()
//     );
//   }

//   handlePageTurn(element, index) {
//     const pageTurnId = element.getAttribute("data-page");
//     const pageTurn = document.getElementById(pageTurnId);

//     if (pageTurn.classList.contains("turn")) {
//       pageTurn.classList.remove("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 - index;
//       }, 500);
//     } else {
//       pageTurn.classList.add("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 + index;
//       }, 500);
//     }
//   }

//   handleContactMe() {
//     this.pages.forEach((page, index) => {
//       setTimeout(
//         () => this.handlePageAnimation(index),
//         (index + 1) * this.timeoutDuration + 100
//       );
//     });
//   }

//   handleBackToProfile() {
//     this.pages.forEach((_, index) => {
//       setTimeout(() => {
//         this.reversIndex();
//         this.pages[this.pageNo].classList.remove("turn");
//         setTimeout(() => {
//           this.reversIndex();
//           this.pages[this.pageNo].style.zIndex = 10 + index;
//         }, 500);
//       }, (index + 1) * this.timeoutDuration + 100);
//     });
//   }

//   reversIndex() {
//     this.pageNo = (this.pageNo - 1 + this.totalPages) % this.totalPages;
//   }

//   handleCoverRightAnimation() {
//     this.coverRight.classList.add("turn");
//   }

//   handleCoverRightZIndex() {
//     this.coverRight.style.zIndex = -1;
//   }

//   handlePageLeftZIndex() {
//     this.pageLeft.style.zIndex = 20;
//   }

//   handlePageAnimation(index) {
//     this.reversIndex();
//     this.pages[this.pageNo].classList.remove("turn");
//     setTimeout(() => {
//       this.reversIndex();
//       this.pages[this.pageNo].style.zIndex = 10 + index;
//     }, 500);
//   }
// }

// const bookPageTurner = new BookPageTurner();
// bookPageTurner.init();

// +++++++++++++=========== Class third Implementation++++================
// class BookPageTurner {
//   constructor() {
//     this.pageTurnBtns = document.querySelectorAll(".next-prev-btn");
//     this.pages = document.querySelectorAll(".book-page");
//     this.contactBtn = document.querySelector(".contact-me");
//     this.backToProfile = document.querySelector(".back-profile");
//     this.coverRight = document.querySelector(".cover.cover-right");
//     this.pageLeft = document.querySelector(".book-page.page-left");
//     this.totalPages = this.pages.length;
//     this.pageNo = 0;
//     this.animationDelay = 200;
//   }

//   init() {
//     this.addEventListeners();
//   }

//   addEventListeners() {
//     this.pageTurnBtns.forEach((element, index) => {
//       element.addEventListener("click", () =>
//         this.handlePageTurn(element, index)
//       );
//     });

//     this.contactBtn.addEventListener("click", () => this.handleContactMe());
//     this.backToProfile.addEventListener("click", () =>
//       this.handleBackToProfile()
//     );

//     setTimeout(() => {
//       this.handleCoverRightAnimation();
//     }, this.animationDelay * this.totalPages + 100);

//     setTimeout(() => {
//       this.handleCoverRightZIndex();
//       this.handlePageLeftZIndex();
//     }, this.animationDelay * this.totalPages + 1100);

//     this.pages.forEach((_, index) => {
//       setTimeout(() => {
//         this.handlePageAnimation(index);
//       }, this.animationDelay * (index + 1) + 2100);
//     });
//   }

//   handlePageTurn(element, index) {
//     const pageTurnId = element.getAttribute("data-page");
//     const pageTurn = document.getElementById(pageTurnId);

//     if (pageTurn.classList.contains("turn")) {
//       pageTurn.classList.remove("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 - index;
//       }, 500);
//     } else {
//       pageTurn.classList.add("turn");
//       setTimeout(() => {
//         pageTurn.style.zIndex = 20 + index;
//       }, 500);
//     }
//   }

//   handleContactMe() {
//     this.pages.forEach((page, index) => {
//       setTimeout(() => {
//         this.handlePageAnimation(index);
//       }, this.animationDelay * (index + 1) + 100);
//     });
//   }

//   handleBackToProfile() {
//     this.pages.forEach((_, index) => {
//       setTimeout(() => {
//         this.reversIndex();
//         this.pages[this.pageNo].classList.remove("turn");
//         setTimeout(() => {
//           this.reversIndex();
//           this.pages[this.pageNo].style.zIndex = 10 + index;
//         }, 500);
//       }, this.animationDelay * (index + 1) + 100);
//     });
//   }

//   reversIndex() {
//     this.pageNo = (this.pageNo - 1 + this.totalPages) % this.totalPages;
//   }

//   handleCoverRightAnimation() {
//     this.coverRight.classList.add("turn");
//   }

//   handleCoverRightZIndex() {
//     this.coverRight.style.zIndex = -1;
//   }

//   handlePageLeftZIndex() {
//     this.pageLeft.style.zIndex = 20;
//   }

//   handlePageAnimation(index) {
//     this.reversIndex();
//     this.pages[this.pageNo].classList.remove("turn");
//     setTimeout(() => {
//       this.reversIndex();
//       this.pages[this.pageNo].style.zIndex = 10 + index;
//     }, 500);
//   }
// }

// const bookPageTurner = new BookPageTurner();
// bookPageTurner.init();
