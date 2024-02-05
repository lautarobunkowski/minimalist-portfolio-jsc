const ButtonComands = () => {
  const ninja = document.querySelector("ninja-keys");

  const handleClick = () => {
    ninja.open();
    ninja.hotKeysJoinedView = false;

    if (!ninja.querySelector('div[slot="footer"]')) {
      // create div, set attribute slot with value "footer" and inyect as children to ninja
      const slot = document.createElement("div");
      slot.setAttribute("slot", "footer");
      ninja.appendChild(slot);

      const actions = ninja.shadowRoot.querySelectorAll("ninja-action");
      actions.forEach((element) => {
        const kbd = element.shadowRoot.querySelector("kbd");
        kbd.textContent = "";
      });
    }
  };
  return (
    <button
      className="bg-[#38bdf8] fixed bottom-4 right-4 sm:hidden rounded"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-menu-2"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </button>
  );
};

export default ButtonComands;
