let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let firstCount = true

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (firstCount) {
        saveEl.textContent += count
        count = 0
        countEl.textContent = count
        firstCount = false
    } else {
        saveEl.textContent += " - " + count
        count = 0
        countEl.textContent = count
    }
}
