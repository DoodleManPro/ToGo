


function addItem() {  

    console.log('working func')

    // Get div: grid-container
    let gridContainer = document.getElementById('GridCON');

    let points = document.getElementById('Points');

    //!================   STEP 1 =============================//

    // Create element: div and add class- 'items'
    const item = document.createElement('div');
    item.classList.add('items')

    //Appending (item) to (grid-container)
    gridContainer.appendChild(item);
    

    //!================   STEP 2 =============================//

    //Create element: div and add class- 'img-div'
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div')

    //Appending (imgDiv) to (item)
    item.appendChild(imgDiv)


    //!================   STEP 3 =============================//

    //Take user input for dishName
    let dishName = prompt('Enter dish name: ')

    //Create element: h1 and add class- 'items-h1'
    const itemsH1 = document.createElement('h1')
    itemsH1.classList.add('items-h1')

    itemsH1.innerText = dishName

    //Appending (itemsH1) to (item)
    item.appendChild(itemsH1)


    //!================   STEP 4 =============================//

    //Take user input for dishDesc
    let dishDesc = prompt('Enter dish description: ')

    //Create element: p and add class- 'items-p'
    const itemsP = document.createElement('p')
    itemsP.classList.add('items-p')

    itemsP.innerText = dishDesc
    
    //Appending (itemsH1) to (item)
    item.appendChild(itemsP)

    /*Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem 
    laboriosam corrupti exercitationem? Beatae repellat, minima dolores natus nisi soluta?*/

    //!================   STEP 5 =============================//

    //Take user input for dishDesc
    let dishPrice = prompt('Enter dish price: ')

    //Create element: h1 and add class- 'items-pr'
    const itemsPrice = document.createElement('h1')
    itemsPrice.classList.add('items-pr')

    itemsPrice.innerText = dishPrice + ' AED'
    
    //Appending (itemsH1) to (item)
    item.appendChild(itemsPrice)




    //!================   STEP 6 =============================//

    //Access key from unsplash
    const accessKey = 'WZArbFLWQLXsdDDxEAyTooM_rhQN820FJ_dqBjHjfl8'
    let keyword = '';
    let page = 1;

    async function searchImages() {
        keyword = dishName;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        const results = data.results;
        results.map((result) => {
            const image = document.createElement('img');
            image.src =  data.results[0].urls.regular;

            console.log(image.src)
            
            imgDiv.appendChild(image);
        })
    }

    searchImages();
    
    console.log(points.innerText)
    points.innerText = Number(points.innerText) + 400;
}

console.log('iwork')