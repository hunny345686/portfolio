(function initEmailJs() {
  if (!window.emailjs) {
    return;
  }

  window.emailjs.init({
    publicKey: "ps8N4-gPvEXMMpJ_x",
  });
})();

(function setupContactForm() {
  const form = document.getElementById("contact-form");
  const sentMsg = document.getElementById("sentMsg");

  if (!form || !sentMsg) {
    return;
  }

  const showMessage = (message, isError) => {
    sentMsg.textContent = message;
    sentMsg.style.color = isError ? "#ff9c83" : "";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("msg")?.value.trim();

    if (!name || !email || !message) {
      showMessage("Please fill in all fields before sending.", true);
      return;
    }

    if (!window.emailjs) {
      showMessage("Email service is unavailable right now. Please contact me directly instead.", true);
      return;
    }

    showMessage("Sending your message...");

    window.emailjs.send("service_dkltluc", "template_2v0xtv8", {
      from_name: name,
      from_email: email,
      message,
    }).then(
      () => {
        form.reset();
        showMessage("Thank you. Your message has been sent successfully.");
      },
      () => {
        showMessage("Something went wrong. Please use email or phone instead.", true);
      }
    );
  });
})();

(function setupTabs() {
  const tabs = Array.from(document.querySelectorAll(".tab-pill"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));
  const kicker = document.getElementById("content-kicker");
  const title = document.getElementById("content-title");
  const description = document.getElementById("content-description");
  const mobileQuery = window.matchMedia("(max-width: 820px)");

  if (!tabs.length || !panels.length || !kicker || !title || !description) {
    return;
  }

  const getPreferredTab = () => (mobileQuery.matches ? "profile" : "overview");

  const activateTab = (tabId) => {
    tabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.tab === tabId);
    });

    panels.forEach((panel) => {
      const isActive = panel.id === tabId;
      panel.classList.toggle("is-active", isActive);
      panel.classList.remove("stream-show");

      if (isActive) {
        applyStreaming(panel);
        kicker.textContent = panel.dataset.kicker || "";
        title.textContent = panel.dataset.title || "";
        description.textContent = panel.dataset.description || "";
      }
    });
  };

  const applyStreaming = (panel) => {
    const items = panel.querySelectorAll(
      ".panel-card, .signal-card, .metric-row article, .contact-stack > *, .education-stack > *, .contact-list a, .chip-cluster span, .mini-tags span, .project-links a, .project-links span"
    );

    const baseDelay = 220; // add a slight first-paint delay for smoother entry
    const step = 70;

    items.forEach((el, idx) => {
      el.classList.add("stream-item");
      el.style.setProperty("--stream-delay", `${baseDelay + idx * step}ms`);
    });

    panel.classList.add("stream-show");
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab || "");
    });
  });

  const syncTabForViewport = () => {
    const activeTab = tabs.find((tab) => tab.classList.contains("is-active"))?.dataset.tab;

    if (!mobileQuery.matches && activeTab === "profile") {
      activateTab("overview");
      return;
    }

    if (!activeTab) {
      activateTab(getPreferredTab());
    }
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncTabForViewport);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(syncTabForViewport);
  }

  activateTab(getPreferredTab());
})();
