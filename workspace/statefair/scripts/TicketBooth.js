const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        console.log("Ride Ticket clicked")
    }
})

const dispatchStateChangeEvent = () => {
    const ridePurchaseEvent = new CustomEvent("ridePurchased")
    eventHub.dispatchEvent(ridePurchaseEvent)
}

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="buyFood">Food Ticket</button>
        </div>
    `
}

