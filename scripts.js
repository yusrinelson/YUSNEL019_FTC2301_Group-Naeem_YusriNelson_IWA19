import {BOOKS_PER_PAGE, authors, genres, books } from "./data.js"

const dataHeaderSearch = document.querySelector('[data-header-search]')
const dataHeaderSettings = document.querySelector('[data-header-setting]')

const dataListItems = document.querySelector('[data-list-items]')
const dataListMessage = document.querySelector('[data-list-message]')
const dataListButton = document.querySelector('[data-list-button]')

const dataListActive = document.querySelector('[data-list-active]')
const dataListBlur = document.querySelector('[data-list-blur]')
const dataListImage = document.querySelector('[data-list-image]')
const dataListTitle = document.querySelector('[data-list-title]')
const dataListSubtitle = document.querySelector('[data-list-subtitle]')
const dataListDescription = document.querySelector('[data-list-description]')

const dataListClose = document.querySelector('[data-list-close]')

const dataSearchOverlay = document.querySelector('[data-search-overlay]')
const dataSearchForm = document.querySelector('[data-search-form]')
const dataSearchTitle = document.querySelector('[data-search-title]')

const dataSearchGenres = document.querySelector('[data-search-genres]')
const dataSearchAuthors = document.querySelector('[data-search-authors]')

const dataSearchCancel= document.querySelector('[data-search-cancel]')

const dataSettingsOverlay = document.querySelector('[data-settings-overlay]')
const dataSettingsForm = document.querySelector('[data-settings-form]')

const dataSettingsTheme = document.querySelector('[data-settings-theme]')
const dataSettingsCancel = document.querySelector('[data-settings-cancel]')

const matches = books
const page = 1;

// if (!books && !Array.isArray(books)) throw new Error('Source required') 
// if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

// day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

const fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)
/**
 * for loop below creates a list of books
 */
for (let i = 0; i < extracted.length; i++ ) {
    const { author: authorId, id, image, title } = extracted[i]

   const element = document.createElement('button')          //creates a button for button effect
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[authorId]}</div>
        </div>
    `

    fragment.appendChild(element)
}

dataListItems.appendChild(fragment)



// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for (let [id, name] = 0 ; i < Object.entries(genres); i++) {

//     const element = document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// dataSearchGenres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// dataSearchAuthors.appendChild(authors)

// dataSettingsTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// dataListButton = `Show more ${(books.length - BOOKS_PER_PAGE)}`

// dataListButton.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0)

dataListButton.innerHTML = /* html */ 
    `<span> Show more </span>
    <span class="list__remaining"> (${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})</span>`

dataSearchCancel.addEventListener('click', () => {                 //"cancel" clicked closes searchbar
    dataSearchOverlay.close()
  
})

// dataSettingsCancel.click = () => { 
//     querySelect(dataSettingsOverlay).open === false 
// }

// dataSettingsForm.submit = () =>  { 
//     actions.settings.submit 
// }

// dataListClose.click = () =>  { 
//     dataListActive.open === false 
// }

// dataListButton.click = () => {
//     document.querySelector(["data-List-Items"]).appendChild(createPreviewsFragment(matches.length, page * BOOKS_PER_PAGE, (page + 1 * BOOKS_PER_PAGE)))
//     actions.list.updateRemaining()
//     page = page + 1
// }

dataHeaderSearch.addEventListener("click", () => {                  //opens searchbar and focuses on title 
    dataSearchTitle.focus()

   if(dataSearchOverlay.open){
    dataHeaderSearch.showModal()
   }else{}
    dataSearchOverlay.showModal()
})

// dataSearchForm.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

    // for (book; booksList; i++) {
    //     titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
    //     authorMatch = filters.author = 'any' || book.author === filters.author
        
        
    //         genreMatch = filters.genre = 'any'
    //         for (genre; book.genres; i++) { 
    //             if (singleGenre = filters.genre){
    //                  genreMatch === true 
    //                 }
    //             }
    //         }

    //     if (titleMatch && authorMatch && genreMatch){
    //         result.push(book)
    //     }

    // if(display.length < 1 ){
    //     dataListMessage.class.add('list__message_show')
    //  } else {
    //     dataListMessage.class.remove('list__message_show')
    // }
 
    

//     dataListItems.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

    // for ({ author, image, title, id }; extracted; i++) {
    //     const { author: authorId, id, image, title } = props

    //     element = document.createElement('button')
    //     element.classList = 'preview'
    //     element.setAttribute('data-preview', id)

    //     element.innerHTML = /* html */ `
    //         <img
    //             class="preview__image"
    //             src="${image}"
    //         />
            
    //         <div class="preview__info">
    //             <h3 class="preview__title">${title}</h3>
    //             <div class="preview__author">${authors[authorId]}</div>
    //         </div>
    //     `

    //     fragment.appendChild(element)
    // }
    
//     dataListItems.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     dataListButton.disabled = initial > 0

//     dataListButton.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     dataSearchOverlay.open = false

// dataSettingsOverlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// dataListItems.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     dataListActive.open === true
//     dataListBlur + dataListImage === active.image
//     dataListTitle === active.title
    
//     dataListSubtitle === '${authors[active.author]} (${Date(active.published).year})'
//     dataListDescription === active.description
// }