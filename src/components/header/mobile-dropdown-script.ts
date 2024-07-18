const portalSite = document.querySelector(
  "#portal-injection-site",
) as HTMLDivElement;

const restOfSite = document.querySelector("#rest-of-site") as HTMLDivElement;

interface ElementReferences {
  portal: HTMLDivElement;
}

function getNewDropdownContentEl(id: string) {
  const contentsTemplate = document.querySelector(
    `#${id}`,
  ) as HTMLTemplateElement;
  const newTemplate = contentsTemplate.content.cloneNode(
    true,
  ) as DocumentFragment;
  const dropdownDiv = newTemplate.firstElementChild as HTMLDivElement;
  return dropdownDiv;
}

const dropdownMenus = document.querySelectorAll(
  "[data-open-mobile]",
) as NodeListOf<HTMLElement>;

dropdownMenus.forEach((dropdownMenu) => {
  let elementReferences: null | ElementReferences = null;
  const fragmentId = dropdownMenu.dataset.openMobile;

  dropdownMenu.setAttribute("aria-haspopup", "dialog");
  dropdownMenu.setAttribute("aria-expanded", "false");

  function assignElementReferences({ portal }: { portal: HTMLDivElement }) {
    if (elementReferences) {
      elementReferences.portal.remove();
    }
    portalSite.appendChild(portal);
    restOfSite.setAttribute("inert", "true");
    portal.querySelector("#close-dropdown-menu")?.addEventListener(
      "click",
      () => {
        cleanupDropdown();
      },
      { once: true },
    );
    elementReferences = {
      portal,
    };
  }

  function positionDropdown() {
    if (!elementReferences) return;
    const { top, left } = dropdownMenu.getBoundingClientRect();
    elementReferences.portal.style.top = `${top}px`;
    elementReferences.portal.style.left = `${left}px`;
  }

  document.addEventListener("resize", () => {
    positionDropdown();
  });

  function cleanupDropdown() {
    elementReferences?.portal?.remove();
    elementReferences = null;
    restOfSite.removeAttribute("inert");
    dropdownMenu.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    const portal = getNewDropdownContentEl(fragmentId!);
    assignElementReferences({
      portal,
    });
    positionDropdown();
    portalSite.appendChild(elementReferences!.portal);
    dropdownMenu.setAttribute("aria-expanded", "true");

    setTimeout(() => {
      const removeOnOutsideHover = (e: MouseEvent) => {
        if (!elementReferences) return;
        const hoveredElement = e.target as HTMLElement;
        const inPortal = elementReferences.portal.contains(hoveredElement);
        if (elementReferences.portal && !inPortal) {
          cleanupDropdown();
          document.removeEventListener("click", removeOnOutsideHover);
        }
      };

      document.addEventListener("click", removeOnOutsideHover);
    }, 0);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cleanupDropdown();
    }
  });

  dropdownMenu.addEventListener("click", () => {
    openDropdown();
  });
});
