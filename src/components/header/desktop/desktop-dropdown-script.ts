const portalSite = document.querySelector(
  "#portal-injection-site",
) as HTMLDivElement;

const restOfSite = document.querySelector("#rest-of-site") as HTMLDivElement;

interface ElementReferences {
  portal: HTMLDivElement;
  svg: SVGElement;
  path: SVGPathElement;
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
  "[data-open-desktop]",
) as NodeListOf<HTMLElement>;

dropdownMenus.forEach((dropdownMenu) => {
  let elementReferences: null | ElementReferences = null;
  const fragmentId = dropdownMenu.dataset.openDesktop;

  dropdownMenu.setAttribute("aria-haspopup", "dialog");
  dropdownMenu.setAttribute("aria-expanded", "false");

  function assignElementReferences({
    portal,
    svg,
    path,
  }: {
    portal: HTMLDivElement;
    svg: SVGElement;
    path: SVGPathElement;
  }) {
    if (elementReferences) {
      elementReferences.portal.remove();
      elementReferences.svg.remove();
    }
    portalSite.appendChild(portal);
    portalSite.appendChild(svg);
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
      svg,
      path,
    };
  }

  function positionPathAndSvg(e: Pick<MouseEvent, "clientX" | "clientY">) {
    if (!elementReferences) return;
    const triggerRect = dropdownMenu.getBoundingClientRect();

    if (e.clientX < triggerRect.left) return;
    if (e.clientX > triggerRect.left + triggerRect.width) return;
    if (e.clientY < triggerRect.top) return;
    if (e.clientY > triggerRect.top + triggerRect.height) return;

    const portalRect = elementReferences.portal.getBoundingClientRect();

    const leftMostX = Math.min(triggerRect.left, portalRect.left);
    const rightMostX = Math.max(
      triggerRect.left + triggerRect.width,
      portalRect.left + portalRect.width,
    );
    const topMostY = Math.min(triggerRect.top, portalRect.top);
    const bottomMostY = Math.max(triggerRect.top, portalRect.top);

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const width = rightMostX - leftMostX;
    const height = bottomMostY - topMostY;
    const savePathYBuffer = 2;
    elementReferences.svg.style.height = `${height}px`;
    elementReferences.svg.style.width = `${width}px`;
    elementReferences.svg.style.top = `${topMostY}px`;
    elementReferences.svg.style.left = `${leftMostX}px`;
    elementReferences.path.setAttribute(
      "d",
      `M 0 ${height} L ${mouseX - leftMostX} ${mouseY - topMostY - savePathYBuffer} L ${width} ${height} z`,
    );
  }

  let lastMouseCoords = { x: 0, y: 0 };
  document.addEventListener("mousemove", (e) => {
    lastMouseCoords = { x: e.clientX, y: e.clientY };
    positionPathAndSvg(e);
  });

  function positionDropdown() {
    if (!elementReferences) return;
    const { top, left } = dropdownMenu.getBoundingClientRect();
    elementReferences.portal.style.top = `${top}px`;
    elementReferences.portal.style.left = `${left}px`;
  }

  document.addEventListener("resize", () => {
    positionDropdown();
    positionPathAndSvg({
      clientX: lastMouseCoords.x,
      clientY: lastMouseCoords.y,
    });
  });

  function cleanupDropdown() {
    elementReferences?.portal?.remove();
    elementReferences?.svg?.remove();
    elementReferences = null;
    restOfSite.removeAttribute("inert");
    dropdownMenu.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    const portal = getNewDropdownContentEl(fragmentId!);
    const { svgEl, pathEl } = createSvgSafeArea();
    assignElementReferences({
      portal,
      svg: svgEl,
      path: pathEl,
    });
    positionDropdown();
    positionPathAndSvg({
      clientX: lastMouseCoords.x,
      clientY: lastMouseCoords.y,
    });
    portalSite.appendChild(elementReferences!.portal);
    dropdownMenu.setAttribute("aria-expanded", "true");

    setTimeout(() => {
      const removeOnOutsideHover = (e: MouseEvent) => {
        if (!elementReferences) return;
        const hoveredElement = e.target as HTMLElement;
        const inPortal = elementReferences.portal.contains(hoveredElement);
        // We can't use `contains` for the trigger because the SVG is in the way, but we don't want to check
        // if the mouse is in the SVG because it's not part of the safe area triangle path (it's just the container)
        const inTrigger = (() => {
          const triggerRect = dropdownMenu.getBoundingClientRect();
          if (e.clientX < triggerRect.left) return false;
          if (e.clientX > triggerRect.left + triggerRect.width) return false;
          if (e.clientY < triggerRect.top) return false;
          if (e.clientY > triggerRect.top + triggerRect.height) return false;
          return true;
        })();
        const inSVG = elementReferences.path.contains(hoveredElement);
        if (elementReferences.portal && !inPortal && !inSVG && !inTrigger) {
          cleanupDropdown();
          document.removeEventListener("mousemove", removeOnOutsideHover);
        }
      };

      document.addEventListener("mousemove", removeOnOutsideHover);
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

  dropdownMenu.addEventListener("focusout", (e) => {
    if (!elementReferences) return;
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget) return;
    if (elementReferences.portal.contains(relatedTarget)) return;
    if (portalSite.contains(relatedTarget)) return;
    cleanupDropdown();
  });

  dropdownMenu.addEventListener("mouseover", () => {
    openDropdown();
  });
});

function createSvgSafeArea() {
  const svgEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  ) as SVGElement;
  svgEl.style.position = "fixed";
  svgEl.style.zIndex = "100";
  const pathEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  ) as SVGPathElement;
  pathEl.setAttribute("pointer-events", "auto");
  // pathEl.setAttribute("stroke", "red");
  // pathEl.setAttribute("stroke-width", "0.4");
  // pathEl.setAttribute("fill", "rgb(114 140 89 / 0.3)");
  pathEl.setAttribute("fill", "rgb(114 140 89 / 0.0)");
  svgEl.append(pathEl);

  return { svgEl, pathEl };
}
