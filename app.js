const dialog = document.querySelector("#notice");
const title = document.querySelector("#notice-title");
const copy = document.querySelector("#notice-copy");

const destinations = {
  fhp: ["Florida Highway Patrol", "This department page will be connected to Discord sign-in and FHP role verification."],
  ems: ["Orlando EMS", "This department page will be connected to Discord sign-in and EMS role verification."],
  fire: ["Orlando Fire Department", "This department page will be connected to Discord sign-in and Fire role verification."],
  opd: ["Orlando Police Department", "This department page will be connected to Discord sign-in and OPD role verification."],
  civilian: ["Civilian Portal", "The portal will let signed-in citizens manage their persistent citizen profile, vehicles, license details, and businesses."],
  dispatch: ["Dispatch Center", "The dispatch workspace will include on-duty units, live incident lists, and map markers once the backend and map asset are connected."]
};

document.querySelectorAll("[data-destination]").forEach((card) => {
  card.addEventListener("click", () => {
    const item = destinations[card.dataset.destination];
    title.textContent = item[0];
    copy.textContent = item[1];
    dialog.showModal();
  });
});

document.querySelectorAll(".close, .close-action").forEach((button) => {
  button.addEventListener("click", () => dialog.close());
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
