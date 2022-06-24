## Project Description 
> I would like to build the front-end for a digital library using the Google Books API. Users can input keywords for books that will call the Google Books API and render data matching their search. They will be able to view their search results and then click on specific books to view more details. The purpose of the application is to allow the user to navigate the google books API and use it to discover new and interesting books to read. 

## Application Link
> [Main Character React Application](https://maincharacter-digital-library.netlify.app/)
## Application Screenshot

## Technologies
> Include: HTML, CSS, JavaScript, React, React Router, React Bootstrap

## Installation Instructions
> You can fork this repo and use the SSH code to clone into your terminal

## Getting Started
> Upon opening the application it will automatically load search results for the genre 'fiction'. You can either click from the quick search taps or use the search form to pull up more results on different topics. You can click on the book image or title to go to the book details page, or you can click on the author name to generate a search for books written by authors of the same name. Clicking on the + for each book will add it to the discover section, this section allows for a max of three books and upon clicking the 'discover' button will generate a book details page for a book randomly chosen based off the genres of the books added to the discover section. To return to the search page you can either press the header title or the return button. 

## Link to the API you plan to use
> [API link](https://developers.google.com/books/docs/overview)

## Example data response you plan to use
<img width="1001" alt="Screen Shot 2022-06-13 at 10 16 04 PM" src="https://user-images.githubusercontent.com/104743186/173974196-9c738b00-6019-476f-be25-136b7ffbb1b4.png">

```json
{
"kind": "books#volume",
      "id": "LUmQDwAAQBAJ",
      "etag": "J23+o85BroM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/LUmQDwAAQBAJ",
      "volumeInfo": {
        "title": "House of Earth and Blood",
        "authors": [
          "Sarah J. Maas"
        ],
        "publisher": "Bloomsbury Publishing USA",
        "publishedDate": "2020-03-03",
        "description": "A #1 New York Times bestseller! Sarah J. Maas's brand-new CRESCENT CITY series begins with House of Earth and Blood: the story of half-Fae and half-human Bryce Quinlan as she seeks revenge in a contemporary fantasy world of magic, danger, and searing romance. Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation. She'll do whatever it takes to avenge their deaths. Hunt Athalar is a notorious Fallen angel, now enslaved to the Archangels he once attempted to overthrow. His brutal skills and incredible strength have been set to one purpose-to assassinate his boss's enemies, no questions asked. But with a demon wreaking havoc in the city, he's offered an irresistible deal: help Bryce find the murderer, and his freedom will be within reach. As Bryce and Hunt dig deep into Crescent City's underbelly, they discover a dark power that threatens everything and everyone they hold dear, and they find, in each other, a blazing passion-one that could set them both free, if they'd only let it. With unforgettable characters, sizzling romance, and page-turning suspense, this richly inventive new fantasy series by #1 New York Times bestselling author Sarah J. Maas delves into the heartache of loss, the price of freedom-and the power of love.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781635574050"
          },
          {
            "type": "ISBN_10",
            "identifier": "1635574056"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 648,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 18,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.8.7.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=LUmQDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=LUmQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=LUmQDwAAQBAJ&pg=PP1&dq=crescent+city&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=LUmQDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=LUmQDwAAQBAJ"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 19.6,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 10.72,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=LUmQDwAAQBAJ&rdid=book-LUmQDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 19600000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 10720000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/House_of_Earth_and_Blood-sample-epub.acsm?id=LUmQDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/House_of_Earth_and_Blood-sample-pdf.acsm?id=LUmQDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=LUmQDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Sarah J. Maas&#39;s brand-new CRESCENT CITY series begins with House of Earth and Blood: the story of half-Fae and half-human Bryce Quinlan as she seeks revenge in a contemporary fantasy world of magic, danger, and searing romance."
      }
```

## Visual of your component hierarchy
>
<img width="756" alt="Screen Shot 2022-06-16 at 10 14 35 PM" src="https://user-images.githubusercontent.com/104743186/174211350-17355128-73b5-4b7a-ac9d-1d53677a1f17.png">


## Wire Frames
> 
Homepage
<img width="745" alt="Screen Shot 2022-06-16 at 9 53 51 PM" src="https://user-images.githubusercontent.com/104743186/174207048-0c109b37-6d5a-4342-bc48-45c91bddff76.png">

Search Page
<img width="745" alt="Screen Shot 2022-06-16 at 9 54 20 PM" src="https://user-images.githubusercontent.com/104743186/174207012-c95c1b68-2e7a-434e-bab3-e0fe9d3275bb.png">

Book Details
<img width="745" alt="Screen Shot 2022-06-16 at 9 59 12 PM" src="https://user-images.githubusercontent.com/104743186/174207393-f0cfbea1-e889-4308-893e-fd506e9df489.png">

Discovery Page (upon clicking 'recommend' will display book details page for recommended book)
<img width="745" alt="Screen Shot 2022-06-16 at 9 54 49 PM" src="https://user-images.githubusercontent.com/104743186/174207068-ec002b83-46a9-4c2f-a503-4a3fee627f8e.png">


## User Stories
> As a user...
- I want to have books rendered based on my search keywords... so that I am shown books that are relevant to what I am looking for
- I want to be able to search for books using author names, genres, or title keywords.... so that I have multiple avenues to find different books 
- I want the ability to select a specific book and be shown further details on that book... so that I can learn more about the books I am interested in
- I want the ability to be shown books based on their similarity to other books... so that I can find new books I may be interested in reading

### MVP Goals
> - Upon loading, search results will display books
- Search bar that can take user input and update displayed book results
- If author name is clicked on will generate new search results based on the author
- Book details page will open when a book image or title is clicked on
- Book details page will display book image (if one exists), title, and author(s), genres, and descriptions
- If the discovery tab is clicked the page will display three slots that user can add books to from their search results
- If the user clicks 'discover' the page will open to the book details page of recommended book
- Recommendation is made based on similarity to the books added to the discover slots

### Contribution Guidelines
> - Better filtering of results to remove repeat books or books that don't have image/title/authors/etc
- Refining the book recommendation algorithm