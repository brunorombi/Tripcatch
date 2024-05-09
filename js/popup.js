function setupModal() {
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");
  const input = document.getElementById("email-input");


  openBtn.addEventListener("click", openModal);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      openModal();
    }
  });

  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.add("open");
  }

  function closeModal() {
    modal.classList.remove("open");
    input.value = "";
  }
}


setupModal();
