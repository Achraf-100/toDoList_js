export let creationDiv = (stock, nouvelleTache, iconYes, iconAnn, input2Modif, iconEdit, iconCheck, iconSuppr, myInputCreation) => {
    stock = document.createElement('div')
    nouvelleTache.appendChild(stock)

    let a = 0

    iconEdit = document.createElement('i');
    iconEdit.className = "fa fa-edit"
    iconCheck = document.createElement('i');
    iconCheck.className = "fa fa-check-square"
    iconSuppr = document.createElement('i');
    iconSuppr.className = "fa fa-trash-alt"
    iconSuppr.style = 'color: red;'

    stock.appendChild(iconEdit)
    stock.appendChild(iconCheck)
    stock.appendChild(iconSuppr)

    nouvelleTache.classList.add('pasFini')
git 



