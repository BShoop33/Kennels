const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "rideTicket")

            console.log("Success 2")
        contentTarget.innerHTML = `
        <div class="person"></div>
        <div class="rider"></div>
    `
    })
}

