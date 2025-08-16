    function initGallery() {
      console.log("✅ onload triggered: Gallery initialized");

      const images = document.querySelectorAll("#gallery img");
      const largeDisplay = document.getElementById("image");
      const originalText = "Hover or focus on a thumbnail";

      // Loop through each thumbnail
      for (let i = 0; i < images.length; i++) {
        let img = images[i];

        // Add tabindex dynamically (so keyboard users can focus)
        img.setAttribute("tabindex", "0");

        // Mouse events
        img.addEventListener("mouseover", updateDisplay);
        img.addEventListener("mouseleave", resetDisplay);

        // Keyboard focus events
        img.addEventListener("focus", updateDisplay);
        img.addEventListener("blur", resetDisplay);
      }

      // Update display with image + alt text
      function updateDisplay(event) {
        let img = event.target;
        largeDisplay.style.backgroundImage = "url('" + img.src + "')";
        largeDisplay.textContent = img.alt;
        console.log("▶ Updated display with: " + img.alt);
      }

      // Reset display to original
      function resetDisplay() {
        largeDisplay.style.backgroundImage = "";
        largeDisplay.textContent = originalText;
        console.log("◀ Reset display to original text");
      }
    }