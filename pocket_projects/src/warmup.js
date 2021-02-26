const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let pTag = document.createElement("p")
    pTag.innerHTML = string;
    const clock = document.getElementById('clock');
    if (clock.hasChildNodes()) {
        clock.removeChild(clock.childNodes[0]);
    };
    htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);
// htmlGenerator('Hammad <3 Flatiron and Hackreactor', partyHeader);
