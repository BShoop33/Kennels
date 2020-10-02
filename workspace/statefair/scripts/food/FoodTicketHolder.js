const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("ridePurchased", customEvent => {
        contentTarget.innerHTML = `
        <div class="person"></div>
        <div class="rider"></div>
    `
    })
}